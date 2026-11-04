import chaiHop from '../assets/khu-clo/chai-hop.png';
import hoCaClo from '../assets/khu-clo/ho-ca.png';
import rot from '../assets/khu-clo/rot.png';
import lieuLuong from '../assets/khu-clo/lieu-luong.png';
import nhan from '../assets/khu-clo/nhan.jpg';
import goi from '../assets/thuc-an/goi.png';
import khoiGel from '../assets/thuc-an/khoi-gel.png';
import namGoi from '../assets/thuc-an/nam-goi.png';
import caAn from '../assets/thuc-an/ca-an.jpg';
import camRe from '../assets/thuc-an/cam-re.jpg';
import hu from '../assets/vi-sinh/hu.png';
import hoCaVs from '../assets/vi-sinh/ho-ca.png';
import ngonTay from '../assets/vi-sinh/ngon-tay.png';
import viSinhNuoc from '../assets/vi-sinh/vi-sinh-nuoc.jpg';
import biofilm from '../assets/vi-sinh/biofilm.png';
import beCa from '../assets/blog/be-ca-1.jpg';
import bonGoi from '../assets/thuc-an/bon-goi.png';
import xoGiunGoi from '../assets/thuoc/xo-giun-goi.png';
import khangSinhGoi from '../assets/thuoc/khang-sinh-goi.png';
import caAnThuoc from '../assets/thuoc/ca-an-thuoc.jpg';
import caGiun from '../assets/thuoc/ca-giun.jpg';
import maySui from '../assets/tam/may-sui.png';

// Ảnh tạm, không phải sản phẩm thật. Có ảnh thật thì thay vào images và bỏ tempPhoto.
const pumpCredit = {
  text: 'Corydoras-adolfoi, CC BY-SA 4.0, đã tách nền và làm mờ tên hãng',
  url: 'https://commons.wikimedia.org/wiki/File:Aquarium-air-pump.jpg',
};

export const categories = [
  { slug: 'xu-ly-nuoc', name: 'Xử lý nước' },
  { slug: 'thuc-an', name: 'Thức ăn cho cá' },
  { slug: 'thuoc-cho-ca', name: 'Thuốc cho cá' },
  { slug: 'vi-sinh', name: 'Vi sinh' },
  { slug: 'phan-nuoc', name: 'Phân nước' },
  { slug: 'loc-oxy', name: 'Lọc & Oxy' },
];

