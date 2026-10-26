// 2026 KSA 천체사진전 — 작품 데이터와 갤러리/뷰어 동작
const WORKS = [
  {
    id: "m42", cat: "nebula", title: "별들의 요람, M42", by: ["25 손다빈"],
    kind: "발광성운 · 오리온자리", target: "오리온 대성운 (M42)",
    pos: "50% 40%",
    desc: "오리온자리의 칼 부분에서 맨눈으로도 찾을 수 있는 오리온 대성운(M42)입니다. 약 1,300광년 떨어진 이 거대한 가스 구름 속에서는 지금도 새로운 별이 태어나고 있습니다. 푸르게 빛나는 중심부에는 트라페지움이라 불리는 젊고 뜨거운 별들이 모여 있고, 이 별들이 내뿜는 강한 자외선이 주변의 수소 가스를 붉게 빛나게 합니다."
  },
  {
    id: "eclipse", cat: "moon", title: "붉은 달로 가는 길", by: ["25 손다빈", "24 조현우"],
    kind: "개기월식 · 합성", target: "개기월식", date: "2026. 3. 3.",
    pos: "50% 50%",
    desc: "2026년 3월 3일 개기월식이 진행되는 모습을 한 장에 모았습니다. 둥글게 둘러선 달들은 지구의 본그림자 속으로 조금씩 먹혀 들어갔다가 다시 빠져나오는 순간들이고, 한가운데의 붉은 달이 개기식입니다. 달이 붉게 물드는 것은 지구 대기를 지나며 꺾인 햇빛 가운데 붉은빛만 그림자 안까지 닿기 때문으로, 그 순간 달은 지구 위 모든 곳의 노을을 비추고 있는 셈입니다."
  },
  {
    id: "veil", cat: "nebula", title: "별이 남긴 베일", by: ["25 김강우"],
    kind: "초신성 잔해 · 백조자리", target: "베일성운 · 피커링의 삼각형",
    pos: "45% 50%",
    desc: "백조자리 베일성운의 한 부분인 피커링의 삼각형입니다. 1~2만 년 전에 터진 초신성의 잔해가 초속 수백 킬로미터로 퍼져 나가며 성간 가스를 밀어내고 달구어, 붉은 수소와 푸른 산소의 빛이 얇은 천을 여러 겹 포개 놓은 듯한 섬세한 결을 이룹니다. 이 거대한 잔해는 지금도 조금씩 넓어지고 있습니다."
  },
  {
    id: "ngc2244", cat: "nebula", title: "우주의 장미", by: ["25 김강우"],
    kind: "발광성운 · 외뿔소자리", target: "장미성운 (NGC 2244)", date: "2026. 4. 2.",
    pos: "50% 45%",
    desc: "2026년 4월 2일에 담은 외뿔소자리의 장미성운입니다. 한가운데의 산개성단 NGC 2244를 이루는 젊고 뜨거운 별들이 강한 빛과 항성풍으로 주변 가스를 밀어내, 꽃잎에 둘러싸인 듯한 텅 빈 속을 만들었습니다. 왼쪽 위의 검은 얼룩들은 빛을 가리는 짙은 먼지 덩어리로, 그 안에서는 다음 세대의 별이 태어나고 있습니다."
  },
  {
    id: "ngc7635", cat: "nebula", title: "별이 분 비눗방울", by: ["25 손다빈"],
    kind: "발광성운 · 카시오페이아자리", target: "거품성운 (NGC 7635)", date: "2025. 11. 10.",
    pos: "42% 50%",
    desc: "2025년 11월 10일에 담은 카시오페이아자리의 거품성운(NGC 7635)입니다. 거품 안쪽의 무겁고 뜨거운 별이 내뿜는 항성풍이 주변 가스를 밀어내며 지름 7광년 남짓한 둥근 거품을 만들었습니다. 거품 위쪽이 유난히 밝은 것은 그쪽의 짙은 분자 구름과 항성풍이 강하게 부딪히고 있기 때문입니다. 협대역 데이터를 Foraxx 팔레트로 재구성했습니다."
  },
  {
    id: "m31", cat: "galaxy", title: "250만 년 전의 빛", by: ["22 김민수"],
    kind: "나선은하 · 안드로메다자리", target: "안드로메다은하 (M31)",
    pos: "50% 50%",
    desc: "안드로메다자리에 있는 안드로메다은하(M31)입니다. 약 250만 광년 떨어진 이 나선은하는 맨눈으로 볼 수 있는 가장 먼 천체 가운데 하나로, 지금 보이는 빛은 250만 년 전에 출발한 것입니다. 지름은 약 22만 광년으로 우리은하보다 크며, 1조 개 가까운 별이 모인 밝은 중심부를 어두운 먼지 띠가 나선을 따라 감싸고 있습니다."
  },
  {
    id: "m13", cat: "galaxy", title: "헤라클레스의 별무리", by: ["25 손다빈"],
    kind: "구상성단 · 헤라클레스자리", target: "구상성단 (M13)",
    pos: "50% 50%",
    desc: "헤라클레스자리에 있는 구상성단 M13입니다. 약 2만 2천 광년 떨어진 이곳에는 수십만 개의 별이 지름 150광년 남짓한 공 모양으로 빽빽하게 모여 있고, 나이는 120억 년 가까이 되어 우리은하에서 가장 오래된 천체 가운데 하나로 꼽힙니다. 오른쪽 아래 구석에는 약 3천만 광년 너머의 나선은하 NGC 6207이 작게 담겼습니다."
  },
  {
    id: "ngc884", cat: "galaxy", title: "페르세우스 이중성단", by: ["26 안주호"],
    kind: "산개성단 · 페르세우스자리", target: "NGC 869 · NGC 884",
    pos: "50% 50%",
    desc: "이 사진은 페르세우스 자리에 위치한 두 개의 산개성단인 NGC869와 NGC884를 찍은 사진입니다. 2시간 20분 정도 노출시켜서 촬영했습니다."
  },
  {
    id: "moon", cat: "moon", title: "달 표면 - 습기의 바다", by: ["25 김강우"],
    kind: "달 · 월면", target: "습기의 바다 (Mare Humorum)", date: "2026. 10. 22.",
    pos: "60% 30%",
    desc: "2026년 10월 22일에 담은 달의 습기의 바다(Mare Humorum)입니다. 위쪽의 커다란 원형 구덩이는 가센디 크레이터로, 바닥을 가르는 균열과 한가운데 솟은 봉우리들이 낮게 비치는 햇빛에 또렷이 드러납니다. 왼쪽의 어둠은 낮과 밤을 가르는 명암경계선으로, 이 경계 가까이에서는 그림자가 길게 늘어져 달 표면의 높낮이가 가장 입체적으로 보입니다."
  },
  {
    id: "sun_ar", cat: "sun", title: "태양 자기장의 붓질", by: ["25 김강우"],
    kind: "태양 · 수소 알파(Hα)", target: "태양 채층 활동영역", date: "2026. 10. 7.",
    pos: "50% 40%",
    desc: "2026년 10월 7일 수소 알파(Hα) 파장으로 담은 태양 채층의 활동영역입니다. 중앙의 밝은 플라주는 자기장이 집중되어 채층이 달궈진 곳이며, 그 사이로 뻗은 어두운 줄기와 아래쪽의 거대한 J자형 구조는 코로나에 떠 있는 차가운 플라스마, 필라멘트입니다. 화면을 가득 메운 가는 결(피브릴)은 자기력선을 따라 정렬해 있어, 눈에 보이지 않는 자기장의 모양을 그대로 그려 보여 줍니다."
  },
  {
    id: "sun_prom", cat: "sun", title: "태양에서 자라는 나무", by: ["25 김강우"],
    kind: "태양 · 수소 알파(Hα)", target: "태양 가장자리의 홍염", date: "2026. 10. 7.",
    pos: "60% 35%",
    desc: "2026년 10월 7일 수소 알파(Hα) 파장으로 담은 태양의 가장자리입니다. 둥근 원반의 밝은 테두리가 채층이고, 그 위로 솟구친 불꽃이 홍염(프로미넌스)입니다. 홍염은 자기장에 붙들린 채 수백만 도의 코로나 속에 떠 있는, 그보다 훨씬 차갑고 밀도 높은 플라스마 구름입니다. 사진 속 이 불꽃 하나의 높이만 해도 지구가 여러 개 들어갈 만큼 거대합니다."
  }
];

