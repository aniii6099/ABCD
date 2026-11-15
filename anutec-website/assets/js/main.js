/* =========================================================
   ANUTEC ADVERTISING — site script
   Edit CONFIG below with your real contact details.
   ========================================================= */
const CONFIG = {
  phone: "+91 90000 00000",        // shown on site
  whatsapp: "919000000000",        // digits only, with country code
  email: "hello@anutecadvertising.com",
  city: "Hyderabad, Telangana",
  drivers: 200
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

/* ---------- HERO: long-exposure night city with light trails ---------- */
function initHeroCanvas() {
  const c = $("#heroCanvas"); if (!c) return;
  let S, buildings = [], trails = [];
  const setup = () => {
    S = fitCanvas(c);
    buildings = [];
    let x = -20;
    while (x < S.w + 40) {
      const bw = 30 + Math.random() * 70, bh = S.h * (.12 + Math.random() * .38);
      const wins = [];
      for (let wy = 12; wy < bh - 10; wy += 14) for (let wx = 8; wx < bw - 8; wx += 12) if (Math.random() < .35) wins.push([wx, wy, Math.random()]);
      buildings.push({ x, w: bw, h: bh, wins, tw: Math.random() * 6 });
      x += bw + 2 + Math.random() * 10;
    }
    trails = Array.from({ length: Math.round(S.w / 28) }, () => newTrail(true));
  };
  const lanes = 6;
  const newTrail = init => {
    const lane = Math.floor(Math.random() * lanes), dir = lane < lanes / 2 ? 1 : -1;
    const speed = (2 + Math.random() * 4) * (S.w / 1200 + .4);
    return { lane, dir, speed, x: init ? Math.random() * S.w : (dir > 0 ? -200 : S.w + 200), len: 80 + Math.random() * 220, ad: Math.random() < .25 };
  };
  setup();
  let lastW = innerWidth;
  addEventListener("resize", () => { if (innerWidth !== lastW) { lastW = innerWidth; setup(); } });
  runWhenVisible(c, t => {
    const { ctx, w, h } = S, light = isLight();
    ctx.clearRect(0, 0, w, h);
    const horizon = h * .72;
    // sky glow
    const g = ctx.createLinearGradient(0, 0, 0, horizon);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, light ? "rgba(212,95,184,.18)" : "rgba(155,93,229,.28)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, horizon);
    // skyline
    buildings.forEach(b => {
      const y = horizon - b.h;
      ctx.fillStyle = light ? "rgba(90,50,130,.16)" : "rgba(20,8,36,.85)";
      ctx.fillRect(b.x, y, b.w, b.h);
      ctx.fillStyle = light ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.04)";
      ctx.fillRect(b.x, y, b.w, 1);
      b.wins.forEach(([wx, wy, r]) => {
        const on = .35 + .65 * Math.abs(Math.sin(t / 1600 + r * 20 + b.tw));
        ctx.fillStyle = r > .8 ? `rgba(240,166,201,${.55 * on})` : `rgba(232,194,122,${(light ? .45 : .5) * on})`;
        ctx.fillRect(b.x + wx, y + wy, 4, 5);
      });
    });
    // road
    const rg = ctx.createLinearGradient(0, horizon, 0, h);
    rg.addColorStop(0, light ? "rgba(60,30,90,.12)" : "rgba(10,4,18,.9)");
    rg.addColorStop(1, light ? "rgba(60,30,90,.02)" : "rgba(10,4,18,.4)");
    ctx.fillStyle = rg; ctx.fillRect(0, horizon, w, h - horizon);
    // light trails
    ctx.globalCompositeOperation = light ? "source-over" : "lighter";
    trails.forEach((tr, i) => {
      if (!reduceMotion) tr.x += tr.speed * tr.dir;
      const y = horizon + 10 + tr.lane * ((h - horizon - 20) / lanes) + 6;
      const x2 = tr.x - tr.len * tr.dir;
      const col = tr.dir > 0 ? [232, 194, 122] : [212, 95, 184];
      const lg = ctx.createLinearGradient(tr.x, 0, x2, 0);
      lg.addColorStop(0, `rgba(${col},.95)`); lg.addColorStop(1, `rgba(${col},0)`);
      ctx.strokeStyle = lg; ctx.lineWidth = 2 + tr.lane * .5; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(tr.x, y); ctx.lineTo(x2, y); ctx.stroke();
      ctx.fillStyle = `rgba(${col},.9)`; ctx.shadowColor = `rgb(${col})`; ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.arc(tr.x, y, 2 + tr.lane * .35, 0, 6.3); ctx.fill(); ctx.shadowBlur = 0;
      if (tr.ad) { // floating ad tag above branded cabs
        ctx.fillStyle = "rgba(155,93,229,.85)";
        ctx.fillRect(tr.x - 9 * tr.dir - 6, y - 10, 12, 5);
      }
      if ((tr.dir > 0 && x2 > w + 20) || (tr.dir < 0 && x2 < -20)) trails[i] = newTrail(false);
    });
    ctx.globalCompositeOperation = "source-over";
    // reflections
    ctx.fillStyle = light ? "rgba(255,255,255,.0)" : "rgba(155,93,229,.05)";
    ctx.fillRect(0, horizon, w, 2);
  });
  document.addEventListener("themechange", () => {});
}

