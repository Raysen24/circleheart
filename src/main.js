import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SaladScene } from './scene.js';
import { mountDoodles, initMenu, initModal, initDressings, initBuilder, initCatering, initVisit, initTilt, initCursor, initHeroPicker } from './ui.js';

gsap.registerPlugin(ScrollTrigger);
// Phones show/hide the address bar while scrolling; without this every such resize re-measures all triggers and causes jumps.
ScrollTrigger.config({ ignoreMobileResize: true });
const isTouch = window.matchMedia('(hover: none), (pointer: coarse), (max-width: 1024px)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Smooth scroll ---------- */
const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
lenis.on('scroll', (e) => { ScrollTrigger.update(); scene?.setScrollVelocity(e.velocity); });
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();

/* ---------- 3D ---------- */
let scene = null;
try { scene = new SaladScene($('#scene'), $('#labels')); window.__scene = scene; } catch (err) { console.warn('WebGL unavailable', err); $('#scene').remove(); }

/* ---------- Boot ---------- */
async function boot() {
  const bar = $('.loader__bar span');
  const prog = { v: 0 };
  const tl = gsap.to(prog, { v: 85, duration: 1.6, ease: 'power2.out', onUpdate: () => (bar.style.width = prog.v + '%') });

  await Promise.all([
    mountDoodles(),
    document.fonts?.ready,
    scene?.ready,
  ]);
  scene?.intro();

  initMenu({ onRender: (panel) => { initTilt(panel); ScrollTrigger.refresh(); } });
  initModal();
  initDressings({ onHover: (d) => scene?.setDressing(d) });
  if (scene) { initBuilder(scene); initHeroPicker(scene); scene.setStage($('.story__stage')); }
  initCatering();
  initVisit();
  initTilt();
  initCursor();
  setupDressingsScroll(); // pinned section first so later triggers account for its pin spacing
  setupNav();
  setupHero();
  setupMarquee();
  setupReveals();
  setupPoses();
  setupExtras();
  ScrollTrigger.sort();

  tl.kill();
  await new Promise(res => gsap.to(prog, { v: 100, duration: .35, onUpdate: () => (bar.style.width = prog.v + '%'), onComplete: res }));
}

function hideLoader() {
  const loader = $('#loader'); if (!loader) return;
  gsap.timeline({ onComplete: () => { loader.remove(); lenis.start(); ScrollTrigger.refresh(); } })
    .to('.loader__logo', { scale: 1.15, opacity: 0, duration: .5, ease: 'power2.in' }, 0)
    .to('.loader__bar, .loader__text', { opacity: 0, duration: .3 }, 0)
    .to(loader, { yPercent: -100, duration: .8, ease: 'power4.inOut' }, .2)
    .add(heroIntro, .5);
}

/* ---------- Nav ---------- */
function setupNav() {
  const nav = $('#nav'), links = $('#navLinks'), burger = $('#burger');
  ScrollTrigger.create({ start: 80, onUpdate: (s) => nav.classList.toggle('is-scrolled', s.scroll() > 80), onToggle: (s) => nav.classList.toggle('is-scrolled', s.isActive) });
  burger.addEventListener('click', () => { const open = links.classList.toggle('is-open'); burger.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open); });
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href'); if (id.length < 2) return; const el = $(id); if (!el) return;
    e.preventDefault(); links.classList.remove('is-open'); burger.classList.remove('is-open');
    lenis.scrollTo(el, { offset: -60, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  }));
  $$('.section[id]').forEach(sec => ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => { if (s.isActive) $$('.nav__links a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + sec.id)); } }));
  document.addEventListener('modal:open', () => lenis.stop());
  document.addEventListener('modal:close', () => lenis.start());
}

/* ---------- Hero ---------- */
function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.hero__title .line > span', { y: 0, duration: 1.1, stagger: .12 }, 0)
    .to('.hero .reveal', { y: 0, opacity: 1, duration: .9, stagger: .1 }, .35)
    .fromTo('.hero__hint', { opacity: 0 }, { opacity: .8, duration: .6 }, 1.4)
    .fromTo('.scroll-cue', { opacity: 0 }, { opacity: .6, duration: .6 }, 1.5);
  $$('[data-count]').forEach(el => { const n = +el.dataset.count; gsap.fromTo(el, { innerText: 0 }, { innerText: n, duration: 1.6, delay: .6, snap: { innerText: 1 }, ease: 'power2.out' }); });
  $$('.hero .reveal').forEach(el => el.classList.remove('reveal'));
}
function setupHero() {
  if (!isTouch) gsap.to('.hero__content', { y: -80, opacity: .3, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  document.addEventListener('bowl:toss', () => gsap.fromTo('.hero__hint', { scale: 1 }, { scale: 1.15, yoyo: true, repeat: 1, duration: .2 }));
}

/* ---------- Marquee ---------- */
function setupMarquee() {
  const track = $('#marqueeTrack');
  track.innerHTML += track.innerHTML + track.innerHTML;
  const w = track.scrollWidth / 3;
  const tween = gsap.to(track, { x: -w, duration: 22, ease: 'none', repeat: -1 });
  ScrollTrigger.create({ onUpdate: (s) => { tween.timeScale(1 + Math.min(Math.abs(s.getVelocity()) / 600, 3)); } });
  gsap.ticker.add(() => tween.timeScale(gsap.utils.interpolate(tween.timeScale(), 1, .04)));
}

/* ---------- Reveals ---------- */
function splitWords(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement('span'); w.className = 'w'; const i = document.createElement('span'); i.textContent = part; w.appendChild(i); frag.appendChild(w);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1 && !n.classList.contains('w')) walk(n);
    });
  };
  walk(el);
  return $$('.w > span', el);
}
function setupReveals() {
  $$('.h2').forEach((h) => {
    const words = splitWords(h);
    gsap.fromTo(words, { yPercent: 110, rotate: 4 }, { yPercent: 0, rotate: 0, duration: .9, stagger: .05, ease: 'power4.out', scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
  });
  ScrollTrigger.batch('.reveal', {
    start: isTouch ? 'top 94%' : 'top 88%', once: true,
    onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: .9, stagger: .09, ease: 'power3.out', overwrite: true }),
  });
}