const CATS = [
  { id: "all", label: "전체" },
  { id: "nebula", label: "성운" },
  { id: "galaxy", label: "은하 · 성단" },
  { id: "moon", label: "달" },
  { id: "sun", label: "태양" }
];

const $ = (s) => document.querySelector(s);
const img = (id, size) => `assets/img/${id}-${size}.jpg`;
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const EASE = "cubic-bezier(.22, 1, .36, 1)";
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// Web Animations helper that collapses to an instant change under reduced motion
function anim(el, frames, { duration = 700, delay = 0, easing = EASE, fill = "none" } = {}) {
  return el.animate(frames, { duration: reduced.matches ? 0 : duration, delay: reduced.matches ? 0 : delay, easing, fill });
}

/* ---------- smooth scroll ---------- */
let lenis = null;
if (window.Lenis && !reduced.matches) {
  lenis = new Lenis({ duration: 1.25, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, wheelMultiplier: 0.9 });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
function scrollToEl(el) {
  const offset = -64;
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.6 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: reduced.matches ? "auto" : "smooth" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const target = id === "top" ? document.body : document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  if (id === "top") { lenis ? lenis.scrollTo(0, { duration: 1.6 }) : scrollTo({ top: 0, behavior: "smooth" }); }
  else scrollToEl(target);
});

