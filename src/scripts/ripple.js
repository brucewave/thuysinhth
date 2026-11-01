// Mặt nước gợn trên ảnh banner khi rê chuột, chỉ bật trên máy tính và chỉ vẽ khi có chuột trên ảnh.
const VERTEX = `
attribute vec2 p;
varying vec2 v;
void main() { v = vec2(p.x * .5 + .5, .5 - p.y * .5); gl_Position = vec4(p, 0., 1.); }`;

const FRAGMENT = `
precision mediump float;
varying vec2 v;
uniform sampler2D tex;
uniform vec2 mouse, cover;
uniform float time, strength, aspect;
void main() {
  vec2 ratio = vec2(aspect, 1.);
  vec2 d = (v - mouse) * ratio;
  float r = length(d) + .0001;
  float wave = sin(r * 46. - time * 7.) * exp(-r * 5.) * strength * .018;
  vec2 uv = v + d / r / ratio * wave;
  uv += vec2(sin(v.y * 14. + time * 1.4), cos(v.x * 12. + time * 1.1)) * .0016 * strength;
  gl_FragColor = texture2D(tex, clamp((uv - .5) * cover + .5, 0., 1.));
}`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function createScene(box, img) {
  const canvas = document.createElement('canvas');
  canvas.className = 'ripple';
  canvas.setAttribute('aria-hidden', 'true');
  const gl = canvas.getContext('webgl');
  if (!gl) return null;

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const uniform = (name) => gl.getUniformLocation(program, name);
  const u = { mouse: uniform('mouse'), cover: uniform('cover'), time: uniform('time'), strength: uniform('strength'), aspect: uniform('aspect') };

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

  const scene = { mouse: [0.5, 0.5], target: 0, strength: 0, raf: 0 };

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const w = img.offsetWidth;
    const h = img.offsetHeight;
    Object.assign(canvas.style, { left: `${img.offsetLeft}px`, top: `${img.offsetTop}px`, width: `${w}px`, height: `${h}px` });
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    const boxAspect = w / h;
    const imageAspect = img.naturalWidth / img.naturalHeight;
    gl.uniform1f(u.aspect, boxAspect);
    gl.uniform2f(u.cover, Math.min(boxAspect / imageAspect, 1), Math.min(imageAspect / boxAspect, 1));
  }

  function frame(now) {
    scene.strength += (scene.target - scene.strength) * 0.08;
    gl.uniform2f(u.mouse, scene.mouse[0], scene.mouse[1]);
    gl.uniform1f(u.time, now / 1000);
    gl.uniform1f(u.strength, scene.strength);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (!scene.target && scene.strength < 0.02) {
      canvas.style.opacity = 0;
      scene.raf = 0;
      return;
    }
    scene.raf = requestAnimationFrame(frame);
  }

  scene.wake = () => {
    resize();
    scene.target = 1;
    canvas.style.opacity = 1;
    if (!scene.raf) scene.raf = requestAnimationFrame(frame);
  };
  box.append(canvas);
  return scene;
}

export function startRipple() {
  if (!matchMedia('(hover: hover) and (min-width: 901px)').matches) return;

  document.querySelectorAll('.hero-box').forEach((box) => {
    const img = box.querySelector('.hero-img');
    let scene;

    img.addEventListener('pointermove', (e) => {
      if (!img.complete || !img.naturalWidth) return;
      if (scene === undefined) scene = createScene(box, img);
      if (!scene) return;
      const rect = img.getBoundingClientRect();
      scene.mouse = [(e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height];
      if (!scene.target) scene.wake();
    });
    img.addEventListener('pointerleave', () => {
      if (scene) scene.target = 0;
    });
  });
}
