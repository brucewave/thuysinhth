// Bể cá vẽ trên canvas 2D: bong bóng nổi và cá bơi theo chuột. Dừng vẽ khi khung ra khỏi màn hình.
const TAU = Math.PI * 2;
const SEGMENTS = 10;
const FISH_COLORS = ['#fbd028', '#ffffff', '#ffb347'];
const random = (min, max) => min + Math.random() * (max - min);

function makeBubble(w, h, x, y) {
  return {
    x: x ?? random(0, w),
    y: y ?? h + 12,
    r: random(2, 7),
    speed: random(22, 58),
    phase: random(0, TAU),
  };
}

function drawBubble(ctx, b) {
  ctx.beginPath();
  ctx.arc(b.x, b.y, b.r, 0, TAU);
  ctx.fillStyle = 'rgba(255, 255, 255, .1)';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(255, 255, 255, .6)';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.22, 0, TAU);
  ctx.fillStyle = 'rgba(255, 255, 255, .85)';
  ctx.fill();
}

function makeFish(w, h, size, color) {
  const x = random(0, w);
  const y = random(0, h);
  return {
    size,
    color,
    angle: random(0, TAU),
    spine: Array.from({ length: SEGMENTS }, () => ({ x, y })),
    goal: { x: random(0, w), y: random(0, h) },
    wait: 0,
    breath: random(1, 4),
    phase: random(0, TAU),
  };
}

function moveFish(f, dt, t, w, h, pointer, bubbles) {
  const head = f.spine[0];
  f.wait -= dt;
  if (f.wait <= 0 || Math.hypot(f.goal.x - head.x, f.goal.y - head.y) < 30) {
    f.goal = { x: random(w * 0.05, w * 0.95), y: random(h * 0.1, h * 0.9) };
    f.wait = random(3, 7);
  }

  const chasing = pointer.active;
  const target = chasing ? pointer : f.goal;
  const distance = Math.hypot(target.x - head.x, target.y - head.y);
  let turn = Math.atan2(target.y - head.y, target.x - head.x) - f.angle;
  turn = Math.atan2(Math.sin(turn), Math.cos(turn));
  f.angle += Math.max(-1, Math.min(1, turn)) * (chasing ? 3.6 : 1.7) * dt;

  // Tới gần con trỏ thì bơi chậm lại và lượn quanh, không dừng khựng.
  const speed = chasing ? Math.min(190, 45 + distance * 0.9) : 62;
  const heading = f.angle + Math.sin(t * 7 + f.phase) * 0.16;
  head.x += Math.cos(heading) * speed * dt;
  head.y += Math.sin(heading) * speed * dt;

  const gap = f.size * 0.13;
  for (let i = 1; i < SEGMENTS; i++) {
    const prev = f.spine[i - 1];
    const cur = f.spine[i];
    const a = Math.atan2(cur.y - prev.y, cur.x - prev.x);
    cur.x = prev.x + Math.cos(a) * gap;
    cur.y = prev.y + Math.sin(a) * gap;
  }

  f.breath -= dt;
  if (f.breath <= 0) {
    f.breath = random(2, 5);
    bubbles.push({ ...makeBubble(w, h, head.x, head.y), r: random(1.5, 3.5) });
  }
}

