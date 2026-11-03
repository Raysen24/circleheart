import gsap from 'gsap';
import { SALADS, MEDIUM, SNACKS, EXTRAS, DRESSINGS, MEATS, BUILDER_EXTRAS, CATERING, LOCATIONS, WHATSAPP, INSTAGRAM, rupiah, short } from './data.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

let spriteDoc = null;
export async function mountDoodles() {
  const txt = await fetch('/images/doodles/sprite.svg').then(r => r.text());
  spriteDoc = new DOMParser().parseFromString(txt, 'image/svg+xml');
  $$('.dd[data-icon]').forEach(el => {
    const sym = spriteDoc.getElementById('dd-' + el.dataset.icon);
    if (!sym) return;
    el.innerHTML = `<svg viewBox="${sym.getAttribute('viewBox')}" fill="currentColor">${sym.innerHTML}</svg>`;
  });
}

/* ---------------- Menu ---------------- */
function dishCard(d, kind) {
  const tagClass = d.tag === 'Best seller' || d.tag === 'Premium' ? 'dish__tag is-hot' : 'dish__tag';
  const contain = d.contain.slice(0, 6).join(', ') + (d.contain.length > 6 ? '…' : '');
  return `
  <button class="dish tilt" data-kind="${kind}" data-id="${d.id}" aria-label="${d.name} details">
    ${d.tag || d.size ? `<span class="${tagClass}">${d.tag || d.size}</span>` : ''}
    <div class="dish__media">
      <img class="dish__img" src="/images/${d.img}.webp" alt="${d.name}" loading="lazy" />
      ${d.wrap ? `<img class="dish__wrap" src="/images/${d.wrap}.webp" alt="" loading="lazy" />` : ''}
    </div>
    <div class="dish__head"><h3>${d.name}</h3><span class="price">${rupiah(d.price)}</span></div>
    <p class="dish__desc">${d.desc}</p>
    <p class="dish__contain"><b>Contain:</b> ${contain}</p>
    <span class="dish__more">See everything inside →</span>
  </button>`;
}

function extrasPanel() {
  const list = (rows) => `<ul>${rows.map(([n, p]) => `<li><span>${n}</span><span>${short(p)}</span></li>`).join('')}</ul>`;
  return `<div class="extras">
    <article class="card tilt"><h3>Extra Ingredients</h3>${list(EXTRAS.ingredients)}</article>
    <article class="card tilt"><h3>Extra Meat</h3>${list(EXTRAS.meat)}</article>
    <article class="card tilt"><h3>Extra Dressing <small style="color:var(--muted);font-size:.8rem;font-weight:700">(8k each)</small></h3>${list(EXTRAS.dressing)}</article>
  </div>`;
}

const PANELS = {
  salads: () => `<div class="menu__grid">${SALADS.map(d => dishCard(d, 'salads')).join('')}</div>`,
  medium: () => `<div class="menu__grid">${MEDIUM.map(d => dishCard(d, 'medium')).join('')}</div>`,
  snacks: () => `<div class="menu__grid">${SNACKS.map(d => dishCard(d, 'snacks')).join('')}</div>`,
  extras: extrasPanel,
};
const FIND = { salads: SALADS, medium: MEDIUM, snacks: SNACKS };

export function initMenu({ onRender }) {
  const panel = $('#menuPanel');
  const render = (tab) => {
    panel.innerHTML = PANELS[tab]();
    const items = $$('.dish, .extras .card', panel);
    gsap.fromTo(items, { y: 40, opacity: 0, rotateX: -8 }, { y: 0, opacity: 1, rotateX: 0, duration: .7, stagger: .06, ease: 'power3.out', clearProps: 'transform' });
    onRender?.(panel);
  };
  $('#menuTabs').addEventListener('click', (e) => {
    const b = e.target.closest('.tab'); if (!b) return;
    $$('.tab').forEach(t => t.classList.toggle('is-active', t === b));
    render(b.dataset.tab);
  });
  panel.addEventListener('click', (e) => {
    const card = e.target.closest('.dish'); if (!card) return;
    const d = FIND[card.dataset.kind].find(x => x.id === card.dataset.id);
    openModal(d, card.dataset.kind);
  });
  render('salads');
}

