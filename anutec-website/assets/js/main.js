/* =========================================================
   ANUTEC ADVERTISING — site script
   Edit CONFIG below with your real contact details.
   ========================================================= */
const CONFIG = {
  phone: "+91 90000 00000",        // shown on site
  whatsapp: "919000000000",        // digits only, with country code
  email: "hello@anutecadvertising.com",
  city: "Hyderabad, Telangana",
  drivers: 200,
  instagram: "#",                  // paste your Instagram URL
  linkedin: "#",                   // paste your LinkedIn URL
  youtube: "#"                     // paste your YouTube URL
};

// Always animate, even when the OS asks for reduced motion.
const reduceMotion = false;
const page = document.body.dataset.page || "home";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- theme (before paint as much as possible) ---------- */
(function () {
  let t = null;
  try { t = localStorage.getItem("anutec-theme"); } catch (e) {}
  if (t) document.documentElement.dataset.theme = t;
})();
const isLight = () => document.documentElement.dataset.theme === "light";

/* ---------- shared layout ---------- */
const NAV = [
  ["home", "index.html", "Home"],
  ["story", "about.html", "Our Story"],
  ["industries", "industries.html", "Industries"],
  ["network", "network.html", "Network"],
  ["contact", "contact.html", "Contact"]
];
const I = {
  sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>'
};