/* ---------- filters ---------- */
const filters = $("#filters");
const grid = $("#grid");
let current = "all";
CATS.forEach((c) => {
  const n = c.id === "all" ? WORKS.length : WORKS.filter((w) => w.cat === c.id).length;
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("role", "tab");
  b.dataset.cat = c.id;
  b.setAttribute("aria-selected", c.id === current);
  b.innerHTML = `${c.label}<span class="n">${n}</span>`;
  b.addEventListener("click", () => setFilter(c.id, true));
  filters.appendChild(b);
});
const bar = document.createElement("span");
bar.className = "subnav-bar";
filters.appendChild(bar);
const progress = document.createElement("span");
progress.className = "subnav-progress";
$(".subnav").appendChild(progress);

function moveBar() {
  const btn = filters.querySelector('[aria-selected="true"]');
  bar.style.transform = `translateX(${btn.offsetLeft + btn.offsetWidth / 2 - 33.5}px)`;
}
addEventListener("resize", moveBar);
document.fonts && document.fonts.ready.then(moveBar);

let filterToken = 0;
async function setFilter(cat, scroll) {
  if (cat === current && !scroll) return;
  const token = ++filterToken;
  current = cat;
  filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b.dataset.cat === cat));
  moveBar();
  const active = filters.querySelector('[aria-selected="true"]');
  filters.scrollTo({ left: active.offsetLeft - 16, behavior: reduced.matches ? "auto" : "smooth" });
  if (scroll) scrollToEl($("#works"));

  grid.getAnimations({ subtree: true }).forEach((a) => a.cancel());
  const cards = [...grid.children];
  const match = (c) => cat === "all" || c.dataset.cat === cat;
  const leaving = cards.filter((c) => !c.hidden && !match(c));
  const staying = cards.filter((c) => !c.hidden && match(c));
  const entering = cards.filter((c) => c.hidden && match(c));

  await Promise.all(leaving.map((c) =>
    anim(c, [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(.96)" }], { duration: 260, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" }).finished.catch(() => {})));
  if (token !== filterToken) return;

  const first = new Map(staying.map((c) => [c, c.getBoundingClientRect()]));
  leaving.forEach((c) => { c.hidden = true; c.getAnimations().forEach((a) => a.cancel()); });
  entering.forEach((c) => { c.hidden = false; c.classList.add("in"); });
  staying.forEach((c) => {
    const f = first.get(c), l = c.getBoundingClientRect();
    const dx = f.left - l.left, dy = f.top - l.top;
    if (dx || dy) anim(c, [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: 800 });
  });
  entering.forEach((c, i) =>
    anim(c, [{ opacity: 0, transform: "translateY(32px)" }, { opacity: 1, transform: "none" }], { duration: 900, delay: 70 * i, fill: "backwards" }));
}

/* ---------- cards ---------- */
WORKS.forEach((w, i) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.dataset.cat = w.cat;
  card.dataset.open = w.id;
  card.dataset.reveal = "";
  card.setAttribute("aria-label", `${w.title} 크게 보기`);
  card.innerHTML = `
    <div class="card-img"><div class="card-par"><img src="${img(w.id, 900)}" alt="" loading="lazy" style="object-position:${w.pos}"></div></div>
    <div class="card-body">
      <p class="card-kind">${w.kind}</p>
      <h3 class="card-title">${w.title}</h3>
      <p class="card-by">${w.by.join(", ")}${w.date ? `<span>${w.date}</span>` : ""}<span class="card-more">보기 →</span></p>
    </div>`;
  grid.appendChild(card);
});