/* ---------------- Modal ---------------- */
let lastFocus = null;
export function openModal(d, kind) {
  const m = $('#modal');
  $('#modalImg').src = `/images/${d.img}.webp`;
  const w = $('#modalWrap'); if (d.wrap) { w.src = `/images/${d.wrap}.webp`; w.hidden = false; } else { w.hidden = true; }
  $('#modalTag').textContent = d.tag || (d.size ? d.size + ' size' : (kind === 'snacks' ? 'Snack' : 'Salad'));
  $('#modalTitle').textContent = d.name + (d.size ? ` (${d.size})` : '');
  $('#modalPrice').textContent = rupiah(d.price);
  $('#modalDesc').textContent = d.desc;
  $('#modalContain').innerHTML = d.contain.map(c => `<li>${c}</li>`).join('') + (d.bowlOnly ? d.bowlOnly.map(c => `<li class="alt">${c} (bowl only)</li>`).join('') : '');
  $('#modalChoice').innerHTML = d.choice ? `<p><b>Choice of meat:</b> ${MEATS.map(m => m.name + (m.extra ? ` (+${short(m.extra)})` : '')).join(', ')}.<br><b>Choice of dressing:</b> ${DRESSINGS.map(x => x.name).join(', ')}.</p>` : '';
  $('#modalOrder').href = wa(`Halo Circle Heart! Saya mau pesan ${d.name}${d.size ? ' (' + d.size + ')' : ''} — ${rupiah(d.price)}.`);
  lastFocus = document.activeElement;
  m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false');
  document.dispatchEvent(new CustomEvent('modal:open'));
  gsap.fromTo('#modalImg', { rotate: -20, scale: .8 }, { rotate: 0, scale: 1, duration: .8, ease: 'back.out(1.6)' });
  gsap.fromTo('#modalContain li', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .4, stagger: .03, delay: .15 });
  $('.modal__close').focus();
}
export function closeModal() {
  const m = $('#modal'); m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true');
  document.dispatchEvent(new CustomEvent('modal:close'));
  lastFocus?.focus?.();
}
export function initModal() {
  $$('#modal [data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

/* ---------------- Dressings ---------------- */
export function initDressings({ onHover }) {
  const track = $('#dressingsTrack');
  track.innerHTML = DRESSINGS.map(d => `
    <article class="cup tilt" data-id="${d.id}">
      <img class="cup__img" src="/images/${d.img}.webp" alt="${d.name}" loading="lazy" />
      <h3>${d.name}</h3><p>${d.note}</p>
      <span class="cup__swatch" style="background:${d.color}"></span>
    </article>`).join('');
  let last = null;
  const trigger = (el) => { const id = el.dataset.id; if (id === last) return; last = id; onHover(DRESSINGS.find(d => d.id === id)); };
  track.addEventListener('pointerover', (e) => { const c = e.target.closest('.cup'); if (c) trigger(c); });
  track.addEventListener('click', (e) => { const c = e.target.closest('.cup'); if (c) { last = null; trigger(c); } });
}

/* ---------------- Builder ---------------- */
export function initBuilder(scene) {
  const state = { style: 'bowl', meat: MEATS[0], dressing: DRESSINGS[0], extras: new Set() };
  const BASE = SALADS[0].price;

  $('#meatChips').innerHTML = MEATS.map((m, i) => `<button class="chip ${i === 0 ? 'is-active' : ''}" data-meat="${m.id}">${m.name}${m.extra ? ` <small>+${short(m.extra)}</small>` : ''}</button>`).join('');
  $('#dressingChips').innerHTML = DRESSINGS.map((d, i) => `<button class="chip ${i === 0 ? 'is-active' : ''}" data-dressing="${d.id}"><span class="dot" style="background:${d.color}"></span>${d.name}</button>`).join('');
  $('#extraChips').innerHTML = BUILDER_EXTRAS.map(x => `<button class="chip" data-extra="${x.id}">${x.name} <small>+${short(x.price)}</small></button>`).join('');

  const summarize = () => {
    const lines = [[`All In Salad (${state.style})`, rupiah(BASE)], [state.meat.name, state.meat.extra ? '+' + short(state.meat.extra) : 'included'], [state.dressing.name, 'included']];
    let total = BASE + state.meat.extra;
    for (const id of state.extras) { const x = BUILDER_EXTRAS.find(e => e.id === id); lines.push([x.name, '+' + short(x.price)]); total += x.price; }
    $('#sumLines').innerHTML = lines.map(([a, b]) => `<li><span>${a}</span><span>${b}</span></li>`).join('');
    const priceEl = $('#sumPrice');
    const from = parseInt(priceEl.dataset.v || BASE, 10);
    priceEl.dataset.v = total;
    gsap.fromTo({ v: from }, { v: total }, { duration: .6, ease: 'power2.out', onUpdate() { priceEl.textContent = rupiah(Math.round(this.targets()[0].v / 1000) * 1000); } });
    gsap.fromTo(priceEl, { scale: 1.15 }, { scale: 1, duration: .5, ease: 'back.out(2)' });
    $('#sumTitle').textContent = `All In Salad · ${state.style === 'bowl' ? 'Bowl' : 'Wrap'}`;
    const extrasTxt = [...state.extras].map(id => BUILDER_EXTRAS.find(e => e.id === id).name).join(', ');
    $('#sumOrder').href = wa(`Halo Circle Heart! Saya mau pesan All In Salad (${state.style}) dengan ${state.meat.name}, dressing ${state.dressing.name}${extrasTxt ? ', extra: ' + extrasTxt : ''}. Total ${rupiah(total)}.`);
  };

  $('#styleChips').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; $$('#styleChips .chip').forEach(c => c.classList.toggle('is-active', c === b)); state.style = b.dataset.style; scene.setStyle(state.style); summarize(); });
  $('#meatChips').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; $$('#meatChips .chip').forEach(c => c.classList.toggle('is-active', c === b)); state.meat = MEATS.find(m => m.id === b.dataset.meat); scene.setMeat(state.meat); summarize(); });
  $('#dressingChips').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; $$('#dressingChips .chip').forEach(c => c.classList.toggle('is-active', c === b)); state.dressing = DRESSINGS.find(d => d.id === b.dataset.dressing); scene.setDressing(state.dressing); summarize(); });
  $('#extraChips').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; const id = b.dataset.extra; const on = !state.extras.has(id); b.classList.toggle('is-active', on); on ? state.extras.add(id) : state.extras.delete(id); scene.toggleExtra(id, on); summarize(); });

  scene.setMeat(state.meat);
  scene.setDressing(state.dressing, { silent: true });
  summarize();
  return state;
}