// Khi có đánh giá thật của khách, thêm vào sản phẩm: rating: 4.8, reviews: 12
export const products = [
  {
    slug: 'dung-dich-khu-clo',
    name: 'Dung dịch khử Clo nước máy',
    category: 'xu-ly-nuoc',
    price: 85000,
    size: '230 ml',
    headline: 'Khử Clo & Chloramin trong 2 phút',
    images: [
      { src: chaiHop, alt: 'Chai và hộp dung dịch Khử Chloramin Thủy Sinh TH 230 ml' },
      { src: hoCaClo, alt: 'Chai khử Clo đặt cạnh hồ cá, nhãn Trong 2 phút cam kết' },
      { src: rot, alt: 'Rót dung dịch khử Clo ra nắp đong' },
      { src: lieuLuong, alt: 'Minh họa liều lượng: 1 nắp 5 ml khử 20 lít nước' },
      { src: nhan, alt: 'Nhãn sản phẩm với hướng dẫn sử dụng, thành phần và bảo quản' },
    ],
    bullets: [
      'Khử Clo & Chloramin trong nước máy trong 2 phút',
      'Độ tinh khiết 100%',
      'An toàn tuyệt đối cho hệ vi sinh',
    ],
    intro: [
      'Nếu bạn thường xuyên gặp cảnh cá bơi lờ đờ, thở gấp trên mặt nước hoặc chết bí ẩn chỉ vài tiếng hoặc vài ngày sau khi thay nước máy, thủ phạm 99% chính là Clo và Cloramin tự do chứ không phải do "lệch pH" hay "thay đổi nhiệt độ" như lời đồn.',
      'Công thức tinh khiết bảo vệ tuyệt đối màng hô hấp mỏng manh của cá con, tép cảnh và giữ nguyên vẹn hệ vi sinh có lợi trong bộ lọc của bạn. Thao tác đơn giản, an toàn tuyệt đối ngay cả khi bạn lỡ tay châm quá liều vào những ngày nhà máy nước xả Clo nồng độ cao.',
    ],
    specsTitle: 'Hướng dẫn sử dụng',
    specs: [
      'Dùng 1 nắp (5 ml) cho 100 L nước mới.',
      'Chờ 2 phút trước khi thêm nước vào hồ (tránh cho nước máy trực tiếp vào hồ nuôi cá rồi mới khử).',
      'Lưu ý: để tránh tình trạng "bổ sung Clo" của các nhà máy nước, nên sử dụng liều lượng 5 ml cho 20 L nước mới.',
      'Bảo quản: tránh ánh nắng trực tiếp, đậy nắp kín sau khi sử dụng. HSD: 12 tháng.',
      'Thành phần: Na 7,27%, S 10,14%, O 7,59%. Sản xuất bởi Thủy Sinh TH, Made in Vietnam.',
    ],
    sections: [
      {
        title: 'Bản chất phản ứng',
        image: { src: rot, alt: 'Rót dung dịch khử Clo ra nắp đong' },
        text: ['Clo và Chloramin là các chất oxy hóa cực mạnh. Cách duy nhất để vô hiệu hóa chúng là dùng phản ứng Oxy hóa - Khử. Hợp chất chứa gốc lưu huỳnh dạng khử bẻ gãy liên kết Clo ngay tức thì, biến Clo độc hại thành muối ăn vô hại và một lượng rất nhỏ ion sunfat.'],
      },
      {
        title: 'Chiêu trò "Khử Amoniac & Nitrit"',
        image: { src: hoCaClo, alt: 'Chai khử Clo đặt cạnh hồ cá' },
        text: ['Không có bất kỳ hợp chất khử Clo nào có khả năng "khử" hay "giải độc" Amoniac hoặc Nitrit. Các thử nghiệm đo lường hóa học chuẩn đã chứng minh nồng độ Amoniac độc hại không hề suy giảm sau khi dùng chất khử. Chỉ có hệ vi sinh sống khỏe mạnh trong lọc sinh học mới chuyển hóa được Amoniac thành Nitrat.'],
      },
      {
        title: 'Tác hại của chất phụ gia tạo nhớt',
        image: { src: chaiHop, alt: 'Chai và hộp dung dịch khử Clo' },
        text: ['Nhiều sản phẩm cho thêm chiết xuất lô hội hoặc polymer nhân tạo để quảng cáo "dưỡng mang, tạo màng bảo vệ". Thực tế, chất này bám vào phiến mang làm giảm khả năng trao đổi oxy của cá và làm giảm oxy hòa tan trong nước. Một dung dịch khử chuẩn phải tinh khiết 100%, không chứa chất keo bết dính.'],
      },
    ],
    sectionsTitle: 'Sự thật khoa học về chất xử lý nước',
  },
  {
    slug: 'thuc-an-gel-th',
    name: 'Thức ăn dạng Gel TH',
    category: 'thuc-an',
    price: 95000,
    size: '60 g',
    headline: 'Phù hợp với mọi loại cá!',
    images: [
      { src: bonGoi, alt: 'Bốn túi thức ăn Food Gel TH Thủy Sinh TH' },
      { src: goi, alt: 'Gói thức ăn Food Gel TH' },
      { src: khoiGel, alt: 'Khối thức ăn gel nằm trên nền sỏi trong hồ' },
      { src: namGoi, alt: 'Năm gói Food Gel TH cùng các ưu điểm chính' },
      { src: caAn, alt: 'Cá gặm khối thức ăn gel dưới đáy hồ' },
    ],
    bullets: [
      'Cá con và tép đều ăn được',
      'Hàm lượng Protein vượt trội (>50%)',
      'Ít tan trong nước',
      'Tảo bổ sung vitamin, tăng sức đề kháng và kích màu tự nhiên',
    ],
    intro: [
      'Nếu bạn nuôi cá cảnh hay tép và quá mệt mỏi với cảnh cám viên rã vụn làm nước đục ngầu gây bùng phát vi khuẩn sau mỗi lần cho ăn, đây chính là giải pháp dinh dưỡng tuyệt vời dành cho bạn. Không giống như các loại thức ăn công nghiệp sấy nhiệt cao bị phá hủy vitamin và độn đầy bột mì rẻ tiền, Thức Ăn Gel TH đi đúng theo bản chất hóa sinh dinh dưỡng chuẩn mực của các chuyên gia thủy sinh quốc tế.',
      'Khi thả vào nước, khối gel chìm êm xuống đáy giữ nguyên trạng thái không tan rữa để cá con, cá tầng đáy và tép tha hồ tụ tập gặm nhấm cả ngày mà không làm suy giảm chất lượng nước.',
    ],
    specsTitle: 'Thành phần dinh dưỡng',
    specs: [
      'Protein thô (tối thiểu) 50%',
      'Chất béo thô (tối thiểu) 10%',
      'Chất xơ thô (tối đa) 3%',
      'Độ ẩm (tối đa) 11%',
    ],
    sectionsTitle: 'Vì sao thức ăn quyết định sức khỏe của cá?',
    sections: [
      {
        title: 'Bản chất của bệnh tật trên cá không tự nhiên sinh ra',
        image: { src: caAn, alt: 'Cá gặm khối thức ăn gel dưới đáy hồ' },
        text: [
          '90% các bệnh thường gặp (thối vây, nấm, sình bụng, lở loét) là do vi khuẩn cơ hội có hại (Aeromonas, Pseudomonas, Columnaris) gây ra.',
          'Những vi khuẩn này luôn chực chờ trong nước, nhưng chúng chỉ bùng phát khi gặp môi trường có tỷ lệ tinh bột cao và đạm thấp.',
        ],
      },
      {
        title: 'Thức ăn giá rẻ chính là "nguồn thức ăn nuôi vi khuẩn hại"',
        image: { src: camRe, alt: 'Bát cám viên giá rẻ' },
        text: [
          'Để ép viên và hạ giá thành, các nhà máy độn 35% – 50% tinh bột mì, bột ngô.',
          'Cá chỉ có thể tiêu hóa được khoảng 50% tinh bột này. 50% còn lại bị thải ra nước dưới dạng hợp chất hữu cơ hòa tan.',
          'Vi khuẩn có hại hấp thụ và nhân đôi sinh khối với tốc độ chóng mặt, tạo thành lớp "nước mờ đục như khói". Hàng tỷ vi khuẩn liên tục tấn công vào mô mang mỏng manh của cá khiến hệ miễn dịch kiệt quệ.',
        ],
      },
      {
        title: 'Cơ chế đảo ngược của thức ăn đạm cao (>50%) & 0% tinh bột độn',
        image: { src: khoiGel, alt: 'Khối thức ăn gel nằm trên nền sỏi trong hồ' },
        text: [
          'Khi thức ăn có đạm >50% và tinh bột cực thấp (<10%), cá hấp thu 85% – 90% lượng protein sạch. Phân thải ra chỉ là khoáng chất sạch, hoàn toàn "bỏ đói" các vi khuẩn dị dưỡng gây hại.',
          'Vi khuẩn hại không có thức ăn sẽ tự triệt tiêu. Cột nước đạt trạng thái trong vắt: đây là vũ khí phòng bệnh tối thượng, giúp cá khỏe mạnh mà không bao giờ cần đến thuốc.',
        ],
      },
    ],
  },
  {
    slug: 'bot-vi-sinh-bao-tu',
    name: 'Bột vi sinh bào tử chuyên dụng',
    category: 'vi-sinh',
    price: 65000,
    size: '30 g',
    headline: 'Khởi tạo màng sinh học lọc nước và triệt tiêu độc tố',
    images: [
      { src: hu, alt: 'Hũ bột Vi Sinh Thủy Sinh TH' },
      { src: hoCaVs, alt: 'Hũ vi sinh đặt cạnh hồ thủy sinh' },
      { src: ngonTay, alt: 'Bột vi sinh màu nâu trên đầu ngón tay' },
    ],
    bullets: [
      'Dạng bào tử: chứa được khối lượng vi sinh có lợi cực kì lớn',
      'Đa dạng chủng loại: tăng sự đa dạng cho hệ sinh thái hồ',
    ],
    intro: [
      'Nếu bạn từng châm hết chai vi sinh dạng nước này đến chai khác mà hồ cá vẫn đục mờ, cá vẫn nổi đầu hoặc chết lai rai, đây chính là giải pháp dứt điểm cho bạn. Không giống các loại vi sinh dạng nước đóng chai kín khí, nơi vi sinh tự dưỡng hiếu khí chết ngạt ngay trên kệ hàng trước khi về đến tay bạn, dòng vi sinh này sử dụng công nghệ bào tử đông khô giúp giữ được số lượng vi sinh sống cao hơn rất nhiều.',
      'Khi thả vào môi trường nước có oxy, hàng tỷ bào tử lập tức thức giấc, bám chặt vào bề mặt vật liệu lọc để thiết lập hệ thống màng sinh học (Biofilm) xử lý nước. Bột vi sinh nhanh chóng phân giải thức ăn thừa, mùn bã hữu cơ ở đáy và bẻ gãy Amoniac nguy hiểm, triệt tiêu tận gốc vi khuẩn lơ lửng gây hại, mang lại nguồn nước trong vắt như pha lê và môi trường sống hoàn hảo cho cá, tép phát triển.',
    ],
    sectionsTitle: 'Sự thật khoa học về vi sinh',
    sections: [
      {
        title: 'Dạng nước và dạng bào tử',
        image: { src: viSinhNuoc, alt: 'Chai vi sinh dạng nước' },
        text: [
          'Vi sinh dạng nước đóng chai: vi khuẩn nitrat hóa hiếu khí cần tiêu thụ oxy liên tục. Trong chai nhựa kín không có oxy hòa tan, vi khuẩn sẽ cạn kiệt năng lượng và chết sau vài tuần sản xuất. Thứ còn lại trong chai chủ yếu là xác tế bào vi khuẩn.',
          'Bào tử vi sinh dạng bột: được đưa vào trạng thái "ngủ đông" hoàn toàn (Cryptobiosis). Ở trạng thái này, chúng chịu được nhiệt độ môi trường, không cần thức ăn, không cần oxy và duy trì tỷ lệ sống gần như 100% qua nhiều năm. Khi bạn châm vào hồ có máy lọc chạy, chúng hút nước và bắt đầu nhân đôi sinh khối ngay trong khoang lọc.',
        ],
      },
      {
        title: 'Sai lầm phổ biến: đừng vệ sinh "lớp bùn nâu" trong hộp lọc',
        image: { src: biofilm, alt: 'Lớp màng nâu bám trên sứ lọc' },
        text: [
          'Hầu hết người mới nuôi cá đều lầm tưởng lớp màng nhầy màu nâu bám trên nham thạch, sứ lọc hay bông lọc là chất bẩn cần giặt sạch bóng.',
          'Thực chất lớp màng nâu đó chính là Biofilm: thành phố của hàng triệu vi sinh vật có lợi đang ngày đêm hút Amoniac và giữ cho nước trong vắt.',
        ],
      },
    ],
  },
  {
    slug: 'thuc-an-so-giun',
    name: 'Thức ăn Xổ Giun cho cá cảnh',
    category: 'thuoc-cho-ca',
    price: 85000,
    size: '20 g',
    headline: 'Đưa thẳng hoạt chất vào ruột cá',
    images: [
      { src: xoGiunGoi, alt: 'Bốn túi thức ăn Xổ Giun Thủy Sinh TH' },
      { src: caGiun, alt: 'Cá bị giun đường ruột, giun trắng thò ra ở hậu môn' },
      { src: caAnThuoc, alt: 'Cá tầng đáy gặm miếng thức ăn trộn thuốc' },
    ],
    bullets: [
      'Điều trị các loại ký sinh trùng đường ruột',
      'Không thể thiếu khi nuôi các dòng cá đẻ con và xử lí cá mới',
      'Giữ nguyên nồng độ hoạt chất (1% - 5%), không bị pha loãng vô ích trong nước',
      'An toàn tuyệt đối cho hệ vi sinh, cây thủy sinh, cá mang bầu và tép cảnh',
    ],
    intro: [
      'Sản phẩm thức ăn trộn thuốc này được chế tạo dựa trên sự thật sinh học: cá nước ngọt tuyệt đối không uống nước và mang cá không thể hấp thu các phân tử thuốc lớn. Thay vì tạt thuốc xuống nước làm chết vi sinh và chỉ đạt nồng độ cực loãng (0.001%), thức ăn định hình bằng công nghệ kết dính giúp đưa thẳng hoạt chất vào tận ổ dịch trong ruột cá.',
      'Không thể thiếu khi bạn nuôi cá đẻ con, vì cá đẻ con là đối tượng thường xuyên bị Capillaria tấn công, một loại giun đường ruột thường biểu hiện bằng bụng rỗng, lưng cong, teo tóp, nôn ra thức ăn và ruột lòi ra ngoài. Vì vậy thức ăn xổ giun là trang bị không thể thiếu nếu bạn không muốn cá đẻ con trong hồ ra đi lần lượt mà không rõ lí do.',
    ],
    specsTitle: 'Hướng dẫn sử dụng',
    specs: [
      'Lịch trị bệnh: cho ăn 2 ngày liên tiếp, 1 tuần 1 lần trong 3 tháng.',
      'Lịch phòng bệnh: cho ăn 2 ngày liên tiếp, 2 tuần 1 lần trong 3 tháng.',
      'Thành phần: Fenben 51%, Prazi 34%, Levam 15%.',
    ],
    sectionsTitle: 'Dấu hiệu cá bị giun đường ruột',
    sections: [
      {
        title: 'Giun thò ra ở hậu môn',
        image: { src: caGiun, alt: 'Cá bị giun đường ruột, giun trắng thò ra ở hậu môn' },
        text: [
          'Cá bị giun nặng có thể thấy giun trắng hoặc đỏ thò ra ở hậu môn, kèm bụng rỗng, lưng cong, teo tóp, nôn ra thức ăn.',
          'Khi đã thấy dấu hiệu này, cho ăn theo lịch trị bệnh và tiếp tục lịch phòng bệnh cho cả đàn.',
        ],
      },
    ],
  },
  {
    slug: 'thuc-an-khang-sinh',
    name: 'Thức ăn kháng sinh',
    category: 'thuoc-cho-ca',
    price: 85000,
    size: '20 g',
    headline: 'Trị và phòng các bệnh nhiễm khuẩn cho cá cảnh',
    images: [
      { src: khangSinhGoi, alt: 'Các túi thức ăn Kháng Sinh và Food Gel TH của Thủy Sinh TH' },
      { src: caAnThuoc, alt: 'Cá tầng đáy gặm miếng thức ăn trộn thuốc' },
    ],
    bullets: [
      'Trị và phòng bệnh vi khuẩn cho cá',
      'Không ảnh hưởng đến vi sinh có lợi trong hồ',
      'Tối ưu hiệu quả của thuốc',
    ],
    intro: [
      'Đa số người nuôi cá khi thấy cá bị nấm, lở loét, thối vây hoặc túm lắc thường có thói quen mua thuốc đổ trực tiếp vào hồ. Dựa trên các nghiên cứu khoa học thực chiến về sinh lý cá cảnh, cá nước ngọt hoàn toàn không uống nước và mang cá không thể hấp thụ các phân tử thuốc lớn. Việc đánh thuốc vào nước vừa lãng phí vừa vô tác dụng.',
      'Thức Ăn Kháng Sinh Thủy Sinh TH được nghiên cứu và bào chế theo công thức chuẩn khoa học: kháng sinh được kết hợp trực tiếp vào nền thức ăn dạng gel giúp thuốc đi thẳng vào đường tiêu hóa của cá. Đây là phương pháp duy nhất được chứng minh mang lại hiệu quả cao trong việc điều trị các bệnh nhiễm khuẩn nội bộ và ngoài da.',
    ],
    specsTitle: 'Hướng dẫn sử dụng',
    specs: [
      'Trị bệnh: cho ăn liên tục 10 ngày liên tiếp để diệt tận gốc mầm bệnh.',
      'Phòng bệnh cho cá mới mua hoặc cá mang bầu: cho ăn liên tục trong 5 - 7 ngày.',
    ],
    sectionsTitle: 'Vi khuẩn: thủ phạm gây ra 80% nguyên nhân làm chết cá',
    sections: [
      {
        title: 'Tấn công nội tạng gây chết nhanh',
        image: { src: caAnThuoc, alt: 'Cá tầng đáy gặm miếng thức ăn trộn thuốc' },
        text: [
          'Vi khuẩn luôn tồn tại sẵn trong môi trường nước. Khi cá bị stress do vận chuyển, thay đổi chất lượng nước, hoặc bị cắn phá lẫn nhau, hệ miễn dịch suy yếu ngay lập tức sẽ tạo cơ hội cho vi khuẩn bùng nổ.',
          'Nhiều trường hợp cá chết hàng loạt mà không có triệu chứng ngoài da, thực chất vi khuẩn đã tấn công trực tiếp vào cơ quan nội tạng làm cá suy tạng mà chết.',
        ],
      },
      {
        title: 'Biểu hiện bên ngoài',
        image: { src: khangSinhGoi, alt: 'Các túi thức ăn Kháng Sinh Thủy Sinh TH' },
        text: [
          'Các hiện tượng quen thuộc như loét da, vây rách tơi tả, túm lắc, cọ mình, nấm, xuất huyết đỏ dưới da, hay teo tóp đều có chung một thủ phạm cốt lõi là sự xâm nhập và hoành hành của vi khuẩn.',
          'Vì vậy kháng sinh là một phương pháp khoa học đã được chứng minh là cực kì hiệu quả để giải quyết vấn đề đau đầu này.',
        ],
      },
    ],
  },
  {
    slug: 'phan-nuoc',
    name: 'Phân nước',
    category: 'phan-nuoc',
    soldOut: true,
    images: [{ src: beCa, alt: 'Hồ thủy sinh nhiều cây xanh, ảnh minh họa' }],
    tempPhoto: {},
  },
  {
    slug: 'loc-bio-sui-oxy-gex-2000',
    name: 'Lọc Bio, Sủi Oxy Gex 2000 1 vòi',
    category: 'loc-oxy',
    soldOut: true,
    images: [{ src: maySui, alt: 'Máy sủi oxy cho hồ cá, ảnh minh họa' }],
    tempPhoto: pumpCredit,
  },
];

export const money = (n) => n.toLocaleString('vi-VN') + ' VNĐ';
