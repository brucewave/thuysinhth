// Chỉ được tải khi khách không bật "giảm chuyển động" (xem Base.astro).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { startTank } from './aquarium.js';

gsap.registerPlugin(ScrollTrigger);
// Máy yếu hoặc tab bị giảm khung hình: vẫn chạy theo thời gian thật để nội dung không kẹt ở trạng thái mờ.
gsap.ticker.lagSmoothing(0);

const heroTank = document.querySelector('.hero-slider > .tank');
if (heroTank) startTank(heroTank, { fish: 2 });

document.querySelectorAll('.post-hero-box').forEach((box) => {
  const canvas = document.createElement('canvas');
  canvas.className = 'tank';
  canvas.setAttribute('aria-hidden', 'true');
  box.append(canvas);
  startTank(canvas, { fish: 1 });
});

// Nội dung đã nằm trong màn hình lúc tải trang thì giữ nguyên, tránh nháy.
const revealItems = gsap.utils
  .toArray('.section-head, .product-card, .all-tile, .post-card, .tiktok-grid iframe, .step, .contact-card, .contact-tips, .contact-faq, .review, .side-product')
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

document.addEventListener('cart:change', () => {
  gsap.fromTo('.cart-count', { scale: 1.6 }, { scale: 1, duration: 0.45, ease: 'back.out(3)', overwrite: true });
});