function drawFish(ctx, f, t) {
  const n = SEGMENTS;
  const widths = [0.13, 0.17, 0.19, 0.185, 0.17, 0.145, 0.115, 0.085, 0.055, 0.03];
  const left = [];
  const right = [];
  const center = f.spine.map((p, i) => {
    const next = f.spine[Math.min(i + 1, n - 1)];
    const prev = f.spine[Math.max(i - 1, 0)];
    const a = Math.atan2(next.y - prev.y, next.x - prev.x) + Math.PI / 2;
    const sway = (Math.sin(t * 8 + f.phase - i * 0.7) * i * f.size * 0.09) / n;
    return { x: p.x + Math.cos(a) * sway, y: p.y + Math.sin(a) * sway, a };
  });
  center.forEach((p, i) => {
    const half = widths[i] * f.size;
    left.push({ x: p.x + Math.cos(p.a) * half, y: p.y + Math.sin(p.a) * half });
    right.push({ x: p.x - Math.cos(p.a) * half, y: p.y - Math.sin(p.a) * half });
  });

  ctx.lineJoin = 'round';
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#083c78';
  ctx.fillStyle = f.color;

  // Vây đuôi chẻ đôi, đung đưa theo thân.
  const tail = center[n - 1];
  const beforeTail = center[n - 2];
  const dir = Math.atan2(tail.y - beforeTail.y, tail.x - beforeTail.x) + Math.sin(t * 8 + f.phase - n * 0.7) * 0.4;
  const length = f.size * 0.34;
  for (const side of [-1, 1]) {
    const tip = dir + side * 0.48;
    ctx.beginPath();
    ctx.moveTo(tail.x, tail.y);
    ctx.quadraticCurveTo(
      tail.x + Math.cos(dir + side * 0.95) * length * 0.6,
      tail.y + Math.sin(dir + side * 0.95) * length * 0.6,
      tail.x + Math.cos(tip) * length,
      tail.y + Math.sin(tip) * length,
    );
    ctx.quadraticCurveTo(tail.x + Math.cos(dir) * length * 0.55, tail.y + Math.sin(dir) * length * 0.55, tail.x, tail.y);
    ctx.fill();
    ctx.stroke();
  }

  // Vây ngực quạt nhẹ hai bên.
  for (const [point, side] of [[left[2], 1], [right[2], -1]]) {
    const a = center[2].a + (side === 1 ? 0.9 : Math.PI - 0.9) + side * Math.sin(t * 5 + f.phase) * 0.25;
    const fin = f.size * 0.2;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.quadraticCurveTo(point.x + Math.cos(a - side * 0.7) * fin, point.y + Math.sin(a - side * 0.7) * fin, point.x + Math.cos(a) * fin, point.y + Math.sin(a) * fin);
    ctx.quadraticCurveTo(point.x + Math.cos(a + side * 0.5) * fin * 0.4, point.y + Math.sin(a + side * 0.5) * fin * 0.4, point.x, point.y);
    ctx.fill();
    ctx.stroke();
  }

  // Nối các điểm bằng đường cong qua trung điểm để thân cá không bị gãy khúc.
  const outline = [...left, ...right.reverse()];
  ctx.beginPath();
  ctx.moveTo(outline[0].x, outline[0].y);
  for (let i = 1; i < outline.length - 1; i++) {
    const a = outline[i];
    const b = outline[i + 1];
    ctx.quadraticCurveTo(a.x, a.y, (a.x + b.x) / 2, (a.y + b.y) / 2);
  }
  ctx.lineTo(right[n - 1].x, right[n - 1].y);
  const nose = f.spine[0];
  const noseAngle = Math.atan2(center[0].y - center[1].y, center[0].x - center[1].x);
  ctx.quadraticCurveTo(nose.x + Math.cos(noseAngle) * f.size * 0.2, nose.y + Math.sin(noseAngle) * f.size * 0.2, left[0].x, left[0].y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#083c78';
  for (const side of [left[0], outline[outline.length - 1]]) {
    ctx.beginPath();
    ctx.arc(side.x * 0.6 + center[0].x * 0.4, side.y * 0.6 + center[0].y * 0.4, f.size * 0.024, 0, TAU);
    ctx.fill();
  }
}

export function startTank(canvas, { fish = 2 } = {}) {
  const ctx = canvas.getContext('2d');
  const host = canvas.parentElement;
  const pointer = { x: 0, y: 0, active: false };
  let w = 0;
  let h = 0;
  let bubbles = [];
  let school = [];
  let raf = 0;
  let last = 0;
  let visible = false;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!school.length && w) {
      const size = w < 600 ? 72 : 104;
      school = Array.from({ length: fish }, (_, i) => makeFish(w, h, size * random(0.8, 1.1), FISH_COLORS[i % FISH_COLORS.length]));
      // Cho cá bơi trước vài giây để thân duỗi ra, không xuất hiện trong tư thế gập.
      for (const f of school) for (let i = 0; i < 90; i++) moveFish(f, 1 / 30, i / 30, w, h, pointer, []);
      bubbles =Array.from({ length: Math.round(w / 90) }, () => makeBubble(w, h, undefined, random(0, h)));
    }
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000 || 0, 0.05);
    last = now;
    const t = now / 1000;

    if (bubbles.length < w / 90 && Math.random() < dt * 3) bubbles.push(makeBubble(w, h));
    ctx.clearRect(0, 0, w, h);
    for (const f of school) {
      moveFish(f, dt, t, w, h, pointer, bubbles);
      drawFish(ctx, f, t);
    }
    bubbles = bubbles.filter((b) => {
      b.y -= b.speed * dt;
      b.x += Math.sin(t * 1.6 + b.phase) * 14 * dt;
      drawBubble(ctx, b);
      return b.y > -12;
    });
  }

  function sync() {
    const run = visible && !document.hidden;
    if (run && !raf) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    } else if (!run && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  const place = (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
  };
  host.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    place(e);
    pointer.active = true;
  });
  host.addEventListener('pointerleave', () => (pointer.active = false));
  host.addEventListener('pointerdown', (e) => {
    place(e);
    for (let i = 0; i < 10; i++) {
      bubbles.push({ ...makeBubble(w, h, pointer.x + random(-18, 18), pointer.y + random(-18, 18)), speed: random(50, 120) });
    }
  });

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }).observe(canvas);
  document.addEventListener('visibilitychange', sync);
  resize();
}