function buildLayout() {
  const links = NAV.map(([k, h, l]) => `<li><a href="${h}" class="${k === page ? "active" : ""}">${l}</a></li>`).join("");
  const drawerLinks = NAV.map(([k, h, l]) => `<a href="${h}" class="${k === page ? "active" : ""}">${l}${I.arrow.replace("<svg", '<svg width="18" height="18"')}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="g-brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0a6c9"/><stop offset=".5" stop-color="#d45fb8"/><stop offset="1" stop-color="#9b5de5"/></linearGradient>
    <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dea4"/><stop offset="1" stop-color="#c9974a"/></linearGradient>
  </defs></svg>
  <div class="ambient" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="progress" aria-hidden="true"></div>
  <div class="wipe" aria-hidden="true"><img src="assets/img/emblem.jpg" alt=""></div>
  <header class="header">
    <nav class="nav glass" aria-label="Main">
      <a class="brand" href="index.html" aria-label="Anutec Advertising home">
        <img src="assets/img/emblem.jpg" alt="Anutec emblem" width="42" height="42">
        <span><b>anutec</b><small>ADVERTISING</small></span>
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <button class="icon-btn" id="themeBtn" aria-label="Toggle light and dark mode">${I.sun}${I.moon}</button>
        <a class="btn btn-primary btn-desk" href="contact.html">Book a campaign</a>
        <button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">${I.menu}</button>
      </div>
    </nav>
  </header>
  <div class="drawer glass" id="drawer">${drawerLinks}<a class="btn btn-primary" href="contact.html" style="justify-content:center">Book a campaign</a></div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-inner glass">
        <div>
          <a class="brand" href="index.html"><img src="assets/img/emblem.jpg" alt="" width="42" height="42"><span><b>anutec</b><small>ADVERTISING</small></span></a>
          <p>Moving brands across Hyderabad — one cab, one street, one passenger at a time. ${CONFIG.drivers}+ driver partners and growing.</p>
          <div class="socials">
            <a href="${CONFIG.instagram}" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="${CONFIG.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg></a>
            <a href="${CONFIG.youtube}" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.8 15.1V8.9L15.5 12z"/></svg></a>
          </div>
        </div>
        <div><h5>Explore</h5><ul>${NAV.map(([, h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
        <div><h5>We advertise</h5><ul>
          <li><a href="industries.html#brands">Brands</a></li><li><a href="industries.html#hospitals">Hospitals</a></li>
          <li><a href="industries.html#food">Food chains</a></li><li><a href="industries.html#realestate">Real estate</a></li>
          <li><a href="industries.html#orgs">Organisations</a></li></ul></div>
        <div><h5>Talk to us</h5><ul>
          <li><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${CONFIG.phone}</a></li>
          <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
          <li><a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a></li>
          <li><span class="muted">${CONFIG.city}</span></li></ul></div>
      </div>
      <div class="copy"><span>© ${new Date().getFullYear()} Anutec Advertising. All rights reserved.</span><span>Made in Hyderabad ✦</span></div>
    </div>
  </footer>
  <a class="wa" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi Anutec, I'd like to advertise on cabs in Hyderabad.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>
  <div class="toast glass" id="toast" role="status"></div>
  `);

  $$("[data-cfg]").forEach(el => {
    const k = el.dataset.cfg;
    el.textContent = CONFIG[k];
    if (el.tagName === "A") {
      if (k === "phone") el.href = "tel:" + CONFIG.phone.replace(/\s/g, "");
      if (k === "email") el.href = "mailto:" + CONFIG.email;
    }
  });
  $$("[data-wa]").forEach(a => a.href = "https://wa.me/" + CONFIG.whatsapp);

  $("#themeBtn").addEventListener("click", () => {
    const next = isLight() ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("anutec-theme", next); } catch (e) {}
    document.dispatchEvent(new Event("themechange"));
  });
  const drawer = $("#drawer"), mb = $("#menuBtn");
  mb.addEventListener("click", () => {
    const o = drawer.classList.toggle("open");
    mb.setAttribute("aria-expanded", o);
  });
  drawer.addEventListener("click", e => { if (e.target.closest("a")) drawer.classList.remove("open"); });
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- reveal + counters ---------- */
function initReveal() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      $$("[data-count]", e.target).concat(e.target.matches("[data-count]") ? [e.target] : []).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: .15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal, [data-count]").forEach(el => io.observe(el));
}
function countUp(el) {
  if (el._done) return; el._done = true;
  const end = parseFloat(el.dataset.count), suf = el.dataset.suffix || "", pre = el.dataset.prefix || "";
  const dur = 1800, t0 = performance.now();
  const fmt = v => pre + Math.round(v).toLocaleString("en-IN") + suf;
  if (reduceMotion) { el.textContent = fmt(end); return; }
  (function tick(t) {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt(end * e);
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ---------- sparklines ---------- */
function initSparks() {
  $$("[data-spark]").forEach(svg => {
    const pts = svg.dataset.spark.split(",").map(Number);
    const max = Math.max(...pts), min = Math.min(...pts), w = 100, h = 34;
    const d = pts.map((v, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * w},${h - 3 - ((v - min) / (max - min || 1)) * (h - 6)}`).join(" ");
    const col = svg.dataset.color || "#f0a6c9";
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = `<path d="${d}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
  });
}

/* ---------- canvas helper ---------- */
function fitCanvas(c) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = c.getBoundingClientRect();
  c.width = Math.max(1, r.width * dpr); c.height = Math.max(1, r.height * dpr);
  const ctx = c.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: r.width, h: r.height };
}
function runWhenVisible(el, frame) {
  let vis = false, raf = 0;
  const loop = t => { frame(t); if (vis && !reduceMotion) raf = requestAnimationFrame(loop); };
  new IntersectionObserver(([e]) => {
    vis = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (vis) raf = requestAnimationFrame(loop);
  }).observe(el);
  frame(0);
}

/* ---------- NETWORK MAP: Hyderabad nodes, growing fleet ---------- */
const AREAS = [
  ["HITEC City", .32, .40], ["Gachibowli", .26, .50], ["Madhapur", .37, .45], ["Kondapur", .28, .36],
  ["Kukatpally", .40, .26], ["Jubilee Hills", .44, .50], ["Banjara Hills", .50, .54], ["Ameerpet", .52, .43],
  ["Begumpet", .58, .40], ["Secunderabad", .66, .34], ["Hussain Sagar", .58, .50], ["Abids", .60, .60],
  ["Charminar", .62, .70], ["LB Nagar", .78, .66], ["Uppal", .80, .44], ["Miyapur", .32, .22],
  ["Kokapet", .18, .56], ["Shamshabad Airport", .50, .90], ["Dilsukhnagar", .72, .62], ["Manikonda", .30, .60]
];
function initNetworkMap() {
  const c = $("#netCanvas"); if (!c) return;
  let S = fitCanvas(c);
  addEventListener("resize", () => S = fitCanvas(c));
  const target = +(c.dataset.target || CONFIG.drivers + 14);
  const cabs = [];
  let started = 0, shown = 0;
  const out = $("#netCount");
  const spawn = () => {
    const a = Math.floor(Math.random() * AREAS.length);
    let b = Math.floor(Math.random() * AREAS.length); if (b === a) b = (b + 3) % AREAS.length;
    return { a, b, p: Math.random(), s: .0015 + Math.random() * .003, bend: (Math.random() - .5) * .25, born: performance.now() };
  };
  new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) started = performance.now(); }, { threshold: .3 }).observe(c);
  if (reduceMotion) { started = 1; }

  runWhenVisible(c, t => {
    const { ctx, w, h } = S, light = isLight();
    ctx.clearRect(0, 0, w, h);
    const P = ([, x, y]) => [x * w, y * h];
    // ORR ring
    ctx.strokeStyle = light ? "rgba(155,93,229,.35)" : "rgba(232,194,122,.28)"; ctx.setLineDash([6, 8]); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.ellipse(w * .5, h * .5, w * .42, h * .43, -.1, 0, 7); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = light ? "rgba(120,70,170,.6)" : "rgba(232,194,122,.6)"; ctx.font = "600 10px Outfit"; ctx.fillText("OUTER RING ROAD", w * .08 + 4, h * .5);
    // lake
    ctx.fillStyle = light ? "rgba(120,150,230,.25)" : "rgba(110,130,230,.18)";
    ctx.beginPath(); ctx.ellipse(w * .575, h * .49, w * .028, h * .045, .4, 0, 7); ctx.fill();
    // roads (connect neighbours)
    ctx.strokeStyle = light ? "rgba(120,70,170,.14)" : "rgba(255,255,255,.07)"; ctx.lineWidth = 1;
    AREAS.forEach((A, i) => AREAS.forEach((B, j) => {
      if (j <= i) return;
      const d = Math.hypot(A[1] - B[1], A[2] - B[2]);
      if (d < .17) { ctx.beginPath(); ctx.moveTo(...P(A)); ctx.lineTo(...P(B)); ctx.stroke(); }
    }));
    // grow fleet
    if (started) {
      const p = reduceMotion ? 1 : Math.min(1, (performance.now() - started) / 5000);
      const want = Math.round(target * (1 - Math.pow(1 - p, 3)));
      while (cabs.length < Math.min(want, 160)) cabs.push(spawn()); // draw up to 160 dots for performance
      if (want !== shown) { shown = want; if (out) out.textContent = shown; }
    }
    // cabs
    ctx.globalCompositeOperation = light ? "source-over" : "lighter";
    cabs.forEach((cb, i) => {
      if (!reduceMotion) cb.p += cb.s;
      if (cb.p >= 1) { Object.assign(cb, spawn(), { p: 0 }); }
      const [x1, y1] = P(AREAS[cb.a]), [x2, y2] = P(AREAS[cb.b]);
      const mx = (x1 + x2) / 2 + (y2 - y1) * cb.bend, my = (y1 + y2) / 2 - (x2 - x1) * cb.bend;
      const q = cb.p, x = (1 - q) ** 2 * x1 + 2 * (1 - q) * q * mx + q * q * x2, y = (1 - q) ** 2 * y1 + 2 * (1 - q) * q * my + q * q * y2;
      const col = i % 3 === 0 ? "232,194,122" : i % 3 === 1 ? "212,95,184" : "155,93,229";
      const fade = Math.min(1, (performance.now() - cb.born) / 600);
      ctx.fillStyle = `rgba(${col},${.25 * fade})`; ctx.beginPath(); ctx.arc(x, y, 6, 0, 7); ctx.fill();
      ctx.fillStyle = `rgba(${col},${fade})`; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill();
    });
    ctx.globalCompositeOperation = "source-over";
    // nodes + labels
    AREAS.forEach((A, i) => {
      const [x, y] = P(A), pulse = (t / 1000 + i * .37) % 2;
      ctx.strokeStyle = `rgba(240,166,201,${Math.max(0, .6 - pulse * .3)})`; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(x, y, 4 + pulse * 12, 0, 7); ctx.stroke();
      ctx.fillStyle = light ? "#7b3fc0" : "#f6dea4"; ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
      if (w > 480 || i % 2 === 0) {
        ctx.fillStyle = light ? "rgba(34,18,47,.8)" : "rgba(245,236,255,.8)";
        ctx.font = `500 ${w > 700 ? 12 : 10}px Outfit`; ctx.fillText(A[0], x + 8, y - 6);
      }
    });
  });
}

