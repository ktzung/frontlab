import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { plan, chapters } from "./plan.mjs";

const ROOT = "/Users/ktdung/Desktop/CSE122_/FrontLab";
const VIDEOS = path.join(ROOT, "videos");
const BUILD = path.join(VIDEOS, "build");
const CACHE = path.join(BUILD, "audio-cache");
const AUDIO = path.join(BUILD, "audio");
const TIMELINES = path.join(VIDEOS, "studio", "timelines");
const SCRIPTS = path.join(VIDEOS, "scripts");
const YOUTUBE = path.join(VIDEOS, "youtube");
for (const d of [CACHE, AUDIO, TIMELINES, SCRIPTS, YOUTUBE]) fs.mkdirSync(d, { recursive: true });

const only = process.argv[2] ? Number(process.argv[2]) : null;
const onlyId = only ? String(only).padStart(2, "0") : null;
const VOICE = "Linh";
const RATE = 172;

function sh(file, args) { return execFileSync(file, args, { stdio: ["ignore", "pipe", "ignore"] }); }
function probeDuration(file) {
  const out = sh("/opt/homebrew/bin/ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file]).toString().trim();
  return Number(out);
}
function sayToWav(text, outWav) {
  const hash = crypto.createHash("sha1").update(VOICE + "|" + RATE + "|" + text).digest("hex");
  const cached = path.join(CACHE, hash + ".wav");
  if (fs.existsSync(cached)) { fs.copyFileSync(cached, outWav); return probeDuration(outWav); }
  const aiff = path.join(CACHE, hash + ".aiff");
  const render = () => {
    sh("/usr/bin/say", ["-v", VOICE, "-r", String(RATE), "-o", aiff, text]);
    sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-i", aiff, "-ar", "48000", "-ac", "1", "-c:a", "pcm_s16le", cached]);
    fs.rmSync(aiff, { force: true });
  };
  render();
  let dur = probeDuration(cached);
  if (!Number.isFinite(dur) || dur < 0.2) {
    fs.rmSync(cached, { force: true });
    render();
    dur = probeDuration(cached);
    if (!Number.isFinite(dur) || dur < 0.2) throw new Error("TTS rỗng cho: " + text.slice(0, 100));
  }
  fs.copyFileSync(cached, outWav);
  return dur;
}
function cleanSpeech(s) {
  return String(s || "")
    .replace(/<\/[a-zA-Z0-9]+>/g, " ")
    .replace(/<([a-zA-Z0-9]+)[^>]*>/g, " $1 ")
    .replace(/::/g, " ")
    .replace(/--/g, "")
    .replace(/(\d+)px/g, "$1 pixel")
    .replace(/%/g, " phần trăm")
    .replace(/[{}]/g, " ")
    .replace(/[•·‣◦]/g, ". ")
    .replace(/\.{3,}/g, " ")
    .replace(/["“”]/g, "")
    .replace(/;/g, ", ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/[,\s]+\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
}
function cleanDisplay(s) {
  return String(s || "")
    .replace(/[•·‣◦]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/;\s*\./g, ".")
    .trim();
}
function clipSentences(s, max) {
  const t = cleanSpeech(s);
  if (t.length <= max) return t;
  const parts = t.split(/(?<=[.!?])\s+/);
  let out = "";
  for (const p of parts) {
    if ((out + " " + p).trim().length > max) break;
    out = (out + " " + p).trim();
  }
  if (out) return out;
  return t.slice(0, max).replace(/[,\s]+\S*$/, "").trim() + ".";
}
function shortenDisplay(s, max) {
  const t = cleanDisplay(s);
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(", "), cut.lastIndexOf(" "));
  return cut.slice(0, stop > 40 ? stop : max).trim() + "…";
}
function shorten(s, max) {
  s = cleanSpeech(s);
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(", "), cut.lastIndexOf(" "));
  return cut.slice(0, stop > 40 ? stop : max).trim() + "…";
}
function splitSentences(s) {
  return cleanSpeech(s).split(/(?<=[.!?])\s+/).filter(Boolean);
}
function findLine(lines, re, from = 0) {
  for (let i = from; i < lines.length; i++) if (re.test(lines[i])) return i;
  return -1;
}
function inlineScriptRange(lines) {
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    if (/<script\b/i.test(lines[i]) && !/\bsrc\s*=/i.test(lines[i])) {
      const end = findLine(lines, /<\/script>/i, i + 1);
      if (end > i) { blocks.push([i + 1, end - 1]); i = end; }
    }
  }
  return blocks.length ? blocks[blocks.length - 1] : null;
}
function sectionCode(lines, a, b) {
  if (a == null || b == null || b < a) return "";
  return lines.slice(a, b + 1).join("\n").replace(/^\n+|\n+$/g, "");
}
function marksFor(code, lang) {
  const lines = code.split("\n");
  const pats = lang === "css"
    ? [/:root\b/, /display\s*:\s*(flex|grid)/, /grid-template/, /@media/, /transition|animation/, /filter\s*:/, /:hover/, /var\(--/]
    : lang === "js"
      ? [/\bfunction\b/, /addEventListener/, /querySelector|getElementById/, /setInterval|setTimeout/, /new Date|Intl\./, /localStorage/, /RegExp|\.test\(|match\(/, /preventDefault/]
      : [/\b(header|nav|main|article|section|aside|figure|form|table)\b/i, /class="[^"]*(navbar|row|col-|card|modal|accordion|carousel|tab|pagination|progress)/, /\b(h1|h2|figure|figcaption|label|input|button|table|thead|tbody)\b/i, /<img\b/i];
  const out = [];
  lines.forEach((line, i) => { if (pats.some((p) => p.test(line))) out.push(i + 1); });
  const seen = [];
  const step = Math.max(1, Math.floor(out.length / 7));
  for (let i = 0; i < out.length && seen.length < 7; i += step) seen.push(out[i]);
  return seen;
}
function hasDbText(code, re) { return re.test(code); }

function buildFor(entry) {
  const id = String(entry.num).padStart(2, "0");
  const facts = JSON.parse(fs.readFileSync(path.join(BUILD, `facts-bai${id}.json`), "utf8"));
  const projectDir = fs.readdirSync(path.join(ROOT, "exercises")).find((d) => d.startsWith(`exercise-${id}-`));
  const files = fs.readdirSync(path.join(ROOT, "exercises", projectDir));
  const hasAssets = files.includes("assets");
  const html = fs.readFileSync(path.join(ROOT, "exercises", projectDir, "index.html"), "utf8");
  const lines = html.replace(/\r\n/g, "\n").split("\n");
  const bodyA = findLine(lines, /<body\b/i), bodyB = findLine(lines, /<\/body>/i, bodyA + 1);
  const styleA = findLine(lines, /<style\b/i), styleB = findLine(lines, /<\/style>/i, styleA + 1);
  const jsRange = inlineScriptRange(lines);
  const firstScript = findLine(lines, /<script\b/i);
  const htmlEnd = (firstScript > bodyA && firstScript < bodyB) ? firstScript - 1 : bodyB - 1;
  const htmlCode = sectionCode(lines, bodyA + 1, htmlEnd);
  const cssCode = sectionCode(lines, styleA + 1, styleB - 1);
  const jsCode = jsRange ? sectionCode(lines, ...jsRange) : "";
  const bootstrap = hasDbText(html, /bootstrap/i);
  const hasJs = Boolean(jsCode) || bootstrap;
  const chapterName = chapters[entry.chapter];
  const project = projectDir;
  const speechProject = project.replace(/-/g, " ");

  const tech = ["HTML5", "CSS3"];
  if (bootstrap) tech.push("Bootstrap 5");
  else if (jsCode) tech.push("JavaScript", "DOM");
  if (/display\s*:\s*flex|flex-direction|justify-content/.test(html)) tech.push("Flexbox");
  if (/display\s*:\s*grid|grid-template/.test(html)) tech.push("CSS Grid");
  if (/@media/.test(html)) tech.push("Responsive");
  if (/var\(--/.test(html)) tech.push("CSS Variables");
  if (/transition|animation/.test(html)) tech.push("Transition");
  if (/filter\s*:/.test(html)) tech.push("CSS Filter");
  if (/addEventListener/.test(html)) tech.push("Events");
  if (/new Date|setInterval/.test(html)) tech.push("Date & Timer");
  const uniqTech = [...new Set(tech)].slice(0, 7);

  const semantic = [...new Set([...html.matchAll(/<(header|nav|main|article|section|aside|figure|form|table|footer)\b/gi)].map((m) => m[1].toLowerCase()))];
  const colors = [...new Set([...html.matchAll(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g)].map((m) => m[0]))].slice(0, 5);
  const functions = [...new Set([...html.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].map((m) => m[1]))].slice(0, 5);
  const events = [...new Set([...html.matchAll(/addEventListener\(\s*["']([a-z]+)["']/g)].map((m) => m[1]))];
  const semanticSpeech = semantic.length ? `Các thẻ ngữ nghĩa chính gồm ${semantic.join(", ")}.` : "";
  const colorSpeech = colors.length ? `Bảng màu chính gồm ${colors.join(", ")}.` : "";
  const fnSpeech = functions.length ? `Các hàm chính là ${functions.join(", ")}.` : "";
  const eventSpeech = events.length ? `Sự kiện được lắng nghe gồm ${events.join(", ")}.` : "";

  const submitFile = `bai${id}.html`;
  const intro = cleanSpeech(`Chào các bạn. Đây là video hướng dẫn bài thực hành số ${entry.num}, ${entry.vi}. Chúng ta sẽ cùng tạo dự án ${speechProject} với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS${hasJs ? ", xử lý JavaScript" : ""}, rồi chạy thử trên trình duyệt. ${entry.insight} Cùng bắt đầu.`);
  const setup = cleanSpeech(`Bước một, tạo dự án. Mở terminal và chạy mkdir ${speechProject}. Tên thư mục viết thường, không dấu, các từ nối bằng dấu gạch ngang, thể hiện đúng số bài và nội dung. Sau đó di chuyển vào thư mục${hasAssets ? ", tạo thêm thư mục assets để chứa hình ảnh" : ""}, và tạo tệp index.html. Trong dự án, tệp chính luôn là index.html. Khi nộp theo quy định của học phần, các em đổi tên thành ${submitFile}.`);
  const htmlScene = cleanSpeech(`Mở tệp index.html. ${entry.html} ${semanticSpeech}`);
  const cssScene = cleanSpeech(`Chuyển sang phần CSS. ${entry.css} ${colorSpeech}`);
  const jsScene = hasJs ? cleanSpeech(bootstrap
    ? `Phần Bootstrap. ${entry.js} ${eventSpeech}`
    : `Phần JavaScript. ${entry.js} ${fnSpeech} ${eventSpeech}`) : "";
  const demo = cleanSpeech(entry.demo.narration);
  const recapDisplay = [
    `Tạo dự án ${project}, tệp chính index.html, khi nộp đổi tên thành ${submitFile}.`,
    shortenDisplay(facts.highlight || entry.insight, 250),
    shortenDisplay(`Lỗi thường gặp: ${facts.mistake || "quên kiểm tra lại giao diện trên màn hình nhỏ."}`, 250)
  ];
  const recapSpeech = [
    `Tạo dự án ${project.replace(/-/g, " ")}, tệp chính index.html, khi nộp đổi tên thành ${submitFile}.`,
    clipSentences(facts.highlight || entry.insight, 240),
    `Lỗi thường gặp: ${clipSentences(facts.mistake || "quên kiểm tra lại giao diện trên màn hình nhỏ.", 220)}`
  ];
  const recapPoints = recapDisplay;
  const recap = cleanSpeech(`Tổng kết bài ${entry.num}. ${recapSpeech.join(" ")}`);

  const commands = [
    { cmd: `mkdir ${project}`, out: `✔ đã tạo thư mục ${project}` },
    { cmd: `cd ${project}`, out: `→ đang ở ~/frontlab/${project}` }
  ];
  if (hasAssets) commands.push({ cmd: "mkdir assets", out: "✔ thư mục assets đã sẵn sàng" });
  commands.push({ cmd: "touch index.html", out: "✔ tệp index.html được tạo" });
  commands.push({ cmd: "code index.html", out: "→ mở dự án trong VS Code" });

  const briefSteps = (facts.steps || []).slice(0, 3).map((st) => ({
    label: cleanDisplay(st.label),
    text: clipSentences(st.text, 240),
    display: cleanDisplay(st.text)
  }));
  const brief = briefSteps.length
    ? cleanSpeech(`Trước khi viết mã, hãy nắm rõ yêu cầu của bài. Bài gồm ${briefSteps.length} phần chính. ${briefSteps.map((st) => `${st.label}. ${st.text}`).join(" ")}`)
    : "";

  const scenes = [];
  const add = (scene) => scenes.push(scene);
  add({ type: "intro", label: "Mở đầu", narration: intro });
  if (brief) add({ type: "brief", label: "Yêu cầu", narration: brief, points: briefSteps.map((st) => `${st.label} — ${shortenDisplay(st.display, 260)}`), heading: `Bài ${String(entry.num).padStart(2, "0")} — yêu cầu & tiêu chí` });
  add({ type: "setup", label: "Tạo dự án", narration: setup, commands });
  add({ type: "code", label: entry.chapter === 4 ? "Cấu trúc trang" : "Cấu trúc HTML", narration: htmlScene, lang: "html", code: htmlCode, marks: marksFor(htmlCode, "html"), annotation: "Dựng cây DOM bằng thẻ ngữ nghĩa" });
  add({ type: "code", label: entry.chapter === 4 ? "Tùy biến CSS" : "Định dạng CSS", narration: cssScene, lang: "css", code: cssCode, marks: marksFor(cssCode, "css"), annotation: "Hệ màu, bố cục và responsive" });
  if (hasJs) {
    add({ type: "code", label: bootstrap ? "Bootstrap" : "JavaScript", narration: jsScene,
      lang: bootstrap ? "html" : "js", code: bootstrap ? htmlCode : jsCode,
      marks: marksFor(bootstrap ? htmlCode : jsCode, bootstrap ? "html" : "js"),
      annotation: bootstrap ? "Navbar, grid và component Bootstrap" : "Xử lý sự kiện và cập nhật DOM" });
  }
  add({ type: "demo", label: "Chạy thử", narration: demo, actions: entry.demo.actions });
  add({ type: "recap", label: "Tổng kết", narration: recap, points: recapPoints, heading: `Bài ${String(entry.num).padStart(2, "0")} — điều cần nhớ` });

  // Voice over and timings.
  const lead = 0.5, gap = 0.55, tail = 1.0;
  const audioDir = path.join(AUDIO, `bai${id}`);
  fs.mkdirSync(audioDir, { recursive: true });
  let t = lead;
  scenes.forEach((s, i) => {
    const wav = path.join(audioDir, `scene-${i + 1}.wav`);
    const dur = sayToWav(s.narration, wav);
    s.audio = wav;
    s.audioDur = dur;
    s.start = t;
    let sceneDur = dur + (i === scenes.length - 1 ? tail : gap);
    if (s.type === "demo") {
      const lastAction = (s.actions || []).reduce((m, a) => Math.max(m, a.t || 0), 0);
      sceneDur = Math.max(sceneDur, lastAction + 6.5);
    }
    s.dur = sceneDur;
    s.caption = shorten(s.narration, 250);
    t += sceneDur;
  });
  const total = t;

  // Assemble narration track: lead + wav + gap ... + tail
  const silence = path.join(BUILD, "silence.wav");
  if (!fs.existsSync(silence)) sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "1", "-c:a", "pcm_s16le", silence]);
  const list = path.join(audioDir, "concat.txt");
  const entries = [];
  const gapWav = path.join(BUILD, "gap.wav");
  if (!fs.existsSync(gapWav)) sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", String(gap), "-c:a", "pcm_s16le", gapWav]);
  const leadWav = path.join(BUILD, "lead.wav");
  if (!fs.existsSync(leadWav)) sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", String(lead), "-c:a", "pcm_s16le", leadWav]);
  entries.push(leadWav);
  scenes.forEach((s, i) => {
    entries.push(s.audio);
    if (i < scenes.length - 1) {
      // pad scene audio to its full duration with silence
      const pad = Math.max(0, s.dur - s.audioDur - gap);
      if (pad > 0.01) {
        const padWav = path.join(audioDir, `pad-${i + 1}.wav`);
        sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", pad.toFixed(3), "-c:a", "pcm_s16le", padWav]);
        entries.push(padWav);
      }
      entries.push(gapWav);
    }
  });
  const tailWav = path.join(BUILD, "tail.wav");
  if (!fs.existsSync(tailWav)) sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", String(tail), "-c:a", "pcm_s16le", tailWav]);
  entries.push(tailWav);
  fs.writeFileSync(list, entries.map((p) => `file '${p.replace(/'/g, "'\\''")}'`).join("\n"));
  const narrationWav = path.join(audioDir, "narration.wav");
  sh("/opt/homebrew/bin/ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", list, "-c:a", "pcm_s16le", narrationWav]);

  const timeline = {
    id: `bai${id}`, num: entry.num, title: entry.vi, chapter: entry.chapter, chapterName,
    project: projectDir, submitFile, tech: uniqTech, hasJs,
    files: ["index.html", ...(hasAssets ? ["assets/"] : [])],
    total: Number(total.toFixed(2)),
    scenes: scenes.map((s) => ({
      type: s.type, label: s.label, start: Number(s.start.toFixed(3)), dur: Number(s.dur.toFixed(3)),
      narration: s.narration, caption: s.caption,
      ...(s.lang ? { lang: s.lang, code: s.code, marks: s.marks, annotation: s.annotation } : {}),
      ...(s.commands ? { commands: s.commands } : {}),
      ...(s.actions ? { actions: s.actions } : {}),
      ...(s.points ? { points: s.points, heading: s.heading } : {})
    }))
  };
  fs.writeFileSync(path.join(TIMELINES, `bai${id}.json`), JSON.stringify(timeline, null, 1));

  // SRT with sentence-level cues.
  let srt = "";
  let cue = 1;
  const ts = (x) => {
    const h = Math.floor(x / 3600), m = Math.floor((x % 3600) / 60), s = Math.floor(x % 60), ms = Math.round((x % 1) * 1000);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
  };
  scenes.forEach((s) => {
    const sentences = splitSentences(s.narration);
    const chars = sentences.reduce((a, b) => a + b.length, 0) || 1;
    let at = s.start + 0.15;
    const usable = Math.max(0.8, s.audioDur);
    sentences.forEach((line) => {
      const d = Math.max(0.9, (line.length / chars) * usable);
      srt += `${cue++}\n${ts(at)} --> ${ts(Math.min(s.start + s.dur - 0.05, at + d))}\n${line}\n\n`;
      at += d + 0.05;
    });
  });
  const ydir = path.join(YOUTUBE, `bai${id}`);
  fs.mkdirSync(ydir, { recursive: true });
  fs.writeFileSync(path.join(ydir, "captions.srt"), srt);

  // YouTube description with chapter timestamps.
  const mmss = (x) => `${String(Math.floor(x / 60)).padStart(2, "0")}:${String(Math.floor(x % 60)).padStart(2, "0")}`;
  const chaptersText = scenes.map((s) => `${mmss(s.start)} ${s.label}`).join("\n");
  const desc = [
    `${entry.vi} — hướng dẫn giải từng bước (${chapterName}).`,
    ``,
    `Dự án: ${projectDir}/index.html (khi nộp đổi tên thành ${submitFile}).`,
    `Công nghệ: ${uniqTech.join(", ")}.`,
    ``,
    `Chương:`,
    chaptersText,
    ``,
    `Nội dung: tạo dự án với tên tiếng Anh chuẩn, phân tích cấu trúc HTML, định dạng CSS${hasJs ? ", xử lý JavaScript/Bootstrap" : ""}, chạy thử và kiểm tra responsive.`,
    ``,
    `#FrontLab #Frontend #HTML5 #CSS3${hasJs ? " #JavaScript" : ""} #BàiTậpThựcHành`
  ].join("\n");
  fs.writeFileSync(path.join(ydir, "description.txt"), desc);
  fs.writeFileSync(path.join(ydir, "metadata.json"), JSON.stringify({
    id: `bai${id}`, num: entry.num, title: `Bài ${String(entry.num).padStart(2, "0")} – ${entry.vi} | Hướng dẫn Frontend từng bước`,
    chapter: chapterName, project: projectDir, submitFile,
    tech: uniqTech, duration: Math.round(total), visibility: "unlisted",
    tags: ["FrontLab", "frontend", "HTML5", "CSS3", "JavaScript", "Bootstrap", "bài tập thực hành", entry.slug],
    youtubeId: ""
  }, null, 1));

  // Human-readable script.
  const md = [`# Bài ${id} — ${entry.vi}`, ``, `Dự án: ${projectDir} · Tệp nộp: ${submitFile}`, ``, ...scenes.map((s) => `## ${mmss(s.start)} — ${s.label}\n\n${s.narration}\n`)].join("\n");
  fs.writeFileSync(path.join(SCRIPTS, `bai${id}.md`), md);

  console.log(`bai${id}: ${scenes.length} scenes, ${mmss(total)} (${total.toFixed(1)}s), audio ${probeDuration(narrationWav).toFixed(1)}s`);
}

for (const entry of plan) {
  if (only && entry.num !== only) continue;
  buildFor(entry);
}
