import * as THREE from 'three';

/*
 * Photo-layer salad engine v3.
 * Real photographs of the Circle Heart bowls and ingredients placed as planes in 3D space.
 * Features: ingredient burst, exploded layers with labels, giant type behind the product,
 * spotlight + drifting particles for cinematic sections, live builder stacking, bowl switching.
 */

const rnd = (a, b) => a + Math.random() * (b - a);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (v) => { v = clamp01(v); return v * v * (3 - 2 * v); };
const backOut = (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const expo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const POSES = {
  hero:      { fx: 0.22,  fy: -0.02, scale: 1.0,  explode: 0, spread: 1.0, speed: 0.10, ofx: 0.22, ofy: -0.02, formation: 'orbit', interactive: true, dark: true, text: 'hero', m: { fx: 0, fy: 0.2, scale: 0.58 } },
  story:     { fx: 0.26,  fy: -0.22, scale: 0.7,  explode: 1, spread: 1.3, speed: 0.06, ofx: 0.26, ofy: 0.0,  formation: 'orbit', labels: true, interactive: true, m: { fx: 0, fy: 0, scale: 0.5, ofx: 0, ofy: 0, spread: 1.0 } },
  menu:      { fx: 0.45,  fy: -0.34, scale: 0.55, explode: 0, spread: 2.4, speed: 0.04, ofx: 0,    ofy: 0,    formation: 'orbit', m: { fx: 0.48, fy: -0.44, scale: 0.35, ofx: 0, ofy: 0 } },
  dressings: { fx: -0.36, fy: 0.22,  scale: 0.72, explode: 0, spread: 1.3, speed: 0.08, ofx: -0.3, ofy: 0.1,  formation: 'orbit', dark: true, text: 'dressings', m: { fx: -0.38, fy: 0.32, scale: 0.42 } },
  builder:   { fx: 0.25,  fy: 0.14,  scale: 0.84, explode: 0, spread: 1.0, speed: 0.10, ofx: 0.25, ofy: 0.1,  formation: 'orbit', interactive: true, dark: true, text: 'builder', m: { fx: 0.36, fy: 0.36, scale: 0.42 } },
  catering:  { fx: -0.43, fy: 0.30,  scale: 0.42, explode: 0, spread: 2.0, speed: 0.04, ofx: 0,    ofy: 0,    formation: 'orbit', m: { fx: -0.44, fy: 0.4, scale: 0.3, ofx: 0, ofy: 0 } },
  visit:     { fx: 0,     fy: -0.38, scale: 0.5,  explode: 0, spread: 1.0, speed: 0.05, ofx: 0,    ofy: 0.05, formation: 'heart', m: { fx: 0, fy: -0.42, scale: 0.36, ofx: 0, ofy: 0.05 } },
};

export const BOWLS = {
  'all-in': { sprite: 'bowl-all-in', w: 2.5 },
  'supreme': { sprite: 'bowl-supreme', w: 2.3 },
  'big-omega': { sprite: 'bowl-big-omega', w: 2.4 },
  'sawadee': { sprite: 'bowl-sawadee', w: 2.4 },
  'baby-o': { sprite: 'bowl-baby-o', w: 2.4 },
  'crunchy': { sprite: 'bowl-crunchy', w: 2.3 },
};

const LAYERS = [
  ['lettuce', 'Mix greens', 1.5], ['carrot2', 'Carrot', 0.8], ['corn', 'Sweet corn', 0.8], ['edamame', 'Edamame', 0.85],
  ['cabbage', 'Red cabbage', 0.9], ['cucumber', 'Cucumber', 0.75], ['beef', 'Smoked beef', 0.8], ['egg', 'Egg', 0.6], ['dr-caesar', 'House dressing', 0.5],
];
const ORBIT = [
  ['tomato3', 0.62], ['cucumber2', 0.55], ['egg2', 0.46], ['lettuce3', 0.7], ['corn', 0.5], ['edamame2', 0.5], ['cashew', 0.55], ['almond', 0.5],
  ['avocado2', 0.5], ['shrimp', 0.55], ['prop-apple', 0.42], ['cup-a', 0.5], ['mushroom2', 0.42], ['crouton', 0.5], ['pickles', 0.45], ['grapes', 0.42],
  ['tomato', 0.4], ['cup-b', 0.48], ['carrot2', 0.5], ['potato', 0.48], ['salmon', 0.7], ['noodle', 0.5], ['prop-juice', 0.4], ['cabbage', 0.5],
  ['chicken', 0.42], ['beef', 0.45], ['egg', 0.45], ['cup-d', 0.46],
];
const MEAT_SPRITE = { chicken: 'chicken', shilin: 'shilin', beef: 'beef', patty: 'patty', tuna: 'tuna', shrimp: 'shrimp', salmon: 'salmon', edamame: 'edamame' };
const EXTRA_SPRITE = {
  egg: ['egg2', -0.62, 0.02, 0.5], cheese: ['crouton', 0.52, 0.5, 0.45], corn: ['corn', 0.58, 0.1, 0.5], edamame: ['edamame2', -0.22, 0.58, 0.5],
  avocado: ['avocado2', 0.62, -0.38, 0.42], mushroom: ['mushroom2', -0.66, -0.34, 0.45], tomato: ['tomato3', 0.08, -0.56, 0.6], almond: ['almond', 0.42, 0.58, 0.45],
  cashew: ['cashew', -0.58, 0.48, 0.5], shirataki: ['noodle', -0.05, 0.2, 0.55],
};
const TEXTS = { hero: 'FRESH', dressings: 'POUR IT', builder: 'YOURS' };
const CUT = (n) => `/images/cut/${n}.webp`;

export class SaladScene {
  constructor(canvas, labelRoot) {
    this.canvas = canvas; this.labelRoot = labelRoot;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.isMobile = window.innerWidth <= 1024;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isMobile ? 1.5 : 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace; this.renderer.toneMapping = THREE.NoToneMapping;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50); this.camera.position.set(0, 0, 8);
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2(); this.mouseSmooth = new THREE.Vector2();
    this.scrollVel = 0; this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.target = { ...POSES.hero }; this.poseName = 'hero';
    this.cur = { x: 0, y: -1.2, scale: 0.001, explode: 0, spread: 1, ox: 0, oy: 0, heart: 0, labels: 0, builder: 0, dress: 0, dark: 0 };
    this.dragRot = 0; this.dragVel = 0; this.dragging = false; this.bounce = 0; this.burst = 0; this.explodeScroll = 0; this.explodeLock = false;
    this.style = 'bowl'; this.styleT = 1; this.pops = []; this.drips = []; this.visible = true; this.sprites = [];
    this.loader = new THREE.TextureLoader(); this.texCache = new Map(); this.pending = [];
    this.shadowTex = this.makeShadowTexture(); this.poolTex = this.makePoolTexture(); this.glowTex = this.makeGlowTexture(); this.dotTex = this.makeDotTexture();
    this.build();
    this.resize();
    this.bindEvents();
    this.ready = Promise.all(this.pending).then(() => (document.fonts?.ready || Promise.resolve())).then(() => { this.buildTexts(); return this; });
    this.renderer.setAnimationLoop(() => this.tick());
  }

  /* ---------- textures ---------- */
  tex(name) {
    if (this.texCache.has(name)) return this.texCache.get(name);
    const entry = { tex: null, aspect: 1, promise: null };
    entry.promise = new Promise((res) => {
      this.loader.load(CUT(name), (t) => {
        t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
        entry.tex = t; entry.aspect = t.image.width / t.image.height; res(entry);
      }, undefined, () => { console.warn('missing cutout', name); res(entry); });
    });
    this.texCache.set(name, entry); this.pending.push(entry.promise);
    return entry;
  }
  sprite(name, width, { shadow = 0.32, shadowDrop = 0.12 } = {}) {
    const g = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, toneMapped: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat); mesh.visible = false; g.add(mesh);
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false, opacity: shadow, color: 0x0d150d }));
    sh.position.z = -0.03; sh.visible = false; g.add(sh);
    g.userData = { mesh, sh, width, name, shadowDrop, shadow };
    this.tex(name).promise.then((e) => {
      if (!e.tex) return;
      mat.map = e.tex; mat.needsUpdate = true;
      const h = width / e.aspect; mesh.scale.set(width, h, 1); mesh.visible = true;
      sh.scale.set(width * 1.05, h * 0.5, 1); sh.position.y = -h * 0.42 - shadowDrop; sh.visible = true; g.userData.h = h;
    });
    this.sprites.push(g);
    return g;
  }
  canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
  makeShadowTexture() {
    return this.canvasTex(256, 128, (x) => { const gr = x.createRadialGradient(128, 64, 8, 128, 64, 120); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.55, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.save(); x.scale(1, 0.5); x.translate(0, 64); x.fillStyle = gr; x.fillRect(0, 0, 256, 256); x.restore(); });
  }
  makeGlowTexture() {
    return this.canvasTex(512, 512, (x) => { const gr = x.createRadialGradient(256, 256, 10, 256, 256, 256); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 512, 512); });
  }
  makeDotTexture() {
    return this.canvasTex(64, 64, (x) => { const gr = x.createRadialGradient(32, 32, 2, 32, 32, 30); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); });
  }
  makePoolTexture() {
    return this.canvasTex(256, 256, (x) => {
      x.beginPath();
      for (let i = 0; i <= 40; i++) { const a = (i / 40) * Math.PI * 2; const r = 95 + Math.sin(a * 3) * 10 + Math.cos(a * 5) * 8; const px = 128 + Math.cos(a) * r, py = 128 + Math.sin(a) * r * 0.75; i ? x.lineTo(px, py) : x.moveTo(px, py); }
      x.closePath(); x.fillStyle = 'rgba(255,255,255,0.92)'; x.fill();
      const hl = x.createRadialGradient(100, 95, 2, 100, 95, 60); hl.addColorStop(0, 'rgba(255,255,255,.55)'); hl.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = hl; x.fill();
    });
  }
  textSprite(text, { width = 4, color = '#fff6e5', opacity = 0.16, font = '400 320px Anton, Impact, sans-serif' } = {}) {
    const c = document.createElement('canvas'); const x = c.getContext('2d');
    x.font = font; const m = x.measureText(text); const tw = Math.ceil(m.width) + 60; const th = 400;
    c.width = tw; c.height = th; const ctx = c.getContext('2d');
    ctx.font = font; ctx.textBaseline = 'middle'; ctx.textAlign = 'center'; ctx.fillStyle = color; ctx.fillText(text, tw / 2, th / 2 + 10);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width * th / tw), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity, toneMapped: false }));
    mesh.userData.baseOpacity = opacity;
    return mesh;
  }

  /* ---------- scene graph ---------- */
  build() {
    const root = new THREE.Group(); this.root = root; this.scene.add(root);
    this.spot = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 6.5), new THREE.MeshBasicMaterial({ map: this.glowTex, transparent: true, depthWrite: false, opacity: 0, color: 0xcfe9a8, blending: THREE.AdditiveBlending }));
    this.spot.position.z = -1.6; root.add(this.spot);
    this.bowlGroup = new THREE.Group(); root.add(this.bowlGroup);
    this.bowlSprites = {}; this.bowlKey = 'all-in';
    this.bowl = this.getBowl('all-in'); this.bowl.scale.setScalar(1); this.bowl.visible = true;
    this.wrap = this.sprite('wrap2', 2.1, { shadow: 0.4 }); this.wrap.scale.setScalar(0.001); this.wrap.visible = false; root.add(this.wrap);
    this.layers = LAYERS.map(([name, label, w], i) => {
      const s = this.sprite(name, w, { shadow: 0.28 }); root.add(s);
      const el = document.createElement('div'); el.className = 'lbl ' + (i % 2 ? 'lbl--l' : 'lbl--r'); el.innerHTML = `<i></i><span>${label}</span>`; this.labelRoot?.appendChild(el);
      return { s, i, el, side: i % 2 ? -1 : 1, w, tilt: rnd(-0.08, 0.08), phase: rnd(0, 6) };
    });
    this.builderGroup = new THREE.Group(); root.add(this.builderGroup); this.builderGroup.scale.setScalar(0.001);
    this.dressGroup = new THREE.Group(); root.add(this.dressGroup); this.dressGroup.scale.setScalar(0.001);
    this.meatGroup = new THREE.Group(); this.meatGroup.position.z = 0.3; this.builderGroup.add(this.meatGroup);
    this.extrasGroup = new THREE.Group(); this.extrasGroup.position.z = 0.36; this.builderGroup.add(this.extrasGroup); this.extras = new Map();
    this.cupGroup = new THREE.Group(); this.cupGroup.position.set(0.95, 0.95, 0.45); this.dressGroup.add(this.cupGroup); this.cupGroup.scale.setScalar(0.001);
    this.poolMat = new THREE.MeshBasicMaterial({ map: this.poolTex, transparent: true, depthWrite: false, opacity: 0.72, color: 0x8c2a2f });
    this.pool = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.7), this.poolMat); this.pool.position.set(0.05, 0.28, 0.33); this.pool.scale.setScalar(0.001); this.dressGroup.add(this.pool);
    this.dripMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0x8c2a2f, opacity: 0.9 }); this.dripGeo = new THREE.CircleGeometry(0.035, 12);
    this.orbit = new THREE.Group(); this.scene.add(this.orbit);
    const N = this.isMobile ? 12 : ORBIT.length;
    this.orbiters = ORBIT.slice(0, N).map(([name, w], i) => {
      const s = this.sprite(name, w, { shadow: 0.18, shadowDrop: 0.05 }); this.orbit.add(s); s.scale.setScalar(0.78);
      return { s, a: (i / N) * Math.PI * 2 + rnd(-0.2, 0.2), r: rnd(1.7, 2.7), y: rnd(-1.3, 1.3), z: rnd(-2.6, -0.5), phase: rnd(0, 6), spin: rnd(-0.25, 0.25), ht: i / N, dir: i % 2 ? 1 : -1 };
    });
    const P = this.isMobile ? 60 : 140; const pos = new Float32Array(P * 3); this.pVel = new Float32Array(P);
    for (let i = 0; i < P; i++) { pos[i * 3] = rnd(-7, 7); pos[i * 3 + 1] = rnd(-4.5, 4.5); pos[i * 3 + 2] = rnd(-3, 1.5); this.pVel[i] = rnd(0.05, 0.2); }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.pMat = new THREE.PointsMaterial({ map: this.dotTex, size: 0.09, transparent: true, depthWrite: false, opacity: 0.0, color: 0xfff1c9, sizeAttenuation: true });
    this.particles = new THREE.Points(pg, this.pMat); this.scene.add(this.particles);
  }
  getBowl(key) {
    if (this.bowlSprites[key]) return this.bowlSprites[key];
    const def = BOWLS[key] || BOWLS['all-in'];
    const s = this.sprite(def.sprite, def.w, { shadow: 0.42, shadowDrop: 0.05 }); s.scale.setScalar(0.001); s.visible = false; this.bowlGroup.add(s);
    this.bowlSprites[key] = s; return s;
  }
  buildTexts() {
    this.texts = {};
    for (const [k, t] of Object.entries(TEXTS)) {
      const m = this.textSprite(t, { width: k === 'hero' ? 5.2 : 4.4 }); m.position.z = -1.2; m.material.opacity = 0; this.root.add(m); this.texts[k] = m;
    }
  }

  /* ---------- events ---------- */
  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('pointermove', (e) => {
      this.mouse.set((e.clientX / this.vw) * 2 - 1, -(e.clientY / this.vh) * 2 + 1);
      if (this.dragging) { const dx = e.clientX - this.lastX; this.dragVel = dx * 0.004; this.dragRot = THREE.MathUtils.clamp(this.dragRot + this.dragVel, -0.6, 0.6); this.lastX = e.clientX; }
      else this.hoverCheck();
    });
    this.canvas.addEventListener('pointerdown', (e) => { if (!this.hit) return; this.dragging = true; this.lastX = e.clientX; this.downT = performance.now(); this.canvas.setPointerCapture(e.pointerId); });
    const up = () => { if (!this.dragging) return; this.dragging = false; if (performance.now() - this.downT < 250 && Math.abs(this.dragVel) < 0.01) this.click(); };
    this.canvas.addEventListener('pointerup', up); this.canvas.addEventListener('pointercancel', up);
    document.addEventListener('visibilitychange', () => { this.visible = !document.hidden; });
    this.raycaster = new THREE.Raycaster();
  }
  hoverCheck() {
    if (!this.target.interactive) return this.setHit(false);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const m = (this.style === 'bowl' ? this.bowl : this.wrap).userData.mesh;
    this.setHit(m.visible && this.raycaster.intersectObject(m, false).length > 0);
  }
  setHit(h) {
    if (h === this.hit) return; this.hit = h;
    this.canvas.classList.toggle('is-interactive', h); this.canvas.style.cursor = h ? 'grab' : '';
    document.dispatchEvent(new CustomEvent('bowl:hover', { detail: h }));
  }
  click() {
    if (this.poseName === 'story') { this.explodeLock = !this.explodeLock; document.dispatchEvent(new CustomEvent('bowl:explode', { detail: this.explodeLock })); }
    else this.toss();
  }
  resize() {
    const w = this.canvas.clientWidth || innerWidth, h = this.canvas.clientHeight || innerHeight;
    if (w === this.lastW && h === this.lastH) return;
    this.lastW = w; this.lastH = h; this.vw = w; this.vh = h;
    this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.isMobile = w <= 1024;
    this.viewH = 2 * this.camera.position.z * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)); this.viewW = this.viewH * this.camera.aspect;
  }

  /* ---------- public API ---------- */
  setPose(name) { this.target = { ...(POSES[name] || POSES.hero) }; this.poseName = name; if (!this.target.interactive) this.setHit(false); if (name !== 'story') this.explodeLock = false; }
  setExplodeScroll(p) { this.explodeScroll = p; }
  setHeroScroll(p, px) { this.heroScroll = p; this.heroPx = px || 0; }
  setStage(el) { this.stageEl = el; }
  setScrollVelocity(v) { this.scrollVel = v; }
  intro() { this.cur.scale = 0.001; this.cur.y = -1.4; this.burst = 1; }
  toss() { this.bounce = 1; this.burst = 1; document.dispatchEvent(new CustomEvent('bowl:toss')); }
  pop(obj, to, done) { this.pops.push({ obj, from: obj.scale.x, to, t: 0, done }); }
  setBowl(key) {
    if (!BOWLS[key] || key === this.bowlKey) return;
    const old = this.bowl; const next = this.getBowl(key);
    this.pops = this.pops.filter((p) => p.obj !== old && p.obj !== next);
    this.pop(old, 0, () => { if (this.bowl !== old) old.visible = false; });
    next.visible = true; next.scale.setScalar(0.001); this.bowl = next; this.bowlKey = key; this.pop(next, 1);
    this.bounce = Math.max(this.bounce, 0.5); this.burst = Math.max(this.burst, 0.7);
    document.dispatchEvent(new CustomEvent('bowl:change', { detail: key }));
  }
  setMeat(meat) {
    this.meatGroup.children.slice().forEach((c) => this.pop(c, 0, () => this.meatGroup.remove(c)));
    if (!meat) return;
    const s = this.sprite(MEAT_SPRITE[meat.id] || 'chicken', meat.id === 'salmon' ? 1.15 : meat.id === 'patty' ? 1.0 : 0.9, { shadow: 0.3 });
    s.position.set(0.02, 0.32, 0); s.rotation.z = rnd(-0.12, 0.12); s.scale.setScalar(0.001); this.meatGroup.add(s); this.pop(s, 1);
    this.bounce = Math.max(this.bounce, 0.45);
  }
  toggleExtra(id, on) {
    if (on && !this.extras.has(id)) {
      const [name, x, y, w] = EXTRA_SPRITE[id] || ['corn', 0, 0, 0.5];
      const s = this.sprite(name, w, { shadow: 0.25 }); s.position.set(x, y, 0.02 * this.extras.size); s.rotation.z = rnd(-0.2, 0.2); s.scale.setScalar(0.001);
      this.extrasGroup.add(s); this.extras.set(id, s); this.pop(s, 1); this.bounce = Math.max(this.bounce, 0.3);
    } else if (!on && this.extras.has(id)) { const s = this.extras.get(id); this.extras.delete(id); this.pop(s, 0, () => this.extrasGroup.remove(s)); }
  }
  setDressing(d, { silent = false } = {}) {
    const color = new THREE.Color(d.hex); this.poolMat.color.copy(color); this.dripMat.color.copy(color);
    this.cupGroup.children.slice().forEach((c) => this.pop(c, 0, () => this.cupGroup.remove(c)));
    const cup = this.sprite('dr-' + (d.img ? d.img.replace('dressing-', '') : d.id), 0.6, { shadow: 0.2, shadowDrop: 0.1 }); cup.rotation.z = -0.55; cup.scale.setScalar(0.001); this.cupGroup.add(cup); this.pop(cup, 1);
    this.cupGroup.scale.setScalar(1);
    if (silent) { this.pool.scale.setScalar(1); return; }
    this.pool.scale.setScalar(0.001); this.pourT = 0; this.pouring = true;
    for (let i = 0; i < 7; i++) { const m = new THREE.Mesh(this.dripGeo, this.dripMat); m.position.set(0.72, 0.75, 0.42); m.scale.setScalar(rnd(0.6, 1.3)); this.dressGroup.add(m); this.drips.push({ m, t: -i * 0.07, vx: rnd(-0.25, -0.05), vy: rnd(-0.1, 0.2) }); }
  }
  setStyle(style) { if (style === this.style) return; this.style = style; this.styleT = 0; }

  /* ---------- frame ---------- */
  tick() {
    if (!this.visible) return;
    const dt = Math.min(this.clock.getDelta(), 0.05), t = this.clock.elapsedTime;
    const k = 1 - Math.exp(-dt * 2.8);
    const c = this.cur, T0 = this.target, mob = this.isMobile, hasM = mob && T0.m;
    const T = hasM ? { ...T0, ...T0.m, ofx: T0.m.ofx ?? T0.m.fx, ofy: T0.m.ofy ?? T0.m.fy } : T0;
    const fxScale = hasM ? 1 : (mob ? 0.55 : 1), sScale = hasM ? 1 : (mob ? 0.72 : 1);

    const hp = (mob && this.poseName === 'hero') ? (this.heroScroll || 0) : 0;
    // phones: the canvas is fixed, so lock the bowl to the page scroll while in the hero so it leaves with the hero copy
    const heroLift = hp > 0 ? (this.heroPx / this.vh) * this.viewH : 0;
    // phones: anchor the exploded bowl to the story stage element so it scrolls with the page,
    // and open it as the stage rises into view
    let stageY = null, stageEx = null;
    if (mob && this.poseName === 'story' && this.stageEl) {
      const r = this.stageEl.getBoundingClientRect();
      const cy = r.top + r.height * 0.6;
      stageY = ((this.vh / 2 - cy) / this.vh) * this.viewH;
      stageEx = clamp01((this.vh * 0.95 - r.top) / (this.vh * 0.5));
    }
    const kk = stageY !== null ? 1 - Math.exp(-dt * 12) : k;
    c.x = lerp(c.x, stageY !== null ? 0 : T.fx * this.viewW * fxScale, kk); c.y = lerp(c.y, stageY !== null ? stageY : T.fy * this.viewH + heroLift, kk);
    c.scale = lerp(c.scale, T.scale * sScale * (1 - 0.2 * hp), k);
    const exTarget = this.poseName === 'story' ? (this.explodeLock ? 1 : (stageEx !== null ? stageEx : T.explode * this.explodeScroll)) : T.explode;
    c.explode = lerp(c.explode, exTarget, 1 - Math.exp(-dt * 3.5));
    c.spread = lerp(c.spread, T.spread * (mob ? 0.75 : 1), k);
    c.ox = lerp(c.ox, stageY !== null ? 0 : T.ofx * this.viewW * fxScale, kk); c.oy = lerp(c.oy, stageY !== null ? stageY : T.ofy * this.viewH + heroLift, kk);
    c.heart = lerp(c.heart, T.formation === 'heart' ? 1 : 0, k * 0.8);
    c.labels = lerp(c.labels, T.labels ? 1 : 0, k);
    c.builder = lerp(c.builder, this.poseName === 'builder' ? 1 : 0, k);
    c.dress = lerp(c.dress, (this.poseName === 'builder' || this.poseName === 'dressings') ? 1 : 0, k);
    c.dark = lerp(c.dark, T.dark ? 1 : 0, 1 - Math.exp(-dt * 2));
    this.builderGroup.scale.setScalar(Math.max(0.001, backOut(clamp01(c.builder))));
    this.dressGroup.scale.setScalar(Math.max(0.001, backOut(clamp01(c.dress))));

    // cinematic extras: spotlight, particles, giant type, softer shadows on dark
    this.spot.material.opacity = 0.55 * c.dark; this.spot.scale.setScalar(1 + Math.sin(t * 0.6) * 0.04);
    this.pMat.opacity = 0.12 + 0.55 * c.dark;
    const pp = this.particles.geometry.attributes.position;
    for (let i = 0; i < pp.count; i++) { let y = pp.getY(i) + this.pVel[i] * dt; let x = pp.getX(i) + Math.sin(t * 0.5 + i) * 0.002; if (y > 4.6) { y = -4.6; x = rnd(-7, 7); } pp.setY(i, y); pp.setX(i, x); }
    pp.needsUpdate = true;
    if (this.texts) for (const [kname, m] of Object.entries(this.texts)) { const want = T.text === kname ? m.userData.baseOpacity : 0; m.material.opacity = lerp(m.material.opacity, want, k); m.position.x = -this.mouseSmooth.x * 0.25; m.position.y = -0.1 - this.mouseSmooth.y * 0.15; m.visible = m.material.opacity > 0.005; }
    for (const s of this.sprites) { const u = s.userData; if (u.sh) u.sh.material.opacity = u.shadow * (1 - 0.55 * c.dark); }

    this.mouseSmooth.lerp(this.mouse, 1 - Math.exp(-dt * 4));
    const mx = this.mouseSmooth.x, my = this.mouseSmooth.y;
    this.camera.position.x = mx * 0.45; this.camera.position.y = my * 0.3; this.camera.lookAt(0, 0, 0);

    if (!this.dragging) { this.dragRot = lerp(this.dragRot, 0, 1 - Math.exp(-dt * 2)); this.dragVel *= 0.9; }
    this.scrollVel *= 0.9;
    this.bounce = Math.max(0, this.bounce - dt * 1.2);
    this.burst = Math.max(0, this.burst - dt * 0.75);
    const bounceY = Math.sin(this.bounce * Math.PI) * 0.6;
    const float = this.reduced ? 0 : Math.sin(t * 0.8) * 0.06;

    this.root.position.set(c.x, c.y + float, 0);
    this.root.scale.setScalar(c.scale);
    this.root.rotation.set(-my * 0.08, mx * 0.12 + this.dragRot, Math.sin(t * 0.5) * 0.02 - this.scrollVel * 0.00015);
    this.bowl.position.y = bounceY * 0.15; this.wrap.position.y = bounceY * 0.15;
    const ex = Math.max(c.explode, bounceY * 0.55);

    const n = this.layers.length;
    for (const L of this.layers) {
      const e = smooth((ex * 1.35) - L.i * (0.35 / n));
      const yUp = 0.42 + L.i * (mob ? 0.3 : 0.27), xOff = L.side * (mob ? 0.06 : 0.12) * (L.i % 3 === 0 ? 1 : 0.5);
      L.s.position.set(lerp(0, xOff, e), lerp(0.15, yUp, e) + Math.sin(t * 0.9 + L.phase) * 0.03 * e, lerp(0.02 + L.i * 0.01, 0.12 + L.i * 0.09, e));
      L.s.rotation.z = L.tilt * e; L.s.scale.setScalar(Math.max(0.001, e * (0.85 + 0.15 * e))); L.s.visible = e > 0.001;
      if (L.el) {
        const show = c.labels * e * (c.explode > 0.2 ? 1 : 0);
        if (show > 0.02) {
          const p = new THREE.Vector3(L.s.position.x + L.side * (L.w * 0.5 + 0.18), L.s.position.y, L.s.position.z); this.root.localToWorld(p); p.project(this.camera);
          const sx = (p.x * 0.5 + 0.5) * this.vw, sy = (-p.y * 0.5 + 0.5) * this.vh;
          L.el.style.opacity = show; L.el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) translate(${L.side > 0 ? '0' : '-100%'}, -50%)`;
        } else L.el.style.opacity = 0;
      }
    }

    if (this.styleT < 1) {
      this.styleT = Math.min(1, this.styleT + dt * 2);
      const toWrap = this.style === 'wrap', inObj = toWrap ? this.wrap : this.bowl, outObj = toWrap ? this.bowl : this.wrap;
      if (this.styleT < 0.5) { const e = 1 - this.styleT * 2; outObj.visible = true; outObj.scale.setScalar(Math.max(0.001, e)); inObj.visible = false; }
      else { const e = (this.styleT - 0.5) * 2; outObj.visible = false; outObj.scale.setScalar(0.001); inObj.visible = true; inObj.scale.setScalar(Math.max(0.001, backOut(e))); }
    }

    if (this.pouring) { this.pourT += dt; const s = this.pourT < 0.25 ? 0.001 : Math.min(1, (this.pourT - 0.25) / 0.6); this.pool.scale.setScalar(Math.max(0.001, backOut(s))); if (this.pourT > 1.2) this.pouring = false; }
    this.cupGroup.rotation.z = Math.sin(t * 2.2) * 0.04 * (this.pouring ? 1 : 0);
    this.drips = this.drips.filter((d) => { d.t += dt; if (d.t < 0) return true; const g = d.t; d.m.position.x = 0.72 + d.vx * g * 2.2; d.m.position.y = 0.75 + d.vy * g - 2.6 * g * g; d.m.scale.setScalar(Math.max(0.001, 1 - g * 0.6)); if (d.m.position.y < 0.28) { this.dressGroup.remove(d.m); return false; } return true; });
    this.pops = this.pops.filter((p) => { p.t = Math.min(1, p.t + dt * 2.4); const v = p.to > p.from ? backOut(p.t) * p.to : p.from * (1 - p.t); p.obj.scale.setScalar(Math.max(0.001, v)); if (p.t >= 1) { p.done?.(); return false; } return true; });

    // orbiters: burst out of the bowl, overshoot, settle into orbit (or the heart)
    const bf = expo(1 - this.burst);
    const over = 1 + Math.sin(bf * Math.PI) * 0.3;
    for (const o of this.orbiters) {
      o.a += dt * T.speed * o.dir * (this.reduced ? 0.3 : 1);
      const r = o.r * c.spread;
      const ox = Math.cos(o.a) * r, oz = Math.sin(o.a) * 0.5 * r + o.z, oy = o.y * c.spread * (mob ? 0.42 : 0.75) + Math.sin(t * 0.7 + o.phase) * 0.12;
      const th = o.ht * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(th), 3) * 0.15 * c.spread;
      const hy = (13 * Math.cos(th) - 5 * Math.cos(2 * th) - 2 * Math.cos(3 * th) - Math.cos(4 * th)) * 0.15 * c.spread + 0.2;
      const tx = c.ox + lerp(ox, hx, c.heart), ty = c.oy + lerp(oy, hy, c.heart), tz = lerp(oz, Math.sin(t * 0.7 + o.phase) * 0.2, c.heart);
      const x = c.x + (tx - c.x) * bf * over, y = c.y + (ty - c.y) * bf * over, z = lerp(0.6, tz, bf);
      o.s.position.set(x + mx * 0.25 * (1 + o.z * 0.5), y + my * 0.18 + bounceY * 0.25 * (1 + Math.sin(o.phase)), z);
      o.s.rotation.z = Math.sin(t * 0.4 + o.phase) * 0.18 + o.spin * t * 0.2 + (1 - bf) * 2.5 * o.dir;
      o.s.scale.setScalar(Math.max(0.001, 0.78 * (1 + o.z * 0.08) * (0.25 + 0.75 * bf) * (1 - 0.95 * hp)));
    }

    this.renderer.render(this.scene, this.camera);
  }
}
