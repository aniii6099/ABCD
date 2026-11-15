/* =========================================================
   Detailed side-profile taxi (SVG) + animated city scene
   ========================================================= */
window.ANUTEC_ADS = [
  { k: "Brands", roof: "NEW LAUNCH ✦ NOW IN HYDERABAD", t1: "NEW. BOLD. YOURS.", t2: "Launching across Hyderabad", c1: "#d45fb8", c2: "#7b3fc0" },
  { k: "Hospitals", roof: "24×7 EMERGENCY ✦ CALL 108", t1: "24×7 EMERGENCY CARE", t2: "Multi-speciality · Banjara Hills", c1: "#3aa0e8", c2: "#3b4fb8" },
  { k: "Food chains", roof: "BIRYANI IN 20 MIN ✦ ORDER NOW", t1: "BIRYANI IN 20 MIN", t2: "Order now · Madhapur", c1: "#ff9f43", c2: "#e8433f" },
  { k: "Real estate", roof: "3BHK @ KOKAPET ✦ SITE VISIT SUNDAY", t1: "3BHK @ KOKAPET", t2: "Gated community · Site visit Sunday", c1: "#e8c27a", c2: "#a8742a" }
];

let __cabN = 0;
function cabSVG(opts = {}) {
  const p = "cab" + (++__cabN);
  const ad = opts.ad || window.ANUTEC_ADS[0];
  return `
<svg class="cab" viewBox="0 0 820 300" overflow="visible" role="img" aria-label="Taxi carrying an Anutec advertisement">
  <defs>
    <linearGradient id="${p}-paint" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/><stop offset=".38" stop-color="#f1eef6"/>
      <stop offset=".62" stop-color="#d6d0df"/><stop offset=".86" stop-color="#a49cb1"/><stop offset="1" stop-color="#6f6780"/>
    </linearGradient>
    <linearGradient id="${p}-tint" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9b5de5" stop-opacity=".22"/><stop offset=".5" stop-color="#d45fb8" stop-opacity=".08"/><stop offset="1" stop-color="#e8c27a" stop-opacity=".2"/>
    </linearGradient>
    <linearGradient id="${p}-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3d2b57"/><stop offset=".55" stop-color="#1a1028"/><stop offset="1" stop-color="#0c0714"/>
    </linearGradient>
    <linearGradient id="${p}-spec" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="${p}-rim" cx=".45" cy=".4" r=".7">
      <stop offset="0" stop-color="#f4f2f8"/><stop offset=".55" stop-color="#a9a3b4"/><stop offset="1" stop-color="#4c4656"/>
    </radialGradient>
    <radialGradient id="${p}-blur" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#cfc9d8" stop-opacity=".0"/><stop offset=".6" stop-color="#bdb6c8" stop-opacity=".55"/><stop offset="1" stop-color="#6d6678" stop-opacity=".8"/>
    </radialGradient>
    <linearGradient id="${p}-ad" x1="0" y1="0" x2="1" y2="1">
      <stop class="ad-c1" offset="0" stop-color="${ad.c1}"/><stop class="ad-c2" offset="1" stop-color="${ad.c2}"/>
    </linearGradient>
    <linearGradient id="${p}-beam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff6d6" stop-opacity=".55"/><stop offset="1" stop-color="#fff6d6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="${p}-tail" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff2d55" stop-opacity="0"/><stop offset="1" stop-color="#ff2d55" stop-opacity=".45"/>
    </linearGradient>
    <filter id="${p}-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="${p}-soft" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
    <clipPath id="${p}-body"><path d="M60,234 C48,232 42,222 42,206 L44,176 C45,162 52,154 66,151 L176,141 C196,139 210,136 224,128 L292,86 C304,79 318,76 334,75 L452,73 C470,73 482,77 496,86 L574,131 C584,137 596,140 610,141 L726,150 C756,153 776,164 784,182 L790,206 C792,224 786,234 772,236 L698,238 A70,70 0 1 0 562,238 L258,238 A70,70 0 1 0 122,238 Z"/></clipPath>
  </defs>

  <!-- ground shadow + light pools -->
  <ellipse cx="415" cy="268" rx="390" ry="14" fill="#000" opacity=".65" filter="url(#${p}-soft)"/>
  <path class="beam" d="M784,176 L1180,120 L1180,290 L790,214 Z" fill="url(#${p}-beam)"/>
  <path d="M44,170 L-120,150 L-120,230 L44,214 Z" fill="url(#${p}-tail)" opacity=".7"/>

  <!-- roof ad board -->
  <g class="roof">
    <path d="M362,74 L366,62 M440,73 L436,62" stroke="#2a2233" stroke-width="5" stroke-linecap="round"/>
    <rect x="318" y="30" width="166" height="34" rx="7" fill="#17101f"/>
    <rect x="322" y="34" width="158" height="26" rx="4" fill="#0b0710"/>
    <rect class="roof-glow" x="322" y="34" width="158" height="26" rx="4" fill="url(#${p}-ad)" opacity=".25" filter="url(#${p}-glow)"/>
    <svg x="322" y="34" width="158" height="26" overflow="hidden">
      <g class="roof-scroll"><text class="roof-text" x="0" y="18" font-family="Outfit,sans-serif" font-weight="700" font-size="13" fill="${ad.c1}" letter-spacing=".5">${ad.roof} ✦ ANUTEC ✦ ${ad.roof} ✦ ANUTEC ✦</text></g>
    </svg>
    <rect x="318" y="30" width="166" height="8" rx="4" fill="#fff" opacity=".08"/>
  </g>

  <!-- wheel wells -->
  <circle cx="190" cy="216" r="58" fill="#07050a"/>
  <circle cx="630" cy="216" r="58" fill="#07050a"/>

  <!-- body -->
  <g class="body">
    <path d="M60,234 C48,232 42,222 42,206 L44,176 C45,162 52,154 66,151 L176,141 C196,139 210,136 224,128 L292,86 C304,79 318,76 334,75 L452,73 C470,73 482,77 496,86 L574,131 C584,137 596,140 610,141 L726,150 C756,153 776,164 784,182 L790,206 C792,224 786,234 772,236 L698,238 A70,70 0 1 0 562,238 L258,238 A70,70 0 1 0 122,238 Z" fill="url(#${p}-paint)"/>
    <g clip-path="url(#${p}-body)">
      <rect x="0" y="176" width="820" height="70" fill="url(#${p}-tint)"/>
      <!-- door wrap advert -->
      <g class="wrap-ad">
        <path d="M250,168 L560,166 L566,234 L262,236 Z" fill="url(#${p}-ad)"/>
        <path d="M250,168 L560,166 L561,176 L250,178 Z" fill="#fff" opacity=".18"/>
        <text class="wrap-t1" x="276" y="200" font-family="Outfit,sans-serif" font-weight="800" font-size="${Math.min(24, 225 / (ad.t1.length * .62)).toFixed(1)}" fill="#fff">${ad.t1}</text>
        <text class="wrap-t2" x="277" y="222" font-family="Outfit,sans-serif" font-weight="500" font-size="13" fill="#fff" opacity=".92">${ad.t2}</text>
        <g class="qr" transform="translate(516,186)"><rect width="34" height="34" rx="3" fill="#fff"/><path d="M4,4h10v10H4zM20,4h10v10H20zM4,20h10v10H4zM20,20h4v4h-4zM26,26h4v4h-4zM20,28h4v2h-4z" fill="#1a0f26"/></g>
      </g>
      <!-- moving reflection (street light passing) -->
      <rect class="spec" x="-200" y="60" width="120" height="200" fill="url(#${p}-spec)" opacity=".55" transform="skewX(-25)"/>
      <!-- lower body shading -->
      <rect x="0" y="226" width="820" height="20" fill="#000" opacity=".18"/>
    </g>
    <!-- shoulder character line -->
    <path d="M70,163 C260,155 560,157 780,176" fill="none" stroke="#fff" stroke-width="2" opacity=".9"/>
    <path d="M70,166 C260,158 560,160 780,179" fill="none" stroke="#5b5268" stroke-width="1.2" opacity=".45"/>
    <!-- glasshouse -->
    <path d="M236,134 L296,96 C306,90 318,87 332,87 L446,86 C462,86 474,90 486,98 L548,134 C552,137 550,140 545,140 L242,140 C234,140 232,137 236,134 Z" fill="url(#${p}-glass)"/>
    <path class="zone zone-seat" d="M240,138 L296,98 C306,92 318,89 332,89 L392,88 L392,138 Z" fill="none"/>
    <path d="M300,96 L326,90 L268,138 L246,138 Z" fill="#fff" opacity=".1"/>
    <path d="M420,88 L440,88 L392,138 L376,138 Z" fill="#fff" opacity=".08"/>
    <path d="M470,92 L486,99 L452,138 L436,138 Z" fill="#fff" opacity=".06"/>
    <rect x="392" y="86" width="12" height="54" fill="#120c19"/>
    <!-- door seams -->
    <path d="M404,140 C402,176 404,208 410,236" fill="none" stroke="#6e6579" stroke-width="1.6" opacity=".7"/>
    <path d="M248,138 C242,170 248,206 260,236" fill="none" stroke="#6e6579" stroke-width="1.6" opacity=".55"/>
    <path d="M556,138 C562,168 566,200 563,232" fill="none" stroke="#6e6579" stroke-width="1.6" opacity=".55"/>
    <!-- handles -->
    <rect x="350" y="150" width="30" height="7" rx="3.5" fill="#bdb6c8" stroke="#7a7186" stroke-width="1"/>
    <rect x="508" y="150" width="30" height="7" rx="3.5" fill="#bdb6c8" stroke="#7a7186" stroke-width="1"/>
    <!-- mirror -->
    <path d="M536,128 C540,118 556,116 566,120 L566,132 C556,136 544,136 536,128 Z" fill="url(#${p}-paint)" stroke="#8d8599" stroke-width="1"/>
    <!-- fuel lid -->
    <circle cx="140" cy="168" r="9" fill="none" stroke="#9a92a6" stroke-width="1.2"/>
    <!-- front intake + bumper -->
    <path d="M716,214 L786,212 C787,222 782,230 772,232 L716,232 Z" fill="#17121c"/>
    <path d="M722,220 L778,219" stroke="#3a3342" stroke-width="2"/>
    <!-- head light -->
    <path d="M734,156 C756,158 774,164 784,177 L758,180 C748,171 741,164 734,156 Z" fill="#fff9e6"/>
    <path class="hl-glow" d="M734,156 C756,158 774,164 784,177 L758,180 C748,171 741,164 734,156 Z" fill="#fff3c4" filter="url(#${p}-glow)"/>
    <path d="M742,182 L780,183" stroke="#fff3c4" stroke-width="3" stroke-linecap="round" opacity=".9"/>
    <!-- tail light -->
    <path d="M46,160 C56,156 66,154 76,154 L74,176 L46,178 Z" fill="#c4123a"/>
    <path class="tl-glow" d="M46,160 C56,156 66,154 76,154 L74,176 L46,178 Z" fill="#ff2d55" filter="url(#${p}-glow)" opacity=".85"/>
    <!-- rear bumper reflector -->
    <rect x="44" y="208" width="18" height="5" rx="2" fill="#ff5a78" opacity=".8"/>
    <!-- TAXI badge -->
    <rect x="600" y="182" width="48" height="16" rx="3" fill="#ffd23f"/>
    <text x="624" y="194" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="10" fill="#1a1205">TAXI</text>
  </g>

  <!-- highlight zones (formats explorer) -->
  <path class="zone zone-door" d="M250,168 L560,166 L566,234 L262,236 Z" fill="none"/>
  <rect class="zone zone-roof" x="314" y="26" width="174" height="42" rx="9" fill="none"/>
  <rect class="zone zone-qr" x="510" y="180" width="46" height="46" rx="6" fill="none"/>
  <path class="zone zone-rear" d="M40,150 L180,138 L224,128 L250,140 L244,238 L60,236 C46,232 40,222 40,206 Z" fill="none"/>

  <!-- wheels -->
  ${[190, 630].map(x => `
  <g transform="translate(${x},216)">
    <circle r="50" fill="#141118"/>
    <circle r="47" fill="none" stroke="#2b2630" stroke-width="5"/>
    <circle r="50" fill="none" stroke="#000" stroke-width="2" opacity=".6"/>
    <circle r="34" fill="url(#${p}-rim)"/>
    <g class="spokes">
      ${[0, 72, 144, 216, 288].map(a => `<path transform="rotate(${a})" d="M-5,-8 L-9,-31 C-4,-33 4,-33 9,-31 L5,-8 Z" fill="#5d5668"/><path transform="rotate(${a})" d="M-2,-9 L-4,-30 L1,-31 L1,-9 Z" fill="#fff" opacity=".35"/>`).join("")}
      <circle r="10" fill="#d9d4e0" stroke="#6d6678" stroke-width="2"/>
      <circle r="3" fill="#4c4656"/>
    </g>
    <circle class="blur" r="34" fill="url(#${p}-blur)"/>
    <path d="M-20,-24 A31,31 0 0 1 22,-22" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>
  </g>`).join("")}
</svg>`;
}

