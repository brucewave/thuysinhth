// Link chia sẻ trỏ tới trang /chia-se/<slug>/ (giao diện điện thoại kiểu TikTok Shop).
export async function shareProduct(button) {
  const url = new URL(`/chia-se/${button.dataset.share}/`, location.origin).href;
  const title = button.dataset.shareTitle;
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
    } catch {
      // Khách bấm hủy bảng chia sẻ.
    }
    return;
  }
  let copied = false;
  try {
    await navigator.clipboard.writeText(url);
    copied = true;
  } catch {
    prompt('Sao chép liên kết này để chia sẻ:', url);
  }
  if (copied) toast('Đã sao chép liên kết chia sẻ');
}

function toast(text) {
  const el = Object.assign(document.createElement('div'), { className: 'share-toast', textContent: text, role: 'status' });
  document.body.append(el);
  setTimeout(() => el.remove(), 2200);
}