/* ---------- growth bars ---------- */
function initGrowth() {
  const wrap = $("#bars"); if (!wrap) return;
  const DATA = {
    drivers: { label: "Driver partners", v: [12, 20, 31, 44, 58, 72, 90, 108, 126, 148, 171, 214] },
    areas: { label: "Areas covered", v: [3, 4, 6, 8, 10, 12, 15, 18, 21, 24, 27, 32] }
  };
  const months = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "Now"];
  const draw = key => {
    const v = DATA[key].v, max = Math.max(...v) * 1.08;
    wrap.innerHTML = v.map((n, i) => `<div class="bar ${i === v.length - 1 ? "last" : ""}"><span></span><b>${n}</b><em>${months[i]}</em></div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".bar span", wrap).forEach((s, i) => { s.style.height = (v[i] / max * 100) + "%"; s.style.transitionDelay = i * 60 + "ms"; })));
  };
  let drawn = false;
  new IntersectionObserver(([e]) => { if (e.isIntersecting && !drawn) { drawn = true; draw("drivers"); } }, { threshold: .3 }).observe(wrap);
  $$("#growthSeg button").forEach(b => b.addEventListener("click", () => {
    $$("#growthSeg button").forEach(x => x.classList.toggle("on", x === b));
    draw(b.dataset.k);
  }));
}

/* ---------- campaign planner ---------- */
function initPlanner() {
  const f = $("#planner"); if (!f) return;
  const cabs = $("#pCabs"), weeks = $("#pWeeks");
  const upd = () => {
    const n = +cabs.value, wk = +weeks.value;
    $("#pCabsV").textContent = n; $("#pWeeksV").textContent = wk + (wk > 1 ? " weeks" : " week");
    const fmt = format => format.toLocaleString("en-IN");
    const perCabDay = 1200; // estimated views per cab per day — adjust to your measured figure
    $("#oViews").textContent = fmt(Math.round(n * perCabDay * wk * 7 / 1000) * 1000) + "+";
    $("#oKm").textContent = fmt(n * 180 * wk * 7) + " km";
    $("#oRides").textContent = fmt(n * 14 * wk * 7);
  };
  [cabs, weeks].forEach(i => i.addEventListener("input", upd)); upd();
}

/* ---------- forms → WhatsApp / email ---------- */
function initForms() {
  $$("form[data-send]").forEach(form => form.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(form), lines = [];
    for (const [k, v] of fd.entries()) if (String(v).trim()) lines.push(`${k}: ${v}`);
    const text = `${form.dataset.send}\n\n${lines.join("\n")}`;
    const via = e.submitter && e.submitter.dataset.via;
    if (via === "email") location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(form.dataset.send)}&body=${encodeURIComponent(text)}`;
    else window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    toast("Thanks! We'll get back to you within a day ✦");
    form.reset(); if ($("#planner")) initPlanner();
  }));
}