/* ---------- 3D poses per section ---------- */
const THEME = { hero: 'dark', dressings: 'dark', builder: 'dark', catering: 'yellow' };
let curTheme = null;
function setTheme(name) {
  if (name === curTheme) return; curTheme = name;
  document.documentElement.dataset.theme = name;
  gsap.to('.bg__dark', { opacity: name === 'dark' ? 1 : 0, duration: .9, ease: 'power2.inOut', overwrite: true });
  gsap.to('.bg__yellow', { opacity: name === 'yellow' ? 1 : 0, duration: .9, ease: 'power2.inOut', overwrite: true });
}
function setupPoses() {
  const enter = (pose) => { scene?.setPose(pose); setTheme(THEME[pose] || 'light'); if (pose === 'story') scene?.setBowl('all-in'); };
  $$('[data-pose]').forEach(sec => {
    ScrollTrigger.create({
      trigger: sec, start: 'top 60%', end: 'bottom 60%',
      onEnter: () => enter(sec.dataset.pose), onEnterBack: () => enter(sec.dataset.pose),
    });
  });
  ScrollTrigger.create({ trigger: '.footer', start: 'top 80%', onEnter: () => enter('visit') });
  setTheme('dark');
  if (!scene) return;
  // exploded view scrubs with scroll through the story section
  ScrollTrigger.create({ trigger: '#story', start: 'top 85%', end: 'top 15%', scrub: true, onUpdate: (s) => scene.setExplodeScroll(s.progress) });
  // on phones the hero bowl slides up out of the way as the hero copy scrolls past
  ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: 'bottom 40%', scrub: true, onUpdate: (s) => scene.setHeroScroll(s.progress, s.scroll()) });
}

/* ---------- Dressings horizontal scroll ---------- */
function setupDressingsScroll() {
  const track = $('#dressingsTrack');
  if (isTouch) {
    // On phones a pinned, scroll-scrubbed strip fights the native scroll. Use a plain swipeable row instead.
    $('#dressings').classList.add('dressings--swipe');
    gsap.fromTo('.cup', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .06, ease: 'power3.out', scrollTrigger: { trigger: '#dressings', start: 'top 75%', once: true } });
    return;
  }
  const getDist = () => Math.max(0, track.scrollWidth - innerWidth + 80);
  gsap.to(track, {
    x: () => -getDist(), ease: 'none',
    scrollTrigger: { trigger: '#dressings', start: 'top top', end: () => '+=' + (getDist() + innerHeight * .4), pin: '#dressingsPin', scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
  });
  // stagger cups a little in 3D as they pass
  $$('.cup').forEach((cup, i) => gsap.fromTo(cup, { y: 60, rotate: i % 2 ? 6 : -6, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, duration: .8, delay: i * .05, scrollTrigger: { trigger: '#dressings', start: 'top 70%' } }));
}

/* ---------- Misc section animations ---------- */
function setupExtras() {
  gsap.fromTo('#scooter', { x: 0 }, { x: -170, ease: 'power2.out', duration: 1.4, scrollTrigger: { trigger: '.notes', start: 'top 75%' } });
  gsap.to('.catering__deco--gym', { y: -60, rotate: 4, ease: 'none', scrollTrigger: { trigger: '#catering', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.to('.catering__deco--eat', { y: -120, rotate: -4, ease: 'none', scrollTrigger: { trigger: '#catering', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.to('.family__img', { y: -20, ease: 'none', scrollTrigger: { trigger: '.family', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.fromTo('.visit__cta img', { rotate: -15, scale: .7 }, { rotate: 0, scale: 1, duration: 1, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.visit__cta', start: 'top 80%' } });
  gsap.fromTo('.story__note img', { rotate: -20, y: 20 }, { rotate: 0, y: 0, duration: 1, ease: 'elastic.out(1,.5)', scrollTrigger: { trigger: '.story__note', start: 'top 85%' } });
  if (!reduced) gsap.to('.marquee', { rotate: -1.2, ease: 'none' });
}

let loaderHidden = false;
const safeHide = () => { if (loaderHidden) return; loaderHidden = true; hideLoader(); };
boot().then(safeHide).catch((err) => { console.error('Boot failed', err); safeHide(); });
setTimeout(safeHide, 8000); // never leave visitors stuck on the preloader