/* ---------- SHOWCASE: animated cab carrying a rotating ad ---------- */
const ADS = [
  { k: "Food chain", t1: "BIRYANI IN 20 MIN", t2: "Order now · Madhapur", c1: "#ff9f43", c2: "#ee5253", icon: "🍛" },
  { k: "Hospital", t1: "24×7 EMERGENCY CARE", t2: "Banjara Hills · Call 108", c1: "#4fc3f7", c2: "#5c6bc0", icon: "✚" },
  { k: "Real estate", t1: "3BHK @ KOKAPET", t2: "Site visit this Sunday", c1: "#e8c27a", c2: "#b98238", icon: "⌂" },
  { k: "Brand launch", t1: "NEW. BOLD. YOURS.", t2: "Launching across Hyderabad", c1: "#d45fb8", c2: "#9b5de5", icon: "✦" },
  { k: "Organisation", t1: "RUN FOR A CAUSE", t2: "Register · Necklace Road", c1: "#5ee39a", c2: "#1fa855", icon: "❤" }
];
function initShowcase() {
  const c = $("#cabCanvas"); if (!c) return;
  let S = fitCanvas(c), ad = 0, adT = 0, manual = 0;
  addEventListener("resize", () => S = fitCanvas(c));
  const chips = $("#adChips");
  chips.innerHTML = ADS.map((a, i) => `<button class="ad-chip ${i ? "" : "on"}" data-i="${i}">${a.k}</button>`).join("");
  const setAd = i => { ad = i; adT = performance.now(); $$(".ad-chip", chips).forEach((b, j) => b.classList.toggle("on", j === i)); };
  chips.addEventListener("click", e => { const b = e.target.closest(".ad-chip"); if (b) { setAd(+b.dataset.i); manual = performance.now(); } });
  const far = Array.from({ length: 30 }, (_, i) => ({ x: i * 60, h: 40 + Math.random() * 120, w: 40 + Math.random() * 30 }));
  const near = Array.from({ length: 16 }, (_, i) => ({ x: i * 120, h: 70 + Math.random() * 110, w: 70 + Math.random() * 50, hue: Math.random() }));
  let off = 0, last = 0;
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); };

  runWhenVisible(c, t => {
    const { ctx, w, h } = S, dt = last ? Math.min(50, t - last) : 16; last = t;
    off += dt * .12;
    if (t - adT > 3600 && t - manual > 8000) setAd((ad + 1) % ADS.length);
    const A = ADS[ad], k = Math.min(1, (t - adT) / 450);
    const sc = Math.min(w / 640, h / 440);

    // night sky
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#160a28"); sky.addColorStop(.7, "#2a1240"); sky.addColorStop(1, "#120818");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    // moon
    ctx.fillStyle = "rgba(246,222,164,.9)"; ctx.shadowColor = "#e8c27a"; ctx.shadowBlur = 30;
    ctx.beginPath(); ctx.arc(w * .82, h * .17, 16 * sc + 6, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
    const ground = h * .72;
    // far skyline
    far.forEach(b => {
      let x = ((b.x - off * .25) % (far.length * 60) + far.length * 60) % (far.length * 60) - 60;
      ctx.fillStyle = "rgba(60,30,90,.7)"; ctx.fillRect(x * sc, ground - b.h * sc - 20 * sc, b.w * sc, b.h * sc + 20 * sc);
    });
    // near buildings with lit windows + billboards
    near.forEach((b, i) => {
      let x = ((b.x - off * .6) % (near.length * 120) + near.length * 120) % (near.length * 120) - 120;
      const bx = x * sc, by = ground - b.h * sc, bw = b.w * sc, bh = b.h * sc;
      ctx.fillStyle = "#1c0d2e"; ctx.fillRect(bx, by, bw, bh);
      for (let yy = by + 8 * sc; yy < ground - 10 * sc; yy += 14 * sc)
        for (let xx = bx + 6 * sc; xx < bx + bw - 8 * sc; xx += 12 * sc)
          if (((xx * 7 + yy * 13 + i) | 0) % 3 === 0) { ctx.fillStyle = "rgba(232,194,122,.55)"; ctx.fillRect(xx, yy, 4 * sc, 5 * sc); }
    });
    // streetlights
    for (let i = 0; i < 6; i++) {
      const x = (((i * 160 - off * 1.1) % 960 + 960) % 960 - 60) * sc;
      ctx.strokeStyle = "#3a2350"; ctx.lineWidth = 3 * sc;
      ctx.beginPath(); ctx.moveTo(x, ground); ctx.lineTo(x, ground - 120 * sc); ctx.lineTo(x + 18 * sc, ground - 120 * sc); ctx.stroke();
      const lg = ctx.createRadialGradient(x + 18 * sc, ground - 116 * sc, 2, x + 18 * sc, ground - 60 * sc, 90 * sc);
      lg.addColorStop(0, "rgba(246,222,164,.45)"); lg.addColorStop(1, "rgba(246,222,164,0)");
      ctx.fillStyle = lg; ctx.fillRect(x - 80 * sc, ground - 120 * sc, 200 * sc, 120 * sc);
    }
    // road
    ctx.fillStyle = "#0d0616"; ctx.fillRect(0, ground, w, h - ground);
    ctx.fillStyle = "rgba(232,194,122,.7)";
    for (let i = 0; i < 12; i++) {
      const x = (((i * 90 - off * 1.4) % 1080 + 1080) % 1080 - 90) * sc;
      ctx.fillRect(x, h * .95, 46 * sc, 4 * sc);
    }
    // cab
    const cs = Math.min(w / 450, h / 290), cx = w * .5 - 174 * cs, cy = h * .86 - 6 * cs + Math.sin(t / 140) * 1.2 * cs;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(cs, cs);
    // shadow
    ctx.fillStyle = "rgba(0,0,0,.5)"; ctx.beginPath(); ctx.ellipse(170, 26, 180, 12, 0, 0, 7); ctx.fill();
    // body
    const body = ctx.createLinearGradient(0, -90, 0, 10);
    body.addColorStop(0, "#f7f2fb"); body.addColorStop(.6, "#cfc3dc"); body.addColorStop(1, "#8d7fa0");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.moveTo(10, 0); ctx.lineTo(4, -38); ctx.quadraticCurveTo(8, -52, 40, -56);
    ctx.lineTo(92, -60); ctx.quadraticCurveTo(120, -100, 160, -104); ctx.lineTo(236, -104);
    ctx.quadraticCurveTo(262, -100, 286, -62); ctx.lineTo(320, -56); ctx.quadraticCurveTo(342, -52, 344, -30);
    ctx.lineTo(340, 0); ctx.closePath(); ctx.fill();
    // windows
    ctx.fillStyle = "rgba(40,20,70,.85)";
    ctx.beginPath(); ctx.moveTo(106, -62); ctx.quadraticCurveTo(128, -94, 162, -96); ctx.lineTo(196, -96); ctx.lineTo(196, -62); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(204, -62); ctx.lineTo(204, -96); ctx.lineTo(234, -96); ctx.quadraticCurveTo(256, -92, 274, -62); ctx.closePath(); ctx.fill();
    // window reflection
    ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.beginPath(); ctx.moveTo(150, -94); ctx.lineTo(170, -94); ctx.lineTo(140, -64); ctx.lineTo(122, -64); ctx.fill();
    // side ad panel (door wrap)
    const pg = ctx.createLinearGradient(70, -50, 300, -6);
    pg.addColorStop(0, A.c1); pg.addColorStop(1, A.c2);
    ctx.globalAlpha = k; ctx.fillStyle = pg; rr(ctx, 70, -52, 236, 40, 8); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "800 15px Outfit, sans-serif"; ctx.textBaseline = "middle";
    ctx.fillText(A.icon + "  " + A.t1, 82, -38);
    ctx.font = "500 10px Outfit, sans-serif"; ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.fillText(A.t2, 82, -21);
    ctx.globalAlpha = 1;
    // roof LED board
    ctx.fillStyle = "#1a0b2a"; rr(ctx, 140, -132, 120, 26, 6); ctx.fill();
    ctx.fillStyle = "#2c1745"; ctx.fillRect(176, -106, 6, 4); ctx.fillRect(218, -106, 6, 4);
    ctx.save(); rr(ctx, 143, -129, 114, 20, 4); ctx.clip();
    ctx.fillStyle = A.c1; ctx.shadowColor = A.c1; ctx.shadowBlur = 10; ctx.font = "700 12px Outfit, sans-serif";
    const msg = "ANUTEC ✦ " + A.t1 + " ✦ ", mw = ctx.measureText(msg).width;
    const sx = 143 - ((t * .05) % mw);
    ctx.fillText(msg + msg + msg, sx, -119); ctx.restore(); ctx.shadowBlur = 0;
    // lights
    ctx.fillStyle = "#fff3c4"; ctx.shadowColor = "#fff3c4"; ctx.shadowBlur = 20; rr(ctx, 332, -40, 12, 10, 3); ctx.fill();
    ctx.fillStyle = "#ff4f7a"; ctx.shadowColor = "#ff4f7a"; rr(ctx, 4, -40, 8, 12, 3); ctx.fill(); ctx.shadowBlur = 0;
    const beam = ctx.createLinearGradient(344, 0, 520, 0);
    beam.addColorStop(0, "rgba(255,243,196,.35)"); beam.addColorStop(1, "rgba(255,243,196,0)");
    ctx.fillStyle = beam; ctx.beginPath(); ctx.moveTo(344, -38); ctx.lineTo(560, -70); ctx.lineTo(560, 20); ctx.closePath(); ctx.fill();
    // wheels
    [[80, 0], [272, 0]].forEach(([wx, wy]) => {
      ctx.fillStyle = "#0b0612"; ctx.beginPath(); ctx.arc(wx, wy, 24, 0, 7); ctx.fill();
      ctx.fillStyle = "#6e5f82"; ctx.beginPath(); ctx.arc(wx, wy, 13, 0, 7); ctx.fill();
      ctx.strokeStyle = "#cfc3dc"; ctx.lineWidth = 2;
      for (let s = 0; s < 5; s++) { const a = s * 1.256 + off * .09; ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx + Math.cos(a) * 12, wy + Math.sin(a) * 12); ctx.stroke(); }
    });
    ctx.restore();
    // speed lines
    ctx.strokeStyle = "rgba(240,166,201,.25)"; ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const y = cy - (20 + i * 18) * cs, x = ((-off * 3 + i * 137) % (w + 200) + w + 200) % (w + 200) - 100;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 60, y); ctx.stroke();
    }
    // vignette
    const v = ctx.createRadialGradient(w / 2, h / 2, h * .3, w / 2, h / 2, w * .75);
    v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.45)");
    ctx.fillStyle = v; ctx.fillRect(0, 0, w, h);
  });
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

buildLayout();
initReveal();
initSparks();
initHeroCanvas();
initShowcase();
initNetworkMap();
initGrowth();
initPlanner();
initForms();
initTilt();
