import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = "/Users/ktdung/Desktop/CSE122_/FrontLab";
const VIDEOS = path.join(ROOT, "videos");
const num = Number(process.argv[2] || 1);
const id = String(num).padStart(2, "0");
const timeline = JSON.parse(fs.readFileSync(path.join(VIDEOS, "studio", "timelines", `bai${id}.json`), "utf8"));
const audio = path.join(VIDEOS, "build", "audio", `bai${id}`, "narration.wav");
const outDir = path.join(VIDEOS, "media");
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, `bai${id}.mp4`);
const framesDir = `/tmp/flab-frames-bai${id}`;
fs.rmSync(framesDir, { recursive: true, force: true });
fs.mkdirSync(framesDir, { recursive: true });

const CDP = "http://127.0.0.1:9224";
const targets = await (await fetch(CDP + "/json/list")).json();
const page = targets.find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
let seq = 0; const pending = new Map();
const frameList = [];
let frameIdx = 0;
let finished = false;
let lastTs = 0;

ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); return; }
  if (m.method === "Page.screencastFrame") {
    const { data, sessionId, metadata } = m.params;
    const file = path.join(framesDir, `f-${String(frameIdx++).padStart(5, "0")}.jpg`);
    fs.writeFileSync(file, Buffer.from(data, "base64"));
    const ts = metadata.timestamp;
    if (!lastTs) lastTs = ts;
    frameList.push({ file, ts });
    lastTs = ts;
    send("Page.screencastFrameAck", { sessionId }).catch(() => {});
  }
};
await new Promise((r) => (ws.onopen = r));
let wsClosed = false;
ws.onclose = () => {
  wsClosed = true;
  for (const [i, resolve] of pending) { resolve({ error: { message: "cdp closed" } }); pending.delete(i); }
};
ws.onerror = () => { wsClosed = true; };
const send = (method, params = {}) => new Promise((r) => {
  if (wsClosed) { r({ error: { message: "cdp closed" } }); return; }
  const i = ++seq;
  const timer = setTimeout(() => { pending.delete(i); r({ error: { message: `timeout ${method}` } }); }, 20000);
  pending.set(i, (msg) => { clearTimeout(timer); r(msg); });
  try { ws.send(JSON.stringify({ id: i, method, params })); } catch { clearTimeout(timer); pending.delete(i); r({ error: { message: `send failed ${method}` } }); }
});
const evalJs = async (expression) => (await send("Runtime.evaluate", { expression, returnByValue: true })).result?.result?.value;

await send("Runtime.enable");
await send("Page.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Emulation.setDeviceMetricsOverride", { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: `http://127.0.0.1:8086/videos/studio/studio.html?id=bai${id}`, waitUntil: "load" }).catch(() => {});
for (let i = 0; i < 60; i++) {
  await new Promise((r) => setTimeout(r, 250));
  if (await evalJs("!!window.__studio?.ready")) break;
}
await new Promise((r) => setTimeout(r, 1200));
console.log(`[bai${id}] recording ${timeline.total.toFixed(1)}s…`);
await evalJs("window.__studio.play(); 'go'");
await new Promise((r) => setTimeout(r, 120));
await send("Page.startScreencast", { format: "jpeg", quality: 90, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 2 });
const deadline = Date.now() + (timeline.total + 25) * 1000;
while (Date.now() < deadline) {
  if (wsClosed) break;
  await new Promise((r) => setTimeout(r, 400));
  if (await evalJs("window.__studio.finishedNow === true")) { finished = true; break; }
}
await new Promise((r) => setTimeout(r, 700));
if (!wsClosed) await send("Page.stopScreencast");
await new Promise((r) => setTimeout(r, 400));
ws.close();
console.log(`[bai${id}] frames=${frameList.length} finished=${finished}`);
if (!finished) { console.error(`[bai${id}] recording did not finish`); process.exit(1); }
if (frameList.length < 10) { console.error("too few frames"); process.exit(1); }

const concat = path.join(framesDir, "frames.ffconcat");
const lines = ["ffconcat version 1.0"];
for (let i = 0; i < frameList.length; i++) {
  const d = i < frameList.length - 1 ? Math.max(0.02, frameList[i + 1].ts - frameList[i].ts) : 1.0;
  lines.push(`file '${frameList[i].file}'`);
  lines.push(`duration ${d.toFixed(4)}`);
}
lines.push(`file '${frameList[frameList.length - 1].file}'`);
fs.writeFileSync(concat, lines.join("\n"));

const ff = "/opt/homebrew/bin/ffmpeg";
execFileSync(ff, ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", concat,
  "-i", audio, "-filter_complex", "[1:a]adelay=400|400,apad[a]",
  "-map", "0:v", "-map", "[a]", "-vf", "fps=30,format=yuv420p", "-r", "30",
  "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-g", "60",
  "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
  "-t", String(timeline.total + 0.7), "-movflags", "+faststart", out], { stdio: "inherit" });
const dur = execFileSync("/opt/homebrew/bin/ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", out]).toString().trim();
const thumb = path.join(VIDEOS, "youtube", `bai${id}`, "thumbnail.jpg");
fs.mkdirSync(path.dirname(thumb), { recursive: true });
execFileSync("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-ss", "3.5", "-i", out, "-frames:v", "1", "-vf", "scale=1280:720", "-q:v", "3", thumb]);
console.log(`[bai${id}] -> ${out} (${dur}s, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB) + thumbnail`);
fs.rmSync(framesDir, { recursive: true, force: true });