function setCabAd(root, ad) {
  root.querySelectorAll(".ad-c1").forEach(s => s.setAttribute("stop-color", ad.c1));
  root.querySelectorAll(".ad-c2").forEach(s => s.setAttribute("stop-color", ad.c2));
  root.querySelectorAll(".wrap-t1").forEach(t => { t.textContent = ad.t1; t.setAttribute("font-size", Math.min(24, 225 / (ad.t1.length * .62)).toFixed(1)); });
  root.querySelectorAll(".wrap-t2").forEach(t => t.textContent = ad.t2);
  root.querySelectorAll(".roof-text").forEach(t => { t.textContent = `${ad.roof} ✦ ANUTEC ✦ ${ad.roof} ✦ ANUTEC ✦`; t.setAttribute("fill", ad.c1); });
}

/* ---------- procedural skyline tiles (drawn once, reused as images) ---------- */
function skylineTile({ w = 1600, h = 520, seed = 1, minH = .25, maxH = .9, fill = "#1a0d2b", winA = .7, neon = true, lamps = false } = {}) {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d");
  let s = seed; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  let x = 0;
  while (x < w) {
    let bw = 50 + r() * 110; if (x + bw > w) bw = w - x;
    const bh = h * (minH + r() * (maxH - minH)), y = h - bh;
    g.fillStyle = fill; g.fillRect(x, y, bw, bh);
    // roof details
    if (r() < .35) { g.fillRect(x + bw * .3, y - 14, bw * .4, 14); }
    if (r() < .2) { g.fillRect(x + bw * .5 - 1, y - 40, 2, 40); g.fillStyle = "#ff4f7a"; g.fillRect(x + bw * .5 - 2, y - 42, 4, 4); g.fillStyle = fill; }
    // edge light
    g.fillStyle = "rgba(255,255,255,.05)"; g.fillRect(x, y, 2, bh); g.fillStyle = fill;
    // windows
    const cols = Math.floor((bw - 12) / 12), rows = Math.floor((bh - 16) / 16);
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      if (r() < .42) {
        const warm = r();
        g.fillStyle = warm < .7 ? `rgba(255,214,150,${winA * (.4 + r() * .6)})` : warm < .85 ? `rgba(180,200,255,${winA * .6})` : `rgba(240,166,201,${winA * .7})`;
        g.fillRect(x + 8 + i * 12, y + 10 + j * 16, 6, 8);
      }
    }
    // neon sign
    if (neon && r() < .16 && bh > h * .35) {
      const col = ["#d45fb8", "#9b5de5", "#e8c27a", "#4fc3f7"][Math.floor(r() * 4)];
      g.shadowColor = col; g.shadowBlur = 16; g.fillStyle = col;
      g.fillRect(x + 8, y + 26, Math.min(bw - 16, 70), 12); g.shadowBlur = 0; g.fillStyle = fill;
    }
    x += bw + (r() < .3 ? 6 + r() * 14 : 0);
  }
  return c.toDataURL("image/png");
}