/* ---------- tilt on glass cards (desktop) ---------- */
function initTilt() {
  if (reduceMotion || matchMedia("(hover:none)").matches) return;
  $$("[data-tilt]").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });
}


/* =========================================================
   v2 — motion engine
   ========================================================= */
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
let lenis = null;

/* ---------- split text into animatable words ---------- */
function splitWords(root) {
  if (root._split) return root._split;
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const parts = n.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        const inGrad = n.parentElement.closest(".grad");
        parts.forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          const inner = document.createElement("span"); inner.textContent = p;
          if (inGrad) inner.className = "grad";
          w.appendChild(inner); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR" && !n.classList.contains("w")) {
        if (n.classList.contains("grad")) n.classList.add("grad-split");
        walk(n);
      }
    });
  };
  walk(root);
  root._split = [...root.querySelectorAll(".w > span")];
  return root._split;
}

/* ---------- size the parallax tiles to the scene height ---------- */
function sizeScene(sc) {
  [".far", ".mid"].forEach(sel => {
    const L = sc.querySelector(sel); if (!L) return;
    const h = L.getBoundingClientRect().height;
    L.querySelector("i").style.setProperty("--tw", Math.round(h * 1600 / 520) + "px");
  });
}

/* ---------- preloader + page transitions ---------- */
function initTransitions() {
  const wipe = $(".wipe"), pre = $(".preloader");
  if (hasGSAP) gsap.set(wipe, { y: 0, yPercent: 100 });
  let came = false;
  try { came = sessionStorage.getItem("anutec-nav") === "1"; sessionStorage.removeItem("anutec-nav"); } catch (e) {}
  if (pre) {
    if (came || !hasGSAP || reduceMotion) pre.remove();
    else {
      const bar = pre.querySelector(".pl-bar i");
      gsap.timeline()
        .to(bar, { width: "100%", duration: 1.1, ease: "power2.inOut" })
        .to(pre.querySelector(".pl-in"), { y: -30, opacity: 0, duration: .4 })
        .to(pre, { yPercent: -100, duration: .8, ease: "power4.inOut" }, "-=.1")
        .add(() => pre.remove());
    }
  }
  if (came && hasGSAP && !reduceMotion) {
    gsap.set(wipe, { yPercent: 0 });
    gsap.to(wipe, { yPercent: -100, duration: .8, ease: "power4.inOut", delay: .05 });
  }
  if (!hasGSAP || reduceMotion) return;
  document.addEventListener("click", e => {
    const a = e.target.closest("a"); if (!a) return;
    const href = a.getAttribute("href") || "";
    if (a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || !/\.html(#.*)?$/.test(href) || /^https?:/.test(href)) return;
    const [path, hash] = href.split("#");
    if (location.pathname.endsWith("/" + path) && hash) return;
    e.preventDefault();
    try { sessionStorage.setItem("anutec-nav", "1"); } catch (er) {}
    gsap.fromTo(wipe, { yPercent: 100 }, { yPercent: 0, duration: .6, ease: "power4.inOut", onComplete: () => location.href = href });
  });
  addEventListener("pageshow", ev => { if (ev.persisted) gsap.set(wipe, { yPercent: 100 }); });
}

/* ---------- smooth scroll ---------- */
function initSmooth() {
  const bar = $(".progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (!hasGSAP || reduceMotion || typeof window.Lenis === "undefined") return;
  lenis = new Lenis({ lerp: .1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const t = document.querySelector(a.getAttribute("href")); if (!t) return;
    e.preventDefault(); lenis.scrollTo(t, { offset: -90 });
  });
  if (location.hash) setTimeout(() => { const t = document.querySelector(location.hash); if (t) lenis.scrollTo(t, { offset: -90, immediate: true }); }, 300);
}

/* ---------- HERO slider with driving cab ---------- */
function initHeroSlider() {
  const hero = $("#hero"); if (!hero) return;
  const sceneEl = buildScene($(".scene-host", hero), { mode: reduceMotion ? "still" : "loop", ad: ANUTEC_ADS[0] });
  sizeScene(sceneEl); addEventListener("resize", () => sizeScene(sceneEl));
  const slides = $$(".slide", hero), tabs = $$(".slide-tabs button", hero);
  const cab = $(".cab", sceneEl);
  const DUR = 6500;
  let cur = -1, timer = 0, busy = false;
  slides.forEach(s => splitWords(s.querySelector("h1")));
  const go = (i, first) => {
    if (busy || i === cur) return;
    busy = true;
    const prev = slides[cur], next = slides[i];
    tabs.forEach((t, j) => { t.classList.toggle("on", j === i); t.classList.toggle("done", j < i); });
    // reset bar animation
    const bar = tabs[i].querySelector(".bar2 i"); bar.style.animation = "none"; bar.offsetWidth; bar.style.animation = "";
    setSceneTime(sceneEl, next.dataset.time);
    cab.classList.add("swap");
    setTimeout(() => { setCabAd(cab, ANUTEC_ADS[+next.dataset.ad]); cab.classList.remove("swap"); }, 380);
    const enter = () => {
      next.classList.add("on");
      if (hasGSAP && !reduceMotion) {
        const tl = gsap.timeline({ onComplete: () => busy = false });
        tl.fromTo(next.querySelector("h1")._split, { yPercent: 115, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 1, stagger: .045, ease: "power4.out" })
          .fromTo([next.querySelector(".eyebrow"), next.querySelector(".lead"), next.querySelector(".hero-cta")], { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .08, ease: "power3.out" }, first ? .25 : .3);
      } else busy = false;
    };
    if (prev && hasGSAP && !reduceMotion) {
      gsap.timeline({ onComplete: () => { prev.classList.remove("on"); enter(); } })
        .to(prev.querySelector("h1")._split, { yPercent: -115, duration: .45, stagger: .02, ease: "power3.in" })
        .to([prev.querySelector(".eyebrow"), prev.querySelector(".lead"), prev.querySelector(".hero-cta")], { opacity: 0, y: -14, duration: .3 }, 0);
    } else { if (prev) prev.classList.remove("on"); enter(); }
    cur = i;
    clearTimeout(timer); timer = setTimeout(() => go((cur + 1) % slides.length), DUR);
  };
  tabs.forEach((t, i) => t.addEventListener("click", () => go(i)));
  $("#hPrev").addEventListener("click", () => go((cur - 1 + slides.length) % slides.length));
  $("#hNext").addEventListener("click", () => go((cur + 1) % slides.length));
  let x0 = null;
  hero.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  hero.addEventListener("touchend", e => {
    if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? (cur + 1) % slides.length : (cur - 1 + slides.length) % slides.length);
  });
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(timer); else timer = setTimeout(() => go((cur + 1) % slides.length), DUR); });
  go(0, true);
  // parallax the hero away on scroll
  if (hasGSAP && !reduceMotion) {
    gsap.to($(".slides", hero), { yPercent: -18, opacity: 0, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(sceneEl.querySelector(".cab-wrap"), { xPercent: 30, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
  }
}

/* ---------- RIDE: scroll-driven journey across Hyderabad ---------- */
const STOPS = [
  { t: "08:00", time: "day", place: "HITEC City", h: "Morning commute", p: "Tech professionals waiting at signals read your ad on the way to work." },
  { t: "12:30", time: "day", place: "Banjara Hills", h: "Hospital row", p: "Families and patients on the road. A good time for healthcare messages." },
  { t: "16:30", time: "dawn", place: "Ameerpet", h: "Students & shoppers", p: "Coaching centres and markets. Your brand in front of young Hyderabad." },
  { t: "19:30", time: "dusk", place: "Jubilee Hills", h: "Evening out", p: "Cafés, malls and people with money to spend on a night out." },
  { t: "22:30", time: "night", place: "Charminar", h: "Late-night food streets", p: "Your roof board lights up the Old City until late." }
];
function initRide() {
  const ride = $("#ride"); if (!ride) return;
  const sc = buildScene($(".scene-host", ride), { mode: "scroll", ad: ANUTEC_ADS[2] });
  setSceneTime(sc, "day");
  const stopsEl = sc.querySelector(".stops"), cards = $("#rideCards"), clock = $("#rideClock"), place = $("#ridePlace"), track = $("#rideTrack");
  cards.innerHTML = STOPS.map(s => `<div class="ride-card glass"><small>${s.t} · ${s.place}</small><h4>${s.h}</h4><p>${s.p}</p></div>`).join("");
  const cardEls = $$(".ride-card", cards);
  const spokes = $$(".spokes", sc), blurs = $$(".blur", sc);
  const layers = { far: sc.querySelector(".far i"), mid: sc.querySelector(".mid i"), lamps: sc.querySelector(".lamps i"), poles: sc.querySelector(".poles i"), dash: sc.querySelector(".dash i") };
  let S = 0, tw = {};
  const layout = () => {
    sizeScene(sc);
    S = Math.max(innerWidth * .9, 700);
    stopsEl.innerHTML = STOPS.map((s, i) => `<div class="stop" style="left:${innerWidth / 2 + i * S}px"><span class="lbl">${s.place}</span><span class="pin2"></span><span class="pole2"></span></div>`).join("");
    tw = { far: parseFloat(layers.far.style.getPropertyValue("--tw")) || 1600, mid: parseFloat(layers.mid.style.getPropertyValue("--tw")) || 1600, lamps: 520, poles: 1900, dash: 170 };
  };
  layout(); addEventListener("resize", layout);
  let target = 0, p = 0, lastActive = -1;
  const render = () => {
    p += (target - p) * .12;
    const dist = p * (STOPS.length - 1) * S;
    stopsEl.style.transform = `translateX(${-dist}px)`;
    const mod = (v, m) => -(((v % m) + m) % m);
    layers.far.style.transform = `translateX(${mod(dist * .15, tw.far)}px)`;
    layers.mid.style.transform = `translateX(${mod(dist * .55, tw.mid)}px)`;
    layers.lamps.style.transform = `translateX(${mod(dist * .9, tw.lamps)}px)`;
    layers.poles.style.transform = `translateX(${mod(dist * 1.6, tw.poles)}px)`;
    layers.dash.style.transform = `translateX(${mod(dist, tw.dash)}px)`;
    const cabW = sc.querySelector(".cab").getBoundingClientRect().width;
    const deg = dist / (50 / 820 * cabW) * 57.3;
    spokes.forEach(s => s.style.transform = `rotate(${deg}deg)`);
    const v = Math.min(1, Math.abs(target - p) * 40);
    blurs.forEach(b => b.style.opacity = v * .8);
    const k = p * (STOPS.length - 1), near = Math.round(k), active = Math.abs(k - near) < .32 ? near : -1;
    if (active !== lastActive) {
      cardEls.forEach((c, i) => c.classList.toggle("on", i === active));
      lastActive = active;
    }
    const st = STOPS[Math.min(STOPS.length - 1, Math.max(0, near))];
    if (sc.dataset.time !== st.time) setSceneTime(sc, st.time);
    clock.textContent = st.t; place.textContent = st.place;
    track.style.transform = `scaleX(${p})`;
  };
  if (hasGSAP && !reduceMotion) {
    ScrollTrigger.create({
      trigger: ride, pin: true, start: "top top", end: () => "+=" + innerHeight * (STOPS.length - .5),
      onUpdate: self => target = self.progress, invalidateOnRefresh: true
    });
    gsap.ticker.add(render);
  } else { target = p = 0; render(); cardEls[0].classList.add("on"); }
}

/* ---------- formats explorer ---------- */
function initFormats() {
  const box = $("#fx"); if (!box) return;
  const stage = $(".fx-stage", box);
  stage.insertAdjacentHTML("afterbegin", '<div class="floor"></div>');
  stage.insertAdjacentHTML("beforeend", cabSVG({ ad: ANUTEC_ADS[0] }));
  const cab = $(".cab", stage), tabs = $$(".fx-tabs button", box), cap = $(".fx-caption", box);
  let i = 0, auto = true, ad = 0;
  const show = n => {
    i = n;
    tabs.forEach((t, j) => t.classList.toggle("on", j === n));
    $$(".zone", cab).forEach(z => z.classList.remove("on"));
    $$(".zone-" + tabs[n].dataset.zone, cab).forEach(z => z.classList.add("on"));
    cap.textContent = tabs[n].dataset.cap;
    ad = (ad + 1) % ANUTEC_ADS.length; setCabAd(cab, ANUTEC_ADS[ad]);
  };
  tabs.forEach((t, n) => t.addEventListener("click", () => { auto = false; show(n); }));
  show(0);
  setInterval(() => { if (auto && !document.hidden) show((i + 1) % tabs.length); }, 3800);
}

/* ---------- generic slider (plans) ---------- */
function initSliders() {
  $$(".slider").forEach(sl => {
    const tr = $(".sl-track", sl), items = $$(".sl-item", sl), dots = $(".sl-dots", sl);
    dots.innerHTML = items.map(() => "<i></i>").join("");
    const step = () => items[0].getBoundingClientRect().width + 20;
    $(".sl-prev", sl).addEventListener("click", () => tr.scrollBy({ left: -step() }));
    $(".sl-next", sl).addEventListener("click", () => tr.scrollBy({ left: step() }));
    const upd = () => { const k = Math.round(tr.scrollLeft / step()); $$("i", dots).forEach((d, j) => d.classList.toggle("on", j === k)); };
    tr.addEventListener("scroll", upd, { passive: true }); upd();
  });
}

/* ---------- testimonials ---------- */
function initTestimonials() {
  const tm = $("#tm"); if (!tm) return;
  const items = $$(".tm-item", tm), dots = $("#tmDots");
  dots.innerHTML = items.map(() => "<i></i>").join("");
  let k = 0;
  const show = n => { k = n; items.forEach((it, j) => it.classList.toggle("on", j === n)); $$("i", dots).forEach((d, j) => d.classList.toggle("on", j === n)); };
  $$("i", dots).forEach((d, j) => d.addEventListener("click", () => show(j)));
  show(0); setInterval(() => !document.hidden && show((k + 1) % items.length), 5200);
}

/* ---------- scroll animations ---------- */
function initScrollFX() {
  if (!hasGSAP || reduceMotion) { $$("[data-split]").forEach(() => {}); return; }
  $$("[data-split]").forEach(h => {
    const words = splitWords(h);
    gsap.fromTo(words, { yPercent: 115, rotate: 3 }, { yPercent: 0, rotate: 0, duration: 1.1, stagger: .035, ease: "power4.out", scrollTrigger: { trigger: h, start: "top 88%" } });
  });
  $$("[data-parallax]").forEach(el => {
    gsap.fromTo(el, { yPercent: +el.dataset.parallax }, { yPercent: -el.dataset.parallax, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$("[data-zoom]").forEach(el => {
    gsap.fromTo(el, { scale: .9, borderRadius: "60px" }, { scale: 1, borderRadius: "36px", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 40%", scrub: true } });
  });
  $$(".pline path").forEach(path => {
    const L = path.getTotalLength();
    gsap.fromTo(path, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: path.closest(".proc"), start: "top 75%", end: "bottom 60%", scrub: true } });
  });
  // marquee reacts to scroll velocity
  const mq = $(".marquee-track");
  if (mq) {
    mq.style.animation = "none";
    let x = 0, boost = 0;
    ScrollTrigger.create({ onUpdate: s => boost = Math.min(12, Math.abs(s.getVelocity()) / 300) });
    gsap.ticker.add(() => {
      x -= .6 + boost; boost *= .92;
      const half = mq.scrollWidth / 2; if (-x > half) x += half;
      mq.style.transform = `translateX(${x}px)`;
    });
  }
  // horizontal industries (desktop)
  const hs = $(".hscroll");
  if (hs) {
    gsap.matchMedia().add("(min-width: 1025px)", () => {
        const tr = $(".hs-track", hs);
        const tween = gsap.to(tr, { x: () => -(tr.scrollWidth - innerWidth + 40), ease: "none",
          scrollTrigger: { trigger: hs, pin: true, start: "top top", end: () => "+=" + (tr.scrollWidth - innerWidth + 40), scrub: 1, invalidateOnRefresh: true } });
        $$(".hs-card", tr).forEach(c => gsap.fromTo(c, { rotate: 4, y: 40, opacity: .3 }, { rotate: 0, y: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: c, containerAnimation: tween, start: "left 95%", end: "left 55%", scrub: true } }));
        return () => tween.kill();
    });
  }
  addEventListener("load", () => ScrollTrigger.refresh());
}

buildLayout();
initTransitions();
initSmooth();
initReveal();
initSparks();
initHeroSlider();
initRide();
initFormats();
initSliders();
initTestimonials();
initNetworkMap();
initGrowth();
initPlanner();
initForms();
initTilt();
initScrollFX();
