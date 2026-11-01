// Đánh giá thật khai báo trên sản phẩm trong products.js:
//   rating: 4.8, reviews: 12,
//   reviewList: [{ name: 'Tên khách', place: 'TP.HCM', date: '02/11/2026', stars: 5, text: '...', verified: true }]

// Số mẫu chỉ để xem bố cục khi chạy npm run dev, không bao giờ vào bản build.
const demo = {
  'dung-dich-khu-clo': [4.9, 128],
  'thuc-an-gel-th': [4.8, 86],
  'bot-vi-sinh-bao-tu': [4.7, 54],
  'thuc-an-so-giun': [4.6, 37],
};

export function ratingOf(p) {
  if (p.reviews) return { rating: p.rating, count: p.reviews, list: p.reviewList ?? [], sample: false };
  if (import.meta.env.DEV && demo[p.slug]) {
    const [rating, count] = demo[p.slug];
    const list = [5, 5, 4].map((stars, i) => ({
      name: `Khách hàng mẫu ${i + 1}`,
      place: 'Việt Nam',
      date: '02/11/2026',
      stars,
      text: 'Nội dung đánh giá mẫu để xem bố cục.',
      verified: true,
    }));
    return { rating, count, list, sample: true };
  }
  return { rating: 0, count: 0, list: [], sample: false };
}
