/* FrontLab — CSS Playground: mã có chú thích, preview sống, điều khiển giá trị */
(function () {
  "use strict";

  const BASE_CSS = [
    "* { box-sizing: border-box; }",
    "html, body { margin: 0; }",
    "body { padding: 24px; background: #f6f3ea; color: #14202d; font-family: \"Be Vietnam Pro\", system-ui, sans-serif; line-height: 1.5; }",
    "h1, h2, h3, p { margin: 0 0 10px; }",
    "button { font: inherit; cursor: pointer; border: 1px solid #cfc7b7; border-radius: 8px; background: #fffdf8; padding: 8px 14px; }",
    "img { display: block; }",
    ".demo-block { margin-bottom: 16px; }",
    ".demo-nested { padding: 10px 14px; border: 1px dashed #cfc7b7; border-radius: 10px; }",
    ".tile { display: grid; place-items: center; background: #fffdf8; border: 1px solid #dcd6c9; border-radius: 10px; color: #5d6a77; font-size: 13px; }"
  ].join("\n");

  const KIND_LABEL = {
    selector: "Bộ chọn",
    "at-rule": "At-rule",
    property: "Thuộc tính",
    "custom-property": "Custom property",
    value: "Hàm / giá trị"
  };
  const VALUE_LABEL = {
    selector: "Phạm vi khớp",
    "at-rule": "Điều kiện",
    property: "Giá trị thường dùng",
    "custom-property": "Kiểu giá trị",
    value: "Cách dùng"
  };
  const VIEWS = [
    { id: "full", label: "100%" },
    { id: "768", label: "768" },
    { id: "390", label: "390" }
  ];

  let active = null;

  function esc(text) {
    return String(text == null ? "" : text)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function attr(text) {
    return esc(text).replace(/'/g, "&#39;");
  }
  function normalize(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }
  function sameName(a, b) {
    a = String(a);
    b = String(b);
    if (a.slice(0, 2) === "--" || b.slice(0, 2) === "--") return a === b;
    return a.toLowerCase() === b.toLowerCase();
  }

  /* ---------- CSS parsing ---------- */
  function parseDecls(body, base) {
    const out = [];
    let start = 0;
    for (let i = 0; i <= body.length; i++) {
      if (i !== body.length && body[i] !== ";") continue;
      const raw = body.slice(start, i);
      const colon = raw.indexOf(":");
      if (colon > 0) {
        const prop = raw.slice(0, colon).trim();
        const after = raw.slice(colon + 1);
        const value = after.trim();
        if (prop && value && !prop.startsWith("/*")) {
          const propAt = raw.indexOf(prop);
          const valueAt = colon + 1 + after.indexOf(value);
          out.push({
            prop: prop.toLowerCase(),
            rawProp: prop,
            value: value,
            propStart: base + start + propAt,
            propEnd: base + start + propAt + prop.length,
            valueStart: base + start + valueAt,
            valueEnd: base + start + valueAt + value.length
          });
        }
      }
      start = i + 1;
    }
    return out;
  }

  function parseRules(css, base) {
    base = base || 0;
    const rules = [];
    let i = 0;
    while (i < css.length) {
      const open = css.indexOf("{", i);
      if (open < 0) break;
      const preRaw = css.slice(i, open);
      const prelude = preRaw.trim();
      if (!prelude) { i = open + 1; continue; }
      let depth = 1;
      let j = open + 1;
      while (j < css.length && depth > 0) {
        const ch = css[j];
        if (ch === "{") depth++;
        else if (ch === "}") depth--;
        j++;
      }
      const bodyStart = open + 1;
      const bodyEnd = j - 1;
      const body = css.slice(bodyStart, bodyEnd);
      const preAt = preRaw.indexOf(prelude);
      const rule = {
        prelude: normalize(prelude),
        preludeStart: base + i + preAt,
        preludeEnd: base + i + preAt + prelude.length,
        decls: [],
        children: []
      };
      if (/^@(media|supports|layer|container|keyframes)/i.test(prelude)) {
        rule.children = parseRules(body, base + bodyStart);
      } else {
        rule.decls = parseDecls(body, base + bodyStart);
      }
      rules.push(rule);
      i = j;
    }
    return rules;
  }

  function flatten(rules, out) {
    out = out || [];
    rules.forEach(function (rule) {
      out.push(rule);
      if (rule.children && rule.children.length) flatten(rule.children, out);
    });
    return out;
  }

  function collectTokens(css) {
    const tokens = [];
    flatten(parseRules(css)).forEach(function (rule) {
      tokens.push({ start: rule.preludeStart, end: rule.preludeEnd, term: rule.prelude, kind: "prelude" });
      rule.decls.forEach(function (decl) {
        tokens.push({ start: decl.propStart, end: decl.propEnd, term: decl.rawProp, kind: "prop" });
      });
    });
    tokens.sort(function (a, b) { return a.start - b.start; });
    return tokens.filter(function (token, index, list) {
      return index === 0 || token.start >= list[index - 1].end;
    });
  }

  function findDecls(css, sel, prop) {
    const matches = [];
    flatten(parseRules(css)).forEach(function (rule) {
      if (rule.prelude !== normalize(sel) && normalize(rule.prelude) !== normalize(sel)) return;
      const decl = rule.decls.find(function (item) { return sameName(item.prop, prop); });
      if (decl) matches.push(decl);
    });
    return matches;
  }

  function setDeclValue(css, sel, prop, value, nth) {
    const matches = findDecls(css, sel, prop);
    const decl = matches[nth || 0];
    if (!decl) return null;
    return css.slice(0, decl.valueStart) + value + css.slice(decl.valueEnd);
  }

  /* ---------- shell ---------- */
  function shell(demo, css, lesson) {
    const tokens = collectTokens(css);
    const unique = [...new Set(tokens.map(function (token) { return token.term; }))].concat(demo.extras || []);
    const glossary = window.CSS_GLOSSARY || {};
    const selectors = [...new Set(unique)].filter(function (term) {
      return glossary[term] && glossary[term].kind === "selector";
    }).length;
    const props = [...new Set(unique)].filter(function (term) {
      return glossary[term] && /property/.test(glossary[term].kind);
    }).length;
    return '<section class="csp" aria-label="CSS Playground">' +
      '<header class="csp-head">' +
        '<div class="csp-head-copy">' +
          '<span class="csp-kicker"><i class="csp-dot" aria-hidden="true"></i>CSS PLAYGROUND</span>' +
          '<b class="csp-title">Chạm vào mã để hiểu — đổi giá trị để thấy tác động</b>' +
          '<span class="csp-meta">' + esc(lesson.file || "demo.css") + " · " + selectors + " bộ chọn · " + props + " thuộc tính</span>" +
        '</div>' +
        '<div class="csp-tools">' +
          '<div class="csp-views" role="group" aria-label="Bề rộng khung xem trước">' +
            VIEWS.map(function (view, index) {
              return '<button type="button" class="csp-view' + (index === 0 ? " is-on" : "") + '" data-csp-view="' + view.id + '" aria-pressed="' + (index === 0) + '">' + view.label + "</button>";
            }).join("") +
          '</div>' +
          '<button type="button" class="csp-reset" data-act="reset">Đặt lại</button>' +
        '</div>' +
      '</header>' +
      '<div class="csp-body">' +
        '<div class="csp-pane csp-code-pane">' +
          '<div class="csp-pane-head"><span>MÃ CÓ CHÚ THÍCH</span><span id="cspCoverage"></span></div>' +
          '<details class="csp-html"><summary>HTML của ví dụ</summary><pre>' + esc(demo.html) + "</pre></details>" +
          '<pre class="csp-code" id="cspCode" tabindex="0" aria-label="CSS có chú thích, bấm vào selector hoặc thuộc tính để xem giải nghĩa"></pre>' +
          '<div class="csp-chips" id="cspChips"></div>' +
          '<div class="csp-term" id="cspTerm" aria-live="polite"></div>' +
        '</div>' +
        '<div class="csp-pane csp-live-pane">' +
          '<div class="csp-pane-head"><span>XEM TRƯỚC</span><span id="cspViewLabel">100%</span></div>' +
          '<div class="csp-stage" id="cspStage"><iframe id="cspFrame" title="Xem trước ví dụ CSS" loading="lazy"></iframe></div>' +
          '<div class="csp-readout" id="cspReadout" aria-live="polite"></div>' +
          '<div class="csp-controls" id="cspControls"></div>' +
        '</div>' +
      '</div>' +
      '<p class="csp-note">CSS khung (<code>*</code>, <code>body</code>, nút, ô mẫu) chỉ để khung xem trước dễ nhìn, không thuộc bài học; viền tô sáng cũng do playground thêm. Mọi selector và thuộc tính trong mã bài đều có giải nghĩa; bấm vào token hoặc dùng bảng điều khiển bên phải.</p>' +
      (demo.hint ? '<p class="csp-hint">' + esc(demo.hint) + "</p>" : "") +
    "</section>";
  }

  /* ---------- mount ---------- */
  function mount(host, lesson, demo) {
    cleanup();
    if (!host || !demo || !lesson) return;
    const css0 = String(lesson.code || "");
    const state = {
      host: host,
      lesson: lesson,
      demo: demo,
      css: css0,
      css0: css0,
      selected: null,
      view: "full",
      frame: null,
      frameDoc: null,
      styleEl: null,
      changed: null,
      observer: null
    };
    active = state;
    host.innerHTML = shell(demo, css0, lesson);

    state.code = host.querySelector("#cspCode");
    state.chips = host.querySelector("#cspChips");
    state.term = host.querySelector("#cspTerm");
    state.controls = host.querySelector("#cspControls");
    state.readout = host.querySelector("#cspReadout");
    state.coverage = host.querySelector("#cspCoverage");
    state.stage = host.querySelector("#cspStage");
    state.frame = host.querySelector("#cspFrame");
    state.viewLabel = host.querySelector("#cspViewLabel");

    state.code.addEventListener("click", function (event) {
      const token = event.target.closest("[data-term]");
      if (token) selectTerm(state, token.getAttribute("data-term"), true);
    });
    state.chips.addEventListener("click", function (event) {
      const chip = event.target.closest("[data-term]");
      if (chip) selectTerm(state, chip.getAttribute("data-term"), true);
    });
    state.controls.addEventListener("click", function (event) {
      const trigger = event.target.closest("[data-term]");
      if (trigger) selectTerm(state, trigger.getAttribute("data-term"), false);
    });
    state.controls.addEventListener("input", onControl);
    state.controls.addEventListener("change", onControl);
    host.addEventListener("click", function (event) {
      const viewBtn = event.target.closest("[data-csp-view]");
      if (viewBtn) { setView(state, viewBtn.getAttribute("data-csp-view")); return; }
      const reset = event.target.closest('[data-act="reset"]');
      if (reset) resetPlayground(state);
    });

    renderCode(state);
    renderChips(state);
    renderControls(state);
    paintCoverage(state);
    state.readout.textContent = "Đang dựng khung xem trước…";

    const first = collectTokens(css0)[0];
    if (first) selectTerm(state, first.term, false);

    state.frame.addEventListener("load", function () { onFrameLoad(state); });
    state.frame.srcdoc = docFor(lesson, demo, css0);
    const roomy = state.stage.clientWidth >= 500;
    setView(state, roomy && demo.view ? demo.view : "full");
    if (window.ResizeObserver) {
      state.observer = new ResizeObserver(function () { applyViewport(state); });
      state.observer.observe(state.stage);
    }
  }

  function cleanup() {
    if (active && active.observer) active.observer.disconnect();
    active = null;
  }

  function docFor(lesson, demo, css) {
    return "<!DOCTYPE html><html lang=\"vi\"><head><meta charset=\"UTF-8\">" +
      "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>" +
      "<link href=\"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">" +
      "<style>" + BASE_CSS + "</style>" +
      "<style id=\"cspLesson\">" + css + "</style>" +
      "</head><body>" + demo.html + "</body></html>";
  }

  function onFrameLoad(state) {
    try {
      state.frameDoc = state.frame.contentDocument;
      state.styleEl = state.frameDoc.getElementById("cspLesson");
    } catch (error) {
      state.frameDoc = null;
      state.styleEl = null;
    }
    applyViewport(state);
    const box = measure(state, state.demo.target);
    if (box) {
      state.readout.innerHTML = "Đo trên <b>" + esc(state.demo.target) + "</b>: " + box.w + " × " + box.h + "px. Bấm một selector để tô sáng phần tử khớp, hoặc đổi giá trị bên dưới.";
    }
    if (state.selected) selectTerm(state, state.selected, false);
  }

  /* ---------- code ---------- */
  function renderCode(state) {
    const tokens = collectTokens(state.css);
    const glossary = window.CSS_GLOSSARY || {};
    let html = "";
    let pos = 0;
    tokens.forEach(function (token) {
      if (token.start < pos) return;
      const entry = glossary[token.term];
      const kind = entry ? entry.kind : (token.kind === "prelude" ? "selector" : "property");
      const cls = "csp-tok is-" + kind +
        (state.selected === token.term ? " is-active" : "") +
        (state.changed === token.term ? " is-updated" : "");
      html += esc(state.css.slice(pos, token.start));
      html += '<button type="button" class="' + cls + '" data-term="' + attr(token.term) + '">' +
        esc(state.css.slice(token.start, token.end)) + "</button>";
      pos = token.end;
    });
    html += esc(state.css.slice(pos));
    const top = state.code.scrollTop;
    state.code.innerHTML = html;
    state.code.scrollTop = top;
  }

  function renderChips(state) {
    const glossary = window.CSS_GLOSSARY || {};
    const terms = uniqueTerms(state);
    const groups = { selector: [], "at-rule": [], property: [], "custom-property": [], value: [] };
    terms.forEach(function (term) {
      const entry = glossary[term];
      const kind = entry ? entry.kind : "property";
      (groups[kind] || groups.property).push(term);
    });
    const order = ["selector", "at-rule", "property", "custom-property", "value"];
    state.chips.innerHTML = order.filter(function (kind) { return groups[kind].length; }).map(function (kind) {
      return '<div class="csp-chipgroup"><span>' + (KIND_LABEL[kind] || kind) + "</span>" +
        groups[kind].map(function (term) {
          const missing = !glossary[term] ? " is-missing" : "";
          const on = state.selected === term ? " is-active" : "";
          return '<button type="button" class="csp-chip' + missing + on + '" data-term="' + attr(term) + '">' + esc(term) + "</button>";
        }).join("") + "</div>";
    }).join("");
  }

  function uniqueTerms(state) {
    const seen = [];
    collectTokens(state.css).forEach(function (token) {
      if (seen.indexOf(token.term) < 0) seen.push(token.term);
    });
    (state.demo.extras || []).forEach(function (term) {
      if (seen.indexOf(term) < 0) seen.push(term);
    });
    return seen;
  }

  function paintCoverage(state) {
    const glossary = window.CSS_GLOSSARY || {};
    const terms = uniqueTerms(state);
    const missing = terms.filter(function (term) { return !glossary[term]; });
    state.coverage.textContent = missing.length
      ? (terms.length - missing.length) + "/" + terms.length + " đã giải nghĩa"
      : terms.length + "/" + terms.length + " đã giải nghĩa";
    state.coverage.classList.toggle("is-missing", missing.length > 0);
  }

  /* ---------- term card ---------- */
  function selectTerm(state, term, highlight) {
    if (!term) return;
    state.selected = term;
    const glossary = window.CSS_GLOSSARY || {};
    const entry = glossary[term];
    const kind = entry ? entry.kind : "property";
    const label = KIND_LABEL[kind] || "Thuộc tính";
    const valueLabel = VALUE_LABEL[kind] || "Giá trị";
    let live = "";
    paintHighlight(state, null);

    if (entry && kind === "selector" && state.frameDoc) {
      let count = 0;
      try { count = state.frameDoc.querySelectorAll(term).length; } catch (error) { count = 0; }
      live = '<div class="csp-live"><span class="csp-live-dot" aria-hidden="true"></span>Khớp <b>' + count + "</b> phần tử trong khung xem trước.";
      if (!count) live += " Selector có thể cần trạng thái hoặc bề rộng khác.";
      live += "</div>";
      if (highlight) paintHighlight(state, term);
    } else if (entry && /property/.test(kind)) {
      live = liveForProperty(state, term);
    }

    const body = entry
      ? '<div class="csp-term-top">' +
          '<div class="csp-term-name"><span class="csp-term-kind">' + esc(label) + "</span>" +
          '<h3>' + esc(term) + "</h3><p>" + esc(entry.title || "") + "</p></div>" +
          (entry.kind === "selector" && term !== ":root" ? '<button type="button" class="csp-term-hl" data-hl="' + attr(term) + '">Tô sáng</button>' : "") +
        "</div>" +
        '<div class="csp-term-grid">' +
          '<div class="csp-term-block"><span>' + esc(valueLabel) + "</span><p>" + esc(entry.values || "") + "</p></div>" +
          '<div class="csp-term-block"><span>Tác động</span><p>' + esc(entry.effect || "") + "</p></div>" +
        "</div>" +
        '<p class="csp-term-what">' + esc(entry.what || "") + "</p>" +
        '<p class="csp-term-tip"><b>Lưu ý:</b> ' + esc(entry.tip || "") + "</p>" + live
      : '<div class="csp-term-top"><div class="csp-term-name"><span class="csp-term-kind">Chưa có mục</span><h3>' + esc(term) + "</h3></div></div>" +
        '<p class="csp-term-what">Token này chưa có trong từ điển. Đây là lỗi nội dung cần bổ sung.</p>';

    state.term.innerHTML = body;
    state.term.querySelectorAll("[data-hl]").forEach(function (button) {
      button.addEventListener("click", function () {
        paintHighlight(state, button.getAttribute("data-hl"));
      });
    });
    syncSelection(state);
  }

  function syncSelection(state) {
    state.code.querySelectorAll(".csp-tok").forEach(function (token) {
      token.classList.toggle("is-active", token.getAttribute("data-term") === state.selected);
    });
    state.chips.querySelectorAll(".csp-chip").forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-term") === state.selected);
    });
  }

  function liveForProperty(state, term) {
    const decls = [];
    flatten(parseRules(state.css)).forEach(function (rule) {
      rule.decls.forEach(function (decl) {
        if (sameName(decl.prop, term)) decls.push({ sel: rule.prelude, value: decl.value });
      });
    });
    if (!decls.length) return '<div class="csp-live">Thuộc tính này có trong từ điển nhưng chưa dùng trong mã của bài.</div>';
    return '<div class="csp-live csp-live-list"><span>Đang dùng:</span>' +
      decls.slice(0, 5).map(function (item) {
        return '<code>' + esc(item.sel) + " { " + esc(term) + ": " + esc(item.value) + " }</code>";
      }).join("") + (decls.length > 5 ? "<small>và " + (decls.length - 5) + " chỗ khác</small>" : "") +
      "</div>";
  }

  function paintHighlight(state, term) {
    if (!state.frameDoc) return;
    let style = state.frameDoc.getElementById("cspHl");
    if (!style) {
      style = state.frameDoc.createElement("style");
      style.id = "cspHl";
      state.frameDoc.head.appendChild(style);
    }
    style.textContent = term
      ? term + " { outline: 3px solid #0f9f8a !important; outline-offset: 2px !important; }"
      : "";
  }

  /* ---------- controls ---------- */
  function renderControls(state) {
    const groups = [];
    const index = {};
    (state.demo.controls || []).forEach(function (control, i) {
      const key = control.sel;
      if (!index[key]) { index[key] = { sel: key, items: [] }; groups.push(index[key]); }
      index[key].items.push({ control: control, i: i });
    });
    state.controls.innerHTML = groups.map(function (group) {
      return '<div class="csp-ctl-group">' +
        '<div class="csp-ctl-sel"><button type="button" data-term="' + attr(group.sel) + '">' + esc(group.sel) + "</button></div>" +
        group.items.map(function (item) {
          const control = item.control;
          const decl = findDecls(state.css, control.sel, control.prop)[control.nth || 0];
          const current = decl ? decl.value : null;
          const name = control.label || control.prop;
          const label = '<button type="button" class="csp-ctl-name" data-term="' + attr(control.prop) + '">' + esc(name) + "</button>";
          let input = "";
          if (!decl) {
            input = '<span class="csp-ctl-missing">không tìm thấy khai báo</span>';
          } else if (control.type === "range") {
            const unit = control.unit || "";
            const num = parseFloat(current);
            input = '<input type="range" min="' + control.min + '" max="' + control.max + '" step="' + control.step + '" value="' + (isNaN(num) ? control.min : num) + '" data-ctl="' + item.i + '" aria-label="' + attr(control.prop) + '">' +
              '<span class="csp-ctl-val" data-val="' + item.i + '">' + esc(current) + "</span>";
          } else if (control.type === "color") {
            const hex = /^#[0-9a-f]{6}$/i.test(current) ? current : "#0f9f8a";
            input = '<input type="color" value="' + hex + '" data-ctl="' + item.i + '" aria-label="' + attr(control.prop) + '">' +
              '<span class="csp-ctl-val" data-val="' + item.i + '">' + esc(current) + "</span>";
          } else {
            const options = control.options || [];
            const list = options.indexOf(current) < 0 && current != null ? [current].concat(options) : options;
            input = '<select data-ctl="' + item.i + '" aria-label="' + attr(control.prop) + '">' +
              list.map(function (option) {
                return '<option value="' + attr(option) + '"' + (option === current ? " selected" : "") + ">" + esc(option) + "</option>";
              }).join("") + "</select>";
          }
          return '<div class="csp-ctl-row">' + label + '<div class="csp-ctl-input">' + input + "</div>" +
            (control.note ? '<p class="csp-ctl-note">' + esc(control.note) + "</p>" : "") + "</div>";
        }).join("") +
      "</div>";
    }).join("");
  }

  function onControl(event) {
    const state = active;
    if (!state) return;
    const input = event.target.closest("[data-ctl]");
    if (!input) return;
    if (input.tagName === "SELECT" && event.type !== "change") return;
    if (input.type === "range" && event.type !== "input") return;
    if (input.type === "color" && event.type !== "input" && event.type !== "change") return;
    const index = Number(input.getAttribute("data-ctl"));
    const control = state.demo.controls[index];
    if (!control) return;
    let value;
    if (control.type === "range") value = input.value + (control.unit || "");
    else value = input.value;
    const decl = findDecls(state.css, control.sel, control.prop)[control.nth || 0];
    if (decl && decl.value === value) return;
    applyControl(state, control, value, index);
  }

  function applyControl(state, control, value, ctlIndex) {
    if (!state.frameDoc || !state.styleEl) return;
    const before = measure(state, control.prop);
    const next = setDeclValue(state.css, control.sel, control.prop, value, control.nth || 0);
    if (next == null) {
      state.readout.innerHTML = '<b>Không tìm thấy</b> khai báo <code>' + esc(control.prop) + "</code> trong <code>" + esc(control.sel) + "</code>.";
      return;
    }
    state.css = next;
    state.styleEl.textContent = next;
    state.changed = control.prop;
    const label = state.controls.querySelector('[data-val="' + ctlIndex + '"]');
    if (label) label.textContent = value;
    renderCode(state);
    const after = measure(state, control.prop);
    const target = state.demo.target || "phần tử đo";
    if (before && after) {
      const valueLine = before.computed === after.computed
        ? "<b>" + esc(control.prop) + "</b> = " + esc(after.computed)
        : "<b>" + esc(control.prop) + "</b> " + esc(before.computed) + " → " + esc(after.computed);
      const boxLine = before.w + "×" + before.h + "px → " + after.w + "×" + after.h + "px";
      state.readout.innerHTML = "Tác động trên <code>" + esc(target) + "</code>: " + valueLine +
        ' · khung <b>' + boxLine + "</b>" +
        (before.computed === after.computed ? ' <span class="csp-warn">Không thấy đổi trên phần tử đo — thuộc tính có thể tác động phần tử khác.</span>' : "");
    }
    if (state.selected === control.prop) {
      selectTerm(state, control.prop, false);
    } else {
      renderChips(state);
    }
  }

  function measure(state, prop) {
    if (!state.frameDoc || !state.frame.contentWindow) return null;
    const doc = state.frameDoc;
    const el = doc.querySelector(state.demo.target) || doc.body;
    if (!el) return null;
    const cs = state.frame.contentWindow.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      computed: cs.getPropertyValue(prop).trim() || "(chưa đặt)",
      w: Math.round(rect.width),
      h: Math.round(rect.height)
    };
  }

  function resetPlayground(state) {
    state.css = state.css0;
    state.changed = null;
    if (state.styleEl) state.styleEl.textContent = state.css0;
    paintHighlight(state, null);
    renderCode(state);
    renderControls(state);
    state.readout.innerHTML = "Đã đặt lại CSS gốc của bài học.";
    if (state.selected) selectTerm(state, state.selected, false);
  }

  /* ---------- viewport ---------- */
  function setView(state, view) {
    state.view = view;
    state.host.querySelectorAll("[data-csp-view]").forEach(function (button) {
      const on = button.getAttribute("data-csp-view") === view;
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", String(on));
    });
    const def = VIEWS.find(function (item) { return item.id === view; });
    state.viewLabel.textContent = def ? def.label : view;
    applyViewport(state);
  }

  function applyViewport(state) {
    if (!state.frame || !state.stage) return;
    const stageW = state.stage.clientWidth;
    if (!stageW) return;
    const target = state.view === "full" ? stageW : Number(state.view);
    const scale = Math.min(1, stageW / target);
    const stageH = state.stage.clientHeight || 340;
    state.frame.style.width = target + "px";
    state.frame.style.height = Math.round(stageH / scale) + "px";
    state.frame.style.transform = scale < 1 ? "scale(" + scale + ")" : "none";
    state.frame.style.transformOrigin = "top left";
    state.frame.style.marginLeft = scale === 1 && target < stageW ? Math.round((stageW - target) / 2) + "px" : "0";
    if (state.viewLabel) {
      const def = VIEWS.find(function (item) { return item.id === state.view; });
      state.viewLabel.textContent = (def ? def.label : state.view) + (scale < 1 ? " · " + Math.round(scale * 100) + "%" : "");
    }
  }

  window.CssPlay = { mount: mount, cleanup: cleanup };
})();