/* ---------------- Catering ---------------- */
export function initCatering() {
  const plans = $('#cateringPlans');
  const render = (key) => {
    const p = CATERING.healthy[key];
    plans.innerHTML = p.plans.map(([n, d, price], i) => `
      <article class="plan tilt ${i === 1 ? 'is-popular' : ''}">
        ${i === 1 ? '<span class="ribbon">Popular</span>' : ''}
        <h3>${n}</h3><small>${d} · ${p.title}</small>
        <div class="price" data-price="${price}">${rupiah(price)}</div>
      </article>`).join('');
    gsap.fromTo('.plan', { rotateY: -40, opacity: 0, y: 20 }, { rotateY: 0, opacity: 1, y: 0, duration: .7, stagger: .08, ease: 'power3.out', clearProps: 'transform' });
  };
  const toggle = $('#cateringToggle'); const thumb = $('.catering__thumb');
  const moveThumb = (b) => { thumb.style.width = b.offsetWidth + 'px'; thumb.style.transform = `translateX(${b.offsetLeft - 6}px)`; };
  toggle.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; $$('button', toggle).forEach(x => x.classList.toggle('is-active', x === b)); moveThumb(b); render(b.dataset.plan); });
  requestAnimationFrame(() => moveThumb($('button.is-active', toggle)));
  window.addEventListener('resize', () => moveThumb($('button.is-active', toggle)));
  render('both');
  $('#familyPlans').innerHTML = CATERING.family.plans.map(([n, d, p]) => `<li><span>${n}${d ? ` <small>(${d})</small>` : ''}</span><span>${rupiah(p)}</span></li>`).join('');
  $('#cateringNotes').innerHTML = CATERING.notes.map(n => `<li>${n}</li>`).join('');
}

