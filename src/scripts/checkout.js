// Dùng chung cho trang đặt hàng thường và trang đặt hàng kiểu TikTok (chia-se/thanh-toan).
// Hai trang khác giao diện nhưng cùng các thuộc tính data-*.
import { addOrder, cartLines, cartTotal, clearCart, grandTotal, shippingFee, loadProfile, moreProducts, saveProfile } from './store.js';

const $ = (s) => document.querySelector(s);
const form = $('form[data-endpoint]');
const money = (n) => n.toLocaleString('vi-VN') + ' VNĐ';

function render() {
  const lines = cartLines();
  if ($('[data-done]').hidden === false) return;
  $('[data-empty]').hidden = lines.length > 0;
  $('[data-checkout]').hidden = lines.length === 0;
  const list = $('[data-lines]');
  list.replaceChildren(
    ...lines.map((l) => {
      const li = document.createElement('li');
      li.innerHTML = '<span class="line-thumb"><img alt="" width="64" height="64"><b></b></span><span class="line-name"><strong></strong><small></small></span><span class="line-price"></span>';
      li.querySelector('img').src = l.image;
      li.querySelector('b').textContent = l.qty;
      li.querySelector('strong').textContent = l.name;
      li.querySelector('small').textContent = `${l.size} · Số lượng ${l.qty}`;
      li.querySelector('.line-price').textContent = money(l.total);
      return li;
    }),
  );

  const more = $('[data-more]') ? moreProducts().slice(0, 2) : [];
  if ($('[data-more]')) $('[data-more]').hidden = !more.length;
  $('[data-more-list]')?.replaceChildren(
    ...more.map(([slug, p]) => {
      const li = document.createElement('li');
      li.innerHTML = '<img alt="" width="64" height="64" loading="lazy"><span class="line-name"><a></a><span class="price"></span></span><button class="btn" type="button" data-quiet>Thêm</button>';
      li.querySelector('img').src = p.image;
      const link = li.querySelector('a');
      link.href = `/san-pham/${slug}/`;
      link.textContent = p.name;
      li.querySelector('.price').textContent = money(p.price);
      const button = li.querySelector('button');
      button.dataset.add = slug;
      button.setAttribute('aria-label', `Thêm ${p.name} vào đơn`);
      return li;
    }),
  );

  const setAll = (sel, text) => document.querySelectorAll(sel).forEach((el) => (el.textContent = text));
  setAll('[data-subtotal]', money(cartTotal()));
  setAll('[data-ship]', money(shippingFee()));
  setAll('[data-total]', money(grandTotal()));
  setAll('[data-count]', lines.reduce((sum, l) => sum + l.qty, 0));
}

function validate() {
  let firstBad;
  form.querySelectorAll('[required]').forEach((f) => {
    const ok = f.value.trim() !== '' && f.checkValidity();
    f.closest('.field').querySelector('em').hidden = ok;
    f.setAttribute('aria-invalid', !ok);
    if (!ok && !firstBad) firstBad = f;
  });
  firstBad?.focus();
  return !firstBad;
}

function orderText(data, lines) {
  return [
    'ĐƠN HÀNG THỦY SINH TH',
    ...lines.map((l) => `- ${l.name} (${l.size}) x ${l.qty}: ${money(l.total)}`),
    `Tạm tính: ${money(cartTotal())}`,
    `Phí giao hàng: ${money(shippingFee())}`,
    `Tổng cộng: ${money(grandTotal())}`,
    `Họ tên: ${data.name}`,
    `SĐT: ${data.phone}`,
    `Địa chỉ: ${data.address}`,
    data.note ? `Ghi chú: ${data.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function finish(message, manualText) {
  $('[data-checkout]').hidden = true;
  $('[data-done]').hidden = false;
  $('[data-done-text]').textContent = message;
  $('[data-manual]').hidden = !manualText;
  if (manualText) $('.order-text').value = manualText;
  window.scrollTo(0, 0);
}

const profile = loadProfile();
if (profile) {
  for (const key of ['name', 'phone', 'address']) form.elements[key].value = profile[key] ?? '';
  form.elements.remember.checked = true;
}

form.addEventListener('input', (e) => {
  const em = e.target.closest('.field')?.querySelector('em');
  if (em && !em.hidden && e.target.checkValidity()) em.hidden = true;
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validate()) return;
  const data = Object.fromEntries(new FormData(form));
  const lines = cartLines();
  const text = orderText(data, lines);
  const endpoint = form.dataset.endpoint;

  if (data.remember) {
    saveProfile({ name: data.name, phone: data.phone, address: data.address });
    addOrder(lines, grandTotal());
  }
  delete data.remember;

  if (!endpoint) {
    const channel = form.dataset.zalo ? `qua Zalo ${form.dataset.zalo}` : 'cho cửa hàng';
    return finish(`Bước cuối: sao chép nội dung đơn dưới đây rồi gửi ${channel} để hoàn tất đặt hàng.`, text);
  }

  const button = form.querySelector('[type=submit]');
  button.disabled = true;
  button.textContent = 'Đang gửi...';
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, items: lines, shipping: shippingFee(), total: grandTotal(), text }),
    });
    if (!res.ok) throw new Error(res.status);
    clearCart();
    finish('Đã nhận đơn hàng. Cảm ơn bạn, cửa hàng sẽ sớm liên hệ để xác nhận.');
  } catch {
    finish('Chưa gửi được đơn. Vui lòng sao chép nội dung dưới đây và gửi cho cửa hàng.', text);
  }
});

$('[data-copy]').addEventListener('click', async (e) => {
  try {
    await navigator.clipboard.writeText($('.order-text').value);
    e.target.textContent = 'Đã sao chép';
  } catch {
    $('.order-text').select();
  }
});

document.addEventListener('cart:change', render);
render();
