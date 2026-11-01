// Điền thông tin thật của cửa hàng vào đây. Mục nào để trống sẽ không hiện trên web.
export const site = {
  name: 'Thủy Sinh TH',
  tagline: 'Nuôi cá quá dễ',
  description:
    'Thủy Sinh TH: khử Clo, thức ăn gel, vi sinh bào tử và kiến thức nuôi cá đúng khoa học cho người chơi Việt Nam.',
  phone: '093 524 05 30',
  zalo: '0935240530', // số Zalo nhận đơn, viết liền
  email: '',
  address: 'Hồ Chí Minh, Việt Nam, 7000',
  facebook: '', // link trang Facebook
  tiktok: 'https://www.tiktok.com/@thuysinhth',
  // Dán link video muốn ghim lên trang chủ, ví dụ:
  // 'https://www.tiktok.com/@thuysinhth/video/7300000000000000000'
  tiktokVideos: [
    'https://www.tiktok.com/@thuysinhth/video/7703171413351468308',
    'https://www.tiktok.com/@thuysinhth/video/7702839274059681044',
    'https://www.tiktok.com/@thuysinhth/video/7701963835070090516',
    'https://www.tiktok.com/@thuysinhth/video/7701684676523691285',
  ],
  tiktokStats: '10,5K người theo dõi · 145,4K lượt thích', // số trên TikTok ngày 02/11/2026, cập nhật tay
  // URL nhận đơn dạng POST JSON (Formspree, Google Apps Script...).
  // Để trống thì đơn không được gửi đi: khách chỉ sao chép được nội dung đơn.
  orderEndpoint: '',
};
