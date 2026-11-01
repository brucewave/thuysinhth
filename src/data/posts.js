import beCa1 from '../assets/blog/be-ca-1.jpg';
import beCa2 from '../assets/blog/be-ca-2.jpg';

// Nội dung bài: chuỗi là một đoạn; { h } là tiêu đề, { caps } là câu nhấn mạnh, { ol } là danh sách đánh số.
export const posts = [
  {
    slug: 'co-ban-ve-nuoi-ca-p1-nuoi-ca-qua-de',
    title: 'Cơ bản về nuôi cá P1: Nuôi cá cảnh quá dễ!',
    excerpt:
      'Chương đầu tiên hướng dẫn anh em cách có một bể cá cảnh đơn giản và đúng khoa học, với 15 điều cần làm khi mới bắt đầu.',
    image: { src: beCa1, alt: 'Bể cá nhỏ với cây thủy sinh và một con betta' },
    body: [
      'Trong chương đầu tiên này mình sẽ hướng dẫn anh em cách để có 1 bể cá cảnh đơn giản và đúng khoa học dành cho người mới bắt đầu nuôi cá.',
      'Thực ra thì khoa học đã chứng minh rằng bể cá chính là một hệ sinh thái tự nhiên thu nhỏ, mà mẹ thiên nhiên thì lại rất dễ tính. Vì vậy anh em cần phải hiểu rõ là CÓ RẤT NHIỀU CÁCH ĐỂ THÀNH CÔNG VỚI MỘT BỂ CÁ.',
      'Một vấn đề cốt lõi dẫn đến sai lầm trong thú chơi này mà hầu như anh em nào cũng đều mắc phải, đương nhiên là có cả mình. Đó là suy nghĩ quá nhiều về cách chơi đúng, suy nghĩ quá nhiều khi thấy cá không khỏe, mà càng nghĩ nhiều thì thứ anh em nhận lại là sự bất an, sự không thoải mái, vậy nó đâu còn đúng với lí do anh em bắt đầu với thú chơi này đúng không?',
      'Và thêm 1 sự thật đó là khi anh em cảm thấy không thoải mái thì chắc chắn con cá của anh em sẽ phải chịu đựng nhiều hơn nữa với những gì anh em sẽ làm với những suy nghĩ đó, nào là thay nước, đánh thuốc, thêm muối, vệ sinh hồ, cho ăn nhiều hơn, hoặc là bắt riêng cá ra để trị bệnh,... Còn rất nhiều điều tệ hại nữa.',
      'Ở những phần đầu sẽ là một loạt các lời khuyên để anh em làm theo, và mình sẽ chỉ đi sâu và chi tiết hơn ở những phần sau. Nếu anh em không phải là một người rất đam mê bộ môn này thì chỉ cần làm theo những lời khuyên ở phần đầu là anh em sẽ thành công trong bộ môn dễ ẹc này rồi.',
      { h: 'Cấp độ 1: Nuôi cá quá đơn giản' },
      'Đây là 15 điều cần làm khi bắt đầu với thú chơi này:',
      {
        ol: [
          'Bỏ qua những lời khuyên mà lợi nhuận được đặt lên hàng đầu của các Aqua, tiệm cá cảnh,... Phải thêm chất A, chất B để hỗ trợ nuôi? Bỏ hết đi!',
          'Đổ đầy bể bằng nước máy.',
          'Thêm dung dịch Khử Clo để khử nước máy. ĐÂY LÀ CHẤT HÓA HỌC DUY NHẤT ANH EM CẦN MUA.',
          'Thêm 1 bộ lọc giá rẻ như lọc Bio. Nếu anh em cần đơn giản thì dùng lọc treo cũng được, mặc dù mình không đánh giá cao lọc treo về độ hiệu quả lắm, nhưng sự tiện lợi và dễ sử dụng thì ok.',
          'Thêm 1 máy sủi Oxy (nên lấy loại cao tiền hơn một chút so với loại rẻ nhất trong cửa hàng) + cục sủi oxy vào hồ. Nếu anh em dùng lọc Bio thì không cần bước này.',
          'Thêm 1 cây đèn giá rẻ để trải nghiệm ngắm cá tốt hơn.',
          'Thêm 1 ít san hô vụn vào bộ lọc hoặc trong hồ để cân bằng PH.',
          'Thả 1-2 con cá khỏe trong vài tuần đầu để chạy nước, 1 con betta đực cũng rất tốt. Nên chọn những loại có giá siêu rẻ tại cửa hàng, tránh những dòng sống theo đàn.',
          'Nếu muốn trồng cây hãy chỉ chọn Lan nước, Ráy hoặc Dương xỉ Java, và không cần bón phân, cứ để cây phát triển tự nhiên.',
          'Mua thức ăn có hàm lượng Protein cao nhất bạn tìm thấy ở tiệm cá cảnh và chỉ cho ăn rất ít với tần suất 1 lần 1 ngày.',
          'KHÔNG vệ sinh vật liệu lọc, đồ trang trí hoặc hút bụi nền đáy.',
          'KHÔNG mua bộ dụng cụ kiểm tra nước.',
          'Chỉ thay 30% nước mỗi 2 tháng nếu nuôi mật độ cá dày.',
          'Nếu nước bị đục hoặc màu xanh thì cứ bỏ qua. Nước sẽ trong lại sau vài tuần khi vi sinh ổn định.',
          'Sau 5 tuần hãy bổ sung thêm cá dần dần trong vài tháng.',
        ],
      },
      'Vậy là xong. Quá dễ!',
    ],
  },
  {
    slug: 'co-ban-ve-nuoi-ca-p2-clo-cho-an-cycle',
    title: 'Cơ bản về nuôi cá P2: Clo, cho ăn và Cycle',
    excerpt:
      'Quy tắc duy nhất trong thú chơi này là khử Clo nước máy. Phần 2 nói về 3 thứ bạn cần quan tâm: Clo, cho ăn và Cycle.',
    image: { src: beCa2, alt: 'Bể thủy sinh có đèn, cây xanh và hang đất nung' },
    body: [
      'Hãy bỏ qua những lời khuyên khi ai đó nói phải làm cái này, cái kia khi nuôi cá, cứ phớt lờ họ đi. Quy tắc duy nhất trong thú chơi này chính là thêm dung dịch Khử Clo để khử Clo nước máy, anh em vẫn sẽ thành công nếu bỏ qua những quy tắc khác mà thôi, vì mẹ thiên nhiên rất bao dung.',
      'Ở Phần 2 này sẽ có 3 thứ mà bạn cần quan tâm, đó là: Clo, Cho ăn và Cycle.',
      { h: 'Cấp độ 2a: Clo' },
      { caps: 'NẾU BẠN DÙNG NƯỚC MÁY ĐỂ NUÔI CÁ, BẠN PHẢI DÙNG DUNG DỊCH KHỬ CLO' },
      'Nước máy mặc dù là nguồn nước ổn định nhất nhưng nó lại có chứa Clo để diệt vi khuẩn. Và lượng Clo rất nhỏ cũng sẽ làm cháy mang những con cá cưng của bạn và giết chết hệ vi sinh trong hồ cá.',
      'Hãy lưu ý chỉ mua dung dịch Khử Clo nguyên chất, không mua các loại Khử Clo có kèm theo chức năng chất chống stress cá, khử chất độc trong hồ, vi sinh trong chai, đệm PH,... những thứ này sẽ có tác dụng phụ và gây hại cho cá của anh em. Nhưng bán những chai như này lại mang lại rất nhiều lợi nhuận cho các công ty sản xuất.',
      { h: 'Cấp độ 2b: Cho ăn' },
      { caps: 'CHỈ CHO ĂN 1 LẦN 1 NGÀY VỚI LƯỢNG THỨC ĂN MÀ CÁ ĂN HẾT TRONG 2 PHÚT' },
      'Đây là sai lầm mà hầu như người mới chơi nào cũng đều mắc phải, đó là cho ăn quá nhiều. Cá là động vật máu lạnh, nên tụi này không cần phải ăn quá nhiều, khác với động vật máu nóng.',
      'Thức ăn thừa sẽ sản sinh độc tố và độc tố đó là thứ sẽ giết chết cá của anh em nhanh hơn bất kì thứ gì khác.',
      'Hướng dẫn trên bao bì thức ăn cho cá kiểu "cho cá ăn hết trong vòng hai phút, ba lần một ngày" nhằm mục đích kiếm lời sẽ giết chết cá của bạn rất nhanh.',
      { h: 'Cấp độ 2c: Cycle' },
      { caps: 'MỌI BỂ CÁ ĐỀU SẼ RẤT KHỎE NẾU NHƯ CÓ RẤT NHIỀU CHẤT BẨN MÀU NÂU TRONG VẬT LIỆU LỌC!' },
      '"CYCLE" hay "chu trình Nito" là thuật ngữ dùng để chỉ quá trình chuyển hóa chất độc hại trong nước tiểu cá (amoniac) thành một hợp chất tương đối vô hại gọi là nitrat. Quá trình này được thực hiện trong bộ lọc bởi các "vi khuẩn có lợi" sống trong lớp cặn màu nâu trên vật liệu lọc.',
      'Hãy trồng cây vào trong hồ, trong rễ cây thủy sinh sẽ có số lượng vi sinh có lợi cần thiết để cấy cho bể cá, nhưng nếu muốn sự đa dạng vi sinh trong hồ thì hãy thêm 1 ít vi sinh dạng bột vào hồ và chỉ thêm đúng 1 lần ban đầu.',
      'Các loại vi sinh dạng dung dịch trong chai không hiệu quả. Có 2 lí do chính: thứ 1 là trong chai không hề có chỗ để vi sinh bám vào nên số lượng vi sinh có trong chai là rất ít, và thứ 2 là trong chai kín hoàn toàn không có oxy và nguồn thức ăn liên tục, điều này sẽ khiến phần lớn vi sinh có lợi trong chai sẽ chết ngạt sau 1 thời gian lưu kho hoặc ở trên kệ bày bán. Chai dung dịch chỉ thực sự có tác dụng nếu anh em mua nó từ lúc nó vừa được sản xuất cực kỳ mới, điều này thật khó để dự đoán.',
      'Nước trong bể cá của bạn có thể bị đục trong vài tuần. Hãy bỏ qua điều đó. Nước sẽ trong trở lại sau bốn đến sáu tuần. KHÔNG được thay nước đục. KHÔNG được vệ sinh bộ lọc hoặc thay lõi lọc. Lớp cặn màu nâu tích tụ trong bộ lọc là một loại vật liệu rất tốt gọi là "vi khuẩn có lợi" và rất quan trọng đối với sức khỏe của cá. Đồ trang trí và sỏi trong bể sẽ bị bám cặn màu nâu. Điều đó hoàn toàn bình thường và cách tốt nhất là học cách sống chung với nó. Loại "tảo nâu" này tốt cho cá và là một phần thiết yếu của hệ sinh thái bể cá hoạt động tốt.',
    ],
  },
];
