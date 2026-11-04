// Chỉ được tải khi khách không bật "giảm chuyển động" (xem Base.astro).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { startTank } from './aquarium.js';
import { startRipple } from './ripple.js';

gsap.registerPlugin(ScrollTrigger);
// Máy yếu hoặc tab bị giảm khung hình: vẫn chạy theo thời gian thật để nội dung không kẹt ở trạng thái mờ.
gsap.ticker.lagSmoothing(0);

const heroTank = document.querySelector('.hero-slider > .tank');
if (heroTank) startTank(heroTank, { fish: 2 });
startRipple();

document.querySelectorAll('.post-hero-box').forEach((box) => {
  const canvas = document.createElement('canvas');
  canvas.className = 'tank';
  canvas.setAttribute('aria-hidden', 'true');
  box.append(canvas);
  startTank(canvas, { fish: 1 });
});

// Nội dung đã nằm trong màn hình lúc tải trang thì giữ nguyên, tránh nháy.
const revealItems = gsap.utils
  .toArray('.section-head, .product-card, .post-card, .tiktok-grid iframe, .step, .contact-card, .contact-tips, .contact-faq, .review, .side-product')
  .filter((el) => el.getBoundingClientRect().top > innerHeight * 0.92);

gsap.set(revealItems, { opacity: 0, y: 28 });
ScrollTrigger.batch(revealItems, {
  start: 'top 92%',
  once: true,
  interval: 0.1,
  onEnter: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08, clearProps: 'opacity,transform' }),
});

document.addEventListener('hero:slide', (e) => {
  const box = e.detail;
  const parts = box.querySelectorAll('.hero-text > *');
  gsap.killTweensOf(parts);
  gsap.fromTo(parts, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08, clearProps: 'opacity,transform' });
  gsap.fromTo(box.querySelector('.hero-img'), { scale: 1.08 }, { scale: 1, duration: 1.1, ease: 'power2.out', overwrite: true, clearProps: 'transform' });
});

// Sản phẩm bay vào giỏ kèm bong bóng, tới nơi mới mở giỏ. Giỏ ở ngoài màn hình thì bay về góc trên bên phải.
document.addEventListener('cart:fly', (e) => {
  e.preventDefault();
  const { button, image } = e.detail;
  const dialog = document.getElementById('cart');
  const from = button.getBoundingClientRect();
  const cart = document.querySelector('[data-open-cart]').getBoundingClientRect();
  const size = 88;
  const startX = from.left + from.width / 2 - size / 2;
  const startY = from.top + from.height / 2 - size / 2;
  const endX = cart.left + cart.width / 2 - size / 2;
  const endY = Math.max(cart.top + cart.height / 2 - size / 2, -20);

  const ghost = Object.assign(new Image(size, size), { src: image, alt: '', className: 'fly-item' });
  document.body.append(ghost);
  gsap.set(ghost, { x: startX, y: startY });
  const flight = gsap.timeline({
    onComplete() {
      ghost.remove();
      if (!dialog.open) dialog.showModal();
    },
  });
  flight
    .from(ghost, { scale: 0.4, opacity: 0, duration: 0.18, ease: 'back.out(2)' })
    .to(ghost, { x: endX, duration: 0.62, ease: 'power1.inOut' }, 0.14)
    .to(ghost, { y: endY, duration: 0.62, ease: 'back.in(1.4)' }, 0.14)
    .to(ghost, { scale: 0.25, rotation: 20, duration: 0.62, ease: 'power2.in' }, 0.14);

  for (let i = 0; i < 12; i++) {
    const bubble = document.createElement('span');
    bubble.className = 'fly-bubble';
    document.body.append(bubble);
    const d = gsap.utils.random(6, 16);
    gsap.set(bubble, { width: d, height: d, x: startX + size / 2, y: startY + size / 2 });
    gsap.to(bubble, {
      x: `+=${gsap.utils.random(-70, 70)}`,
      y: `-=${gsap.utils.random(60, 170)}`,
      opacity: 0,
      duration: gsap.utils.random(0.6, 1.1),
      delay: i * 0.03,
      ease: 'power1.out',
      onComplete: () => bubble.remove(),
    });
  }
});

document.addEventListener('cart:change', () => {
  gsap.fromTo('.cart-count', { scale: 1.6 }, { scale: 1, duration: 0.45, ease: 'back.out(3)', overwrite: true });
});
