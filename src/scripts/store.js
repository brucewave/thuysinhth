const KEY = 'thuysinhth-cart';
const catalog = JSON.parse(document.getElementById('catalog').textContent);
const money = (n) => n.toLocaleString('vi-VN') + ' VNĐ';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

let cart = load();

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch {
    // Trình duyệt chặn lưu trữ: giỏ hàng vẫn dùng được cho đến khi tải lại trang.
  }
  render();
  document.dispatchEvent(new CustomEvent('cart:change'));
}

// Giá và tên luôn lấy từ catalog, sản phẩm đã gỡ bán thì tự rơi khỏi giỏ.
export function cartLines() {
  return Object.entries(cart)
    .filter(([slug]) => catalog.products[slug])
    .map(([slug, qty]) => ({ slug, qty, ...catalog.products[slug], total: catalog.products[slug].price * qty }));
}

export const cartTotal = () => cartLines().reduce((sum, l) => sum + l.total, 0);

export function clearCart() {
  cart = {};
  save();
}

function setQty(slug, qty) {
  if (qty > 0) cart[slug] = qty;
  else delete cart[slug];
  save();
}

const dialog = document.getElementById('cart');

function render() {
  const lines = cartLines();
  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const badge = document.querySelector('.cart-count');
  badge.textContent = count;
  badge.hidden = !count;
  document.querySelector('[data-open-cart]').setAttribute('aria-label', `Mở giỏ hàng, ${count} sản phẩm`);

  document.querySelector('.cart-items').innerHTML = lines.length
    ? lines
        .map(
          (l) => `<li class="cart-item">
            <img src="${l.image}" alt="" width="72" height="72">
            <div>
              <a href="/san-pham/${l.slug}/">${esc(l.name)}</a>
              <div class="price">${money(l.price)}</div>
              <div class="qty">
                <button type="button" data-step="-1" data-slug="${l.slug}" aria-label="Giảm số lượng ${esc(l.name)}">−</button>
                <output>${l.qty}</output>
                <button type="button" data-step="1" data-slug="${l.slug}" aria-label="Tăng số lượng ${esc(l.name)}">+</button>
              </div>
            </div>
            <button type="button" class="remove" data-remove="${l.slug}">Xóa</button>
          </li>`,
        )
        .join('')
    : '<li class="cart-empty">Giỏ hàng đang trống.</li>';

  document.querySelector('.cart-foot').hidden = !lines.length;
  document.querySelector('[data-cart-total]').textContent = money(cartTotal());
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('button, [data-open-cart]');
  if (e.target === dialog) return dialog.close();
  if (!t) return;
  if (t.matches('[data-open-cart]')) dialog.showModal();
  if (t.matches('[data-close-cart]')) dialog.close();
  if (t.dataset.remove) setQty(t.dataset.remove, 0);
  if (t.dataset.step) setQty(t.dataset.slug, (cart[t.dataset.slug] || 0) + Number(t.dataset.step));
  if (t.dataset.add) {
    const input = document.querySelector('[data-pdp-qty]');
    const qty = t.dataset.pdp ? Number(input.value) : 1;
    setQty(t.dataset.add, (cart[t.dataset.add] || 0) + qty);
    dialog.showModal();
  }
});

// Tìm kiếm trên đầu trang
const search = document.querySelector('.search input');
const results = document.querySelector('.search-results');
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();

function runSearch() {
  const q = norm(search.value.trim());
  results.hidden = !q;
  if (!q) return;
  const hits = catalog.search.filter((i) => norm(i.title).includes(q));
  results.innerHTML = hits.length
    ? hits.map((i) => `<li><a href="${i.url}">${esc(i.title)}<small>${i.type}</small></a></li>`).join('')
    : '<li class="none">Không tìm thấy kết quả.</li>';
}

search.addEventListener('input', runSearch);
search.addEventListener('focus', runSearch);
search.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const first = results.querySelector('a');
  if (first) location.href = first.href;
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search')) results.hidden = true;
  const shop = document.querySelector('.site-nav details');
  if (!e.target.closest('.site-nav details')) shop.open = false;
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') results.hidden = true;
});

const menu = document.querySelector('.menu-btn');
menu.addEventListener('click', () => {
  const open = document.querySelector('.site-nav').classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

render();
