import beCa2 from '../assets/blog/be-ca-2.jpg';
import hoCaClo from '../assets/khu-clo/ho-ca.png';
import guppy from '../assets/blog/guppy.jpg';

// Đánh giá thật khai báo trên sản phẩm trong products.js:
//   rating: 4.8, reviews: 12,
//   reviewList: [{ name: 'Tên khách', place: 'TP.HCM', date: '02/11/2026', stars: 5, text: '...', verified: true }]

// Đánh giá mẫu, tên và nội dung đều tự đặt, chỉ để demo giao diện. Hiện khi chạy npm run dev,
// hoặc khi build với PUBLIC_DEMO_REVIEWS=1. Bản thật cho khách mua không được bật cờ này.
const showSample = import.meta.env.DEV || import.meta.env.PUBLIC_DEMO_REVIEWS === '1';

const demo = {
  'dung-dich-khu-clo': [4.9, 128],
  'thuc-an-gel-th': [4.8, 86],
  'bot-vi-sinh-bao-tu': [4.7, 54],
  'thuc-an-so-giun': [4.6, 37],
};

const people = [
  { name: 'Minh Tuấn', place: 'TP.HCM', date: '18/10/2026', stars: 5, photo: beCa2 },
  { name: 'Thu Hà', place: 'Đà Nẵng', date: '09/10/2026', stars: 5, photo: guppy },
  { name: 'Quốc Bảo', place: 'Hà Nội', date: '27/09/2026', stars: 4, photo: hoCaClo },
];

const sampleText = {
  'dung-dich-khu-clo': ['Thay nước xong cá vẫn bơi khỏe, chai dùng được lâu.', 'Một nắp là đủ, dễ dùng cho người mới.', 'Giao nhanh, đóng gói kỹ. Sẽ mua lại.'],
  'thuc-an-gel-th': ['Cá con và tép đều ăn, nước không bị đục.', 'Khối gel không tan nhanh, tiện cho cá tầng đáy.', 'Cá lên màu đẹp hơn sau vài tuần.'],
  'bot-vi-sinh-bao-tu': ['Hồ mới set mà nước trong khá nhanh.', 'Chỉ cần dùng một ít là được.', 'Dễ dùng, nước ổn định hơn trước.'],
  'thuc-an-so-giun': ['Cá ăn tốt, dễ cho ăn theo lịch.', 'Hữu ích khi mới mua cá về.', 'Hướng dẫn rõ ràng, dễ làm theo.'],
};

export function ratingOf(p) {
  if (p.reviews) return { rating: p.rating, count: p.reviews, list: p.reviewList ?? [], sample: false };
  if (showSample && demo[p.slug]) {
    const [rating, count] = demo[p.slug];
    const list = people.map((person, i) => ({ ...person, text: sampleText[p.slug][i], verified: false }));
    return { rating, count, list, sample: true };
  }
  return { rating: 0, count: 0, list: [], sample: false };
}