/* ---------- city scene ---------- */
function buildScene(el, { mode = "loop", ad } = {}) {
  el.classList.add("scene");
  el.innerHTML = `
    <div class="sky sky-night"></div><div class="sky sky-dusk"></div><div class="sky sky-eve"></div><div class="sky sky-dawn"></div><div class="sky sky-day"></div>
    <div class="stars"></div>
    <div class="orb"></div>
    <div class="layer far"><i></i></div>
    <div class="haze"></div>
    <div class="layer mid"><i></i></div>
    <div class="stops"></div>
    <div class="layer lamps"><i></i></div>
    <div class="traffic"><span></span><span></span><span></span><span></span></div>
    <div class="road"><div class="dash"><i></i></div><div class="wet"></div></div>
    <div class="cab-wrap">${cabSVG({ ad })}</div>
    <div class="layer poles"><i></i></div>
    <div class="bokeh"></div>`;
  const far = skylineTile({ seed: 7, minH: .3, maxH: .75, fill: "#2a1640", winA: .35, neon: false });
  const mid = skylineTile({ seed: 3, minH: .35, maxH: 1, fill: "#140a20", winA: .85 });
  el.querySelector(".far i").style.backgroundImage = `url(${far})`;
  el.querySelector(".mid i").style.backgroundImage = `url(${mid})`;
  // stars + bokeh
  const st = el.querySelector(".stars");
  st.innerHTML = Array.from({ length: 60 }, () => `<b style="left:${Math.random() * 100}%;top:${Math.random() * 55}%;animation-delay:${-Math.random() * 4}s;opacity:${.3 + Math.random() * .7}"></b>`).join("");
  const bk = el.querySelector(".bokeh");
  bk.innerHTML = Array.from({ length: 12 }, () => {
    const c = ["232,194,122", "212,95,184", "155,93,229", "255,240,200"][Math.floor(Math.random() * 4)];
    const sz = 20 + Math.random() * 70;
    return `<b style="left:${Math.random() * 100}%;top:${50 + Math.random() * 45}%;width:${sz}px;height:${sz}px;background:rgba(${c},.35);animation-delay:${-Math.random() * 10}s"></b>`;
  }).join("");
  el.dataset.mode = mode;
  return el;
}
function setSceneTime(el, t) { el.dataset.time = t; }