/* ---------- photographers ---------- */
const people = {};
WORKS.forEach((w) => w.by.forEach((p) => (people[p] = people[p] || []).push(w)));
const order = ["25 손다빈", "25 김강우", "22 김민수", "26 안주호", "24 조현우"];
$("#people").innerHTML = order.map((p) => {
  const [gen, name] = p.split(" ");
  return `<div class="tile" data-reveal>
    <p class="tile-gen">${gen}</p>
    <p class="tile-name">${name}</p>
    <ul>${people[p].map((w) => `<li><button type="button" data-open="${w.id}">${w.title}</button></li>`).join("")}</ul>
  </div>`;
}).join("");

/* ---------- reveal on scroll (staggered per row) ---------- */
function stagger(selector, step) {
  const els = [...document.querySelectorAll(selector)];
  els.forEach((el) => {
    const row = els.filter((o) => Math.abs(o.offsetTop - el.offsetTop) < 4);
    el.style.setProperty("--d", `${row.indexOf(el) * step}ms`);
  });
}
stagger(".card", 110);
stagger(".tile", 80);
stagger(".channel", 120);
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

/* ---------- scroll-linked: parallax, hero drift, progress ---------- */
const heroCopy = $(".hero-copy");
const heroBtn = $(".hero-photo-btn");
const hero = $(".hero-band");
const pars = [...document.querySelectorAll(".card-par")];
let ticking = false;
function onScroll() {
  ticking = false;
  const vh = innerHeight;
  const y = scrollY;
  const desktop = innerWidth > 974;

  // hero: copy drifts up and fades, photo moves slower than the page
  const hh = hero.offsetHeight;
  if (y < hh + 100) {
    const p = clamp(y / hh, 0, 1);
    heroCopy.style.transform = desktop ? `translate3d(0, ${y * -0.18}px, 0)` : "";
    heroCopy.style.opacity = desktop ? String(1 - p * 1.1) : "";
    heroBtn.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(${1 + p * 0.06})`;
  }

  // card images drift inside their frames
  pars.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    const t = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1..1
    el.style.transform = `translate3d(0, ${t * -7}%, 0)`;
  });

  // page progress on the sticky sub-nav
  const max = document.documentElement.scrollHeight - vh;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}
function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
if (!reduced.matches) {
  addEventListener("scroll", requestTick, { passive: true });
  addEventListener("resize", requestTick);
  onScroll();
}

/* ---------- viewer ---------- */
const viewer = $("#viewer");
const stage = $("#v-stage");
const frame = $("#v-frame");
const vimg = $("#v-img");
const panel = $(".viewer-panel");
const copy = $("#v-copy");
const hint = $("#zoom-hint");
let idx = -1;
let lastFocus = null;
// viewer actions run one after another so a click during a transition is never lost
let chain = Promise.resolve();
let queued = 0;
function enqueue(fn) {
  if (queued > 1) return;
  queued++;
  chain = chain.then(fn).catch(() => {}).finally(() => { queued--; });
}

function visibleList() {
  return current === "all" ? WORKS : WORKS.filter((w) => w.cat === current);
}

function fillPanel(w, list) {
  $("#v-count").textContent = `${idx + 1} / ${list.length}`;
  $("#v-kind").textContent = w.kind;
  $("#v-title").textContent = w.title;
  $("#v-by").textContent = w.by.join(", ");
  $("#v-desc").textContent = w.desc;
  $("#v-meta").innerHTML =
    `<div><dt>대상</dt><dd>${w.target}</dd></div>` +
    (w.date ? `<div><dt>촬영일</dt><dd>${w.date}</dd></div>` : "") +
    `<div><dt>촬영</dt><dd>${w.by.join(", ")}</dd></div>`;
  history.replaceState(null, "", `#${w.id}`);
  [list[(idx + 1) % list.length], list[(idx - 1 + list.length) % list.length]].forEach((n) => { new Image().src = img(n.id, 2000); });
}

function animateCopyIn(dir = 1) {
  [...copy.children].forEach((el, i) =>
    anim(el, [{ opacity: 0, transform: `translateY(${14 * dir}px)` }, { opacity: 1, transform: "none" }], { duration: 700, delay: 60 + i * 50, fill: "backwards" }));
}

// load the sharp version, swapping in once decoded
function setImage(w) {
  vimg.src = img(w.id, 900);
  vimg.alt = w.title;
  const hi = new Image();
  hi.src = img(w.id, 2000);
  const want = w.id;
  hi.decode().then(() => { if (WORKS[0] && visibleList()[idx] && visibleList()[idx].id === want) vimg.src = hi.src; }).catch(() => {});
}

function containRect(aspect) {
  const s = frame.getBoundingClientRect();
  let w = s.width, h = w / aspect;
  if (h > s.height) { h = s.height; w = h * aspect; }
  return { left: s.left + (s.width - w) / 2, top: s.top + (s.height - h) / 2, width: w, height: h };
}

function flyClone(fromImg, from, to, fromRadius, toRadius) {
  const c = fromImg.cloneNode();
  c.removeAttribute("loading");
  Object.assign(c.style, {
    position: "fixed", zIndex: 20, margin: 0, objectFit: "cover",
    objectPosition: getComputedStyle(fromImg).objectPosition, pointerEvents: "none",
    left: 0, top: 0, width: `${from.width}px`, height: `${from.height}px`,
    transform: `translate(${from.left}px, ${from.top}px)`, borderRadius: fromRadius
  });
  document.body.appendChild(c);
  const a = c.animate([
    { width: `${from.width}px`, height: `${from.height}px`, transform: `translate(${from.left}px, ${from.top}px)`, borderRadius: fromRadius },
    { width: `${to.width}px`, height: `${to.height}px`, transform: `translate(${to.left}px, ${to.top}px)`, borderRadius: toRadius }
  ], { duration: 820, easing: EASE, fill: "forwards" });
  return { el: c, done: a.finished.then(() => c) };
}

function sourceImgFor(id) {
  const card = grid.querySelector(`.card[data-open="${id}"]:not([hidden]) img`);
  const cands = [card, id === "m42" ? $(".hero-photo img") : null].filter(Boolean);
  return cands.find((el) => {
    const r = el.parentElement.closest(".card-img, .hero-photo").getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight && r.width > 0;
  }) || null;
}

function open(id, srcEl) {
  if (!viewer.hidden) return;
  let list = visibleList();
  if (!list.some((w) => w.id === id)) { setFilter("all", false); list = WORKS; }
  idx = list.findIndex((w) => w.id === id);
  if (idx < 0) return;
  const w = list[idx];
  lastFocus = document.activeElement;
  resetZoom(false);
  fillPanel(w, list);
  setImage(w);
  viewer.hidden = false;
  document.body.classList.add("no-scroll");
  if (lenis) lenis.stop();
  showHint();

  const src = srcEl && srcEl.tagName === "IMG" ? srcEl : null;
  const box = src && src.parentElement.closest(".card-img, .hero-photo");
  anim(viewer, [{ backgroundColor: "rgba(33,30,28,0)" }, { backgroundColor: "rgba(33,30,28,1)" }], { duration: 600 });
  anim(stage, [{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  anim(panel, [{ opacity: 0, transform: innerWidth > 974 ? "translateX(48px)" : "translateY(32px)" }, { opacity: 1, transform: "none" }], { duration: 900, delay: 120, fill: "backwards" });
  animateCopyIn();

  if (src && box && !reduced.matches && src.complete && src.naturalWidth) {
    const from = box.getBoundingClientRect();
    const to = containRect(src.naturalWidth / src.naturalHeight);
    vimg.style.opacity = 0;
    src.style.visibility = "hidden";
    const fly = flyClone(src, from, to, box.classList.contains("card-img") ? "8px" : "0px", "0px");
    chain = fly.done.then((c) => {
      vimg.style.opacity = "";
      src.style.visibility = "";
      anim(c, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 }).finished.then(() => c.remove());
    });
  } else {
    anim(frame, [{ opacity: 0, transform: "scale(.96)" }, { opacity: 1, transform: "none" }], { duration: 800 });
  }
  $("#v-close").focus({ preventScroll: true });
}

function close() {
  if (viewer.hidden) return Promise.resolve();
  const list = visibleList();
  const w = list[idx];
  const finish = () => {
    viewer.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lenis) lenis.start();
    vimg.style.opacity = "";
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  resetZoom(false);
  const target = w && sourceImgFor(w.id);
  anim(panel, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" });
  const bg = anim(viewer, [{ backgroundColor: "rgba(33,30,28,1)" }, { backgroundColor: "rgba(33,30,28,0)" }], { duration: 650, fill: "forwards" });
  anim(stage, [{ backgroundColor: "#0e0d0c" }, { backgroundColor: "rgba(14,13,12,0)" }], { duration: 500, fill: "forwards" });

  if (target && !reduced.matches && vimg.naturalWidth) {
    const box = target.parentElement.closest(".card-img, .hero-photo");
    const from = containRect(vimg.naturalWidth / vimg.naturalHeight);
    const to = box.getBoundingClientRect();
    target.style.visibility = "hidden";
    vimg.style.opacity = 0;
    const fly = flyClone(target, from, to, "0px", box.classList.contains("card-img") ? "8px" : "0px");
    fly.el.style.objectFit = "cover";
    return fly.done.then((c) => {
      target.style.visibility = "";
      c.remove();
      viewer.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      finish();
    });
  }
  anim(frame, [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(.97)" }], { duration: 400, fill: "forwards" });
  return bg.finished.then(() => { viewer.getAnimations({ subtree: true }).forEach((a) => a.cancel()); finish(); });
}

async function step(d, fromX = 0) {
  if (viewer.hidden) return;
  const list = visibleList();
  resetZoom(false);
  const out = anim(frame, [
    { opacity: fromX ? 1 - Math.min(Math.abs(fromX) / 600, 0.4) : 1, transform: `translateX(${fromX}px)` },
    { opacity: 0, transform: `translateX(${-d * 90 + fromX * 0.3}px)` }
  ], { duration: 280, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" });
  frame.style.transform = "";
  frame.style.opacity = "";
  const copyOut = [...copy.children].map((el) => anim(el, [{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards" }));
  await out.finished.catch(() => {});
  idx = (idx + d + list.length) % list.length;
  const w = list[idx];
  fillPanel(w, list);
  const hi = new Image();
  hi.src = img(w.id, 2000);
  await Promise.race([hi.decode().catch(() => {}), new Promise((r) => setTimeout(r, 450))]);
  vimg.src = hi.complete ? hi.src : img(w.id, 900);
  if (!hi.complete) hi.decode().then(() => { if (visibleList()[idx].id === w.id) vimg.src = hi.src; }).catch(() => {});
  vimg.alt = w.title;
  out.cancel();
  copyOut.forEach((a) => a.cancel());
  anim(frame, [{ opacity: 0, transform: `translateX(${d * 90}px)` }, { opacity: 1, transform: "none" }], { duration: 800 });
  animateCopyIn();
  panel.scrollTop = 0;
}

/* zoom + pan + swipe on the stage */
const z = { s: 1, x: 0, y: 0 };
function applyZoom(ease) {
  vimg.classList.toggle("ease", !!ease);
  vimg.classList.toggle("zoomed", z.s > 1.01);
  vimg.style.transform = `translate3d(${z.x}px, ${z.y}px, 0) scale(${z.s})`;
}
function clampPan() {
  const fw = frame.clientWidth, fh = frame.clientHeight;
  const bw = vimg.offsetWidth * z.s, bh = vimg.offsetHeight * z.s;
  const mx = Math.max(0, (bw - fw) / 2 + 40), my = Math.max(0, (bh - fh) / 2 + 40);
  z.x = clamp(z.x, -mx, mx);
  z.y = clamp(z.y, -my, my);
}
function zoomAt(ns, cx, cy, ease) {
  const r = frame.getBoundingClientRect();
  const px = cx - (r.left + r.width / 2), py = cy - (r.top + r.height / 2);
  ns = clamp(ns, 1, 5);
  z.x = px - (px - z.x) * (ns / z.s);
  z.y = py - (py - z.y) * (ns / z.s);
  z.s = ns;
  if (z.s <= 1.01) { z.s = 1; z.x = 0; z.y = 0; }
  clampPan();
  applyZoom(ease);
}
function resetZoom(ease = true) { z.s = 1; z.x = 0; z.y = 0; applyZoom(ease); }

let hintTimer;
function showHint() {
  hint.classList.remove("off");
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => hint.classList.add("off"), 2600);
}

stage.addEventListener("wheel", (e) => {
  e.preventDefault();
  zoomAt(z.s * Math.exp(-e.deltaY * 0.0022), e.clientX, e.clientY, false);
}, { passive: false });
stage.addEventListener("dblclick", (e) => {
  if (z.s > 1.01) resetZoom(true);
  else zoomAt(2.6, e.clientX, e.clientY, true);
});

const pts = new Map();
let g = null;
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
stage.addEventListener("pointerdown", (e) => {
  if (e.button > 0) return;
  stage.setPointerCapture(e.pointerId);
  pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pts.size === 2) {
    const [a, b] = [...pts.values()];
    g = { type: "pinch", d0: dist(a, b), s0: z.s, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
  } else {
    g = { type: z.s > 1.01 ? "pan" : "swipe", sx: e.clientX, sy: e.clientY, x0: z.x, y0: z.y, t: performance.now(), moved: false, target: e.target };
    if (g.type === "pan") vimg.classList.add("grabbing");
  }
});
stage.addEventListener("pointermove", (e) => {
  if (!pts.has(e.pointerId) || !g) return;
  pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (g.type === "pinch" && pts.size === 2) {
    const [a, b] = [...pts.values()];
    const ns = g.s0 * dist(a, b) / g.d0;
    zoomAt(ns, g.cx, g.cy, false);
    return;
  }
  const dx = e.clientX - g.sx, dy = e.clientY - g.sy;
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) g.moved = true;
  if (g.type === "pan") {
    z.x = g.x0 + dx; z.y = g.y0 + dy;
    clampPan();
    applyZoom(false);
  } else if (g.type === "swipe" && g.moved) {
    g.dx = dx;
    frame.style.transform = `translateX(${dx * 0.9}px)`;
    frame.style.opacity = String(1 - Math.min(Math.abs(dx) / 600, 0.4));
  }
});
function endPointer(e) {
  if (!pts.has(e.pointerId)) return;
  pts.delete(e.pointerId);
  if (!g) return;
  if (g.type === "pinch") { if (pts.size < 2) g = null; return; }
  vimg.classList.remove("grabbing");
  if (g.type === "swipe") {
    const dx = g.dx || 0;
    const v = dx / Math.max(1, performance.now() - g.t);
    if (g.moved && (Math.abs(dx) > 90 || Math.abs(v) > 0.6)) { const fx = dx * 0.9; enqueue(() => step(dx < 0 ? 1 : -1, fx)); }
    else if (g.moved) {
      anim(frame, [{ transform: frame.style.transform, opacity: frame.style.opacity }, { transform: "none", opacity: 1 }], { duration: 600 });
      frame.style.transform = ""; frame.style.opacity = "";
    } else if (g.target === stage || g.target === frame) enqueue(close);
  }
  g = null;
}
stage.addEventListener("pointerup", endPointer);
stage.addEventListener("pointercancel", endPointer);

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-open]");
  if (!t) return;
  const src = t.querySelector("img") || null;
  open(t.dataset.open, src && src.closest(".card-img, .hero-photo") ? src : null);
});
$("#v-close").addEventListener("click", () => enqueue(close));
$("#v-prev").addEventListener("click", () => enqueue(() => step(-1)));
$("#v-next").addEventListener("click", () => enqueue(() => step(1)));
document.addEventListener("keydown", (e) => {
  if (viewer.hidden) return;
  if (e.key === "Escape") enqueue(close);
  else if (e.key === "ArrowRight") enqueue(() => step(1));
  else if (e.key === "ArrowLeft") enqueue(() => step(-1));
  else if (e.key === "+" || e.key === "=") { const r = frame.getBoundingClientRect(); zoomAt(z.s * 1.5, r.left + r.width / 2, r.top + r.height / 2, true); }
  else if (e.key === "-") { const r = frame.getBoundingClientRect(); zoomAt(z.s / 1.5, r.left + r.width / 2, r.top + r.height / 2, true); }
  else if (e.key === "0") resetZoom(true);
  else if (e.key === "Tab") {
    const f = [...viewer.querySelectorAll("button")];
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});
addEventListener("resize", () => { if (!viewer.hidden) resetZoom(false); });

moveBar();

// deep link: index.html#m42 opens that work directly
const initial = location.hash.slice(1);
if (WORKS.some((w) => w.id === initial)) open(initial, null);