/* ---------------- Visit ---------------- */
export function initVisit() {
  $('#locations').innerHTML = LOCATIONS.map(l => `
    <article class="loc tilt">
      <p class="eyebrow">Outlet</p>
      <h3>${l.name}</h3>
      <p>${l.address}</p>
      <a class="btn btn--ghost" href="${l.maps}" target="_blank" rel="noopener">Open in Maps</a>
    </article>`).join('');
  const order = wa('Halo Circle Heart! Saya mau pesan salad.');
  ['#navOrder', '#visitOrder'].forEach(s => $(s).href = order);
  ['#igLink', '#visitIg'].forEach(s => $(s).href = `https://instagram.com/${INSTAGRAM}`);
  $('#year').textContent = new Date().getFullYear();
}

/* ---------------- Tilt cards ---------------- */
export function initTilt(root = document) {
  if (!window.matchMedia('(hover: hover)').matches) return;
  $$('.tilt', root).forEach(el => {
    if (el.dataset.tilt) return; el.dataset.tilt = '1';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      gsap.to(el, { rotateY: x * 10, rotateX: -y * 10, transformPerspective: 900, duration: .4, ease: 'power2.out' });
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { rotateY: 0, rotateX: 0, duration: .7, ease: 'elastic.out(1,.6)' }));
  });
}

/* ---------------- Cursor ---------------- */
export function initCursor() {
  const c = $('#cursor'); if (!c || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const dot = $('.cursor__dot', c), ring = $('.cursor__ring', c);
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }, ringPos = { ...pos };
  window.addEventListener('pointermove', (e) => { pos.x = e.clientX; pos.y = e.clientY; });
  gsap.ticker.add(() => {
    ringPos.x += (pos.x - ringPos.x) * .18; ringPos.y += (pos.y - ringPos.y) * .18;
    dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%,-50%)`;
  });
  document.addEventListener('pointerover', (e) => { c.classList.toggle('is-hover', !!e.target.closest('a, button, .cup, .dish')); });
  document.addEventListener('bowl:hover', (e) => c.classList.toggle('is-hover', e.detail));
}

/* ---------------- Hero dish switcher ---------------- */
export function initHeroPicker(scene) {
  const keys = ['all-in', 'supreme', 'big-omega', 'sawadee', 'baby-o', 'crunchy'];
  const root = $('#heroPicker'); if (!root) return;
  root.innerHTML = keys.map((k, i) => { const d = SALADS.find(x => x.id === k); return `<button class="pick ${i === 0 ? 'is-active' : ''}" data-bowl="${k}"><img src="/images/${d.img}.webp" alt="" />${d.name}<small>${short(d.price)}</small></button>`; }).join('');
  const dish = $('#heroDish');
  const apply = (k) => {
    const d = SALADS.find(x => x.id === k);
    $$('.pick', root).forEach(b => b.classList.toggle('is-active', b.dataset.bowl === k));
    if (scene.bowlKey !== k) scene.setBowl(k);
    if (dish) {
      gsap.fromTo(dish, { y: 8, opacity: .4 }, { y: 0, opacity: 1, duration: .5, ease: 'power3.out' });
      $('.hero__dish-name', dish).textContent = d.name; $('.hero__dish-price', dish).textContent = rupiah(d.price);
      $('.hero__dish-order', dish).href = wa(`Halo Circle Heart! Saya mau pesan ${d.name} — ${rupiah(d.price)}.`);
    }
  };
  root.addEventListener('click', (e) => { const b = e.target.closest('.pick'); if (b) apply(b.dataset.bowl); });
  document.addEventListener('bowl:change', (e) => { const k = e.detail; if ($('.pick.is-active', root)?.dataset.bowl !== k) apply(k); });
  $('.hero__dish-order')?.setAttribute('href', wa('Halo Circle Heart! Saya mau pesan All In Salad — Rp 40.000.'));
}
