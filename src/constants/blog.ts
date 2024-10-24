export interface Blog {
  id: number;
  thumnail: string;
  author: string;
  title: string;
  description: string;
  dateTime: string;
  day: string;
  subContent?: SubContent[];
}

interface SubContent {
  id: string | number;
  imageUrl: string;
  descImage: string;
  content: string;
}

export const dataBlogs: Blog[] = [
  {
    id: 1,
    author: "ĐẶNG THÙY LINH",
    thumnail:
      "https://giadinh.mediacdn.vn/6JDnYG1u7Ulo8W6LkDM87YS4rtW4P7/Image/2012/08/t6_e4689.jpg",
    title:
      "Đấu tranh vì quyền đồng nghĩa với việc biến lời nói thành hành động",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
      {
        id: 3,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content:
          "Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.",
      },
    ],
  },
  {
    id: 2,
    author: "Nguyen Lai Thien Son",
    thumnail:
      "https://www.kymviet.com.vn/Qu%C3%A0%20t%E1%BA%B7ng%20k%E1%BB%B7%20ni%E1%BB%87m%20s%E1%BB%B1%20ki%E1%BB%87n.jpg",
    title: "Quà tặng kỷ yếu và những gợi ý quà tặng có ý nghĩa",
    description:
      "Quà tặng kỷ yếu là những món quà đặc biệt được trao tặng nhân dịp kỷ niệm thành lập, những cột mốc quan trọng của một tổ chức xã hội hay của doanh nghiệp, hoặc để tri ân đối tác, khách hàng. Đây không chỉ là một món quà vật chất mà còn mang ý nghĩa tinh thần sâu sắc, thể hiện sự gắn kết, tri ân",
    dateTime: "10 ngày trước",
    day: "01/08/2024 06:25 PM",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.kymviet.com.vn/Qu%C3%A0%20t%E1%BA%B7ng%20k%E1%BB%B7%20ni%E1%BB%87m%20s%E1%BB%B1%20ki%E1%BB%87n.jpg",
        descImage: "",
        content: `Quà tặng kỷ yếu là những món quà đặc biệt được trao tặng nhân dịp kỷ niệm thành lập, những cột mốc quan trọng của một tổ chức xã hội hay của doanh nghiệp, hoặc để tri ân đối tác, khách hàng.
Quà tặng kỷ yếu không chỉ là một món quà vật chất mà còn mang ý nghĩa tinh thần sâu sắc, thể hiện sự gắn kết, tri ân và lưu trữ những mốc kỷ niệm đẹp

Ý nghĩa quan trọng của quà tặng kỷ yếu :

✔️ Thúc đẩy tinh thần đoàn kết: Quà tặng giúp tăng cường sự gắn kết giữa các thành viên trong công ty, tạo ra không khí làm việc tích cực.

✔️ Biểu hiện sự trân trọng: Đây là cách để công ty bày tỏ lòng biết ơn đối với những đóng góp của nhân viên và đối tác.

✔️ Xây dựng hình ảnh thương hiệu: Quà tặng kỷ yếu độc đáo, ấn tượng sẽ góp phần nâng cao hình ảnh nhận diện của tổ chức hay doanh nghiệp.

✔️ Tạo dấu ấn khó quên: Những món quà ý nghĩa sẽ được lưu giữ và trở thành kỷ niệm đẹp trong lòng người nhận.`,
      },
      {
        id: 2,
        imageUrl:
          "https://www.kymviet.com.vn/Du%20l%E1%BB%8Bch%20c%E1%BB%99ng%20%C4%91%E1%BB%93ng%20tr%E1%BA%A3i%20nghi%E1%BB%87m%20v%C4%83n%20h%C3%B3a%20truy%E1%BB%81n%20th%E1%BB%91ng%20b%E1%BA%A3n%20%C4%91%E1%BB%8Ba.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Dưới đây là một số gợi ý quà tặng kỷ yếu doanh nghiệp ý nghĩa theo các nhóm:

1.  Quà tặng kỷ yếu mang tính biểu tượng:

✔️ Sản phẩm từ gỗ: Đồng hồ gỗ, móc treo chìa khóa…được in lazer hoặc khắc 3D hình ảnh, họa tiết biểu trưng mang vẻ đẹp nghệ thuật và sang trọng.

✔️ Kỷ niệm chương: Với thiết kế sang trọng, khắc tên và lời chúc của công ty.

✔️ Bình đựng nước, cốc sứ: In logo và thông điệp ý nghĩa.

2.  Quà tặng kỷ yếu thể hiện giá trị văn hóa doanh nghiệp:

✔️ Đồ thủ công mỹ nghệ: Các sản phẩm mang đậm nét văn hóa truyền thống hoặc hiện đại chất liệu vải, nhồi bông, gỗ tùy thuộc vào đặc trưng của doanh nghiệp.

✔️ Bộ sản phẩm chăm sóc sức khỏe: Gọn gàng, tiện lợi và thể hiện sự quan tâm của công ty đến sức khỏe của nhân viên.

✔️ Túi sách canvas: Được làm từ vải canvas bền chắc, túi vải canvas được in logo không chỉ là tư trang chứa vật dụng cá nhân mà ý nghĩa quảng bá thương hiệu hay tạo sự nhận diện thương hiệu cho các công ty hoặc sự kiện quan trọng nào đó.
3.  Quà tặng trải nghiệm:

✔️ Voucher nghỉ dưỡng: Tặng nhân viên và đối tác những chuyến đi nghỉ dưỡng để thư giãn và tái tạo năng lượng.

✔️ Khóa học nâng cao kỹ năng: Đầu tư vào việc phát triển năng lực của nhân viên.

✔️ Sự kiện trải nghiệm văn hóa cộng đồng: Tổ chức các hoạt động giao lưu văn hóa, văn nghệ, gắn kết để tăng cường tinh thần đồng đội`,
      },
    ],
  },
  {
    id: 3,
    author: "Mai Hoa",
    thumnail:
      "https://th.bing.com/th/id/OIP._oEYMUfkJWJGJH1RwN9JLgAAAA?rs=1&pid=ImgDetMain",
    title:
      "Quà tặng du lịch làm thủ công handicraft: Vì sao lại đặc biệt hấp dẫn?",
    description:
      "Quà tặng du lịch được làm thủ công [Handicraft travel gifts], đặc biệt là những món đồ được làm từ chất liệu truyền thống của mỗi quốc gia, luôn có một sức hút đặc biệt đối với du khách nước ngoài. Dưới đây là một số lý do:",
    dateTime: "12 ngày trước",
    day: "29/07/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.kymviet.com.vn/Kymviet%20Handicraft%20Products%20-%20Colourful%20puzzle%20pieces%2010.jpg",
        descImage: "",
        content: `
✔️ Mang đậm bản sắc văn hóa: Mỗi món đồ thủ công handicraft đều là một tác phẩm nghệ thuật nhỏ, mang đậm dấu ấn văn hóa của quốc gia đó.

✔️ Độc đáo và không thể tìm thấy ở bất kỳ đâu: Những món đồ thủ công(handicrafts) có yếu tố sáng tạo nên không làm hoàn toàn bằng tay như sản phẩm handmade. Vì vậy, khi mua một món quà thủ công, du khách không chỉ sở hữu một vật phẩm sáng tạo độc đáo mà còn mang về một phần linh hồn của đất nước đó.

✔️ Giá trị bền vững: So với những món quà sản xuất hàng loạt, quà tặng du lịch làm thủ công handicraft thường có chất lượng tốt hơn và bền hơn. Nhiều món đồ còn có giá trị tăng theo thời gian, trở thành những món đồ cổ quý giá.

✔️ Ý nghĩa của món quà: Tặng một món quà làm thủ công được bạn sưu tầm trong chuyến đi du lịch đồng nghĩa với việc bạn đang trao tặng một phần văn hóa của mình cho người khác. Điều này thể hiện sự trân trọng và tình cảm đặc biệt. `,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 4,
    author: "TRỊNH THANH THANH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 5,
    author: "NGUYỄN BÌNH MINH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/5de6/e000/5574fc4a0e59197d68720b19a03f0d08?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKhJpQ4XFGi3eqC9m0DvLqGuSX2-ER-fDVFpHkRqkGDppSPvIk2oWqUCXvxS84ePfx3fNiMpWh6~MrZIN99ZfzNpIQDxP5aR4P51t4CKRwKouznQRBxJv81RjO-7DLvB2P8U5Dt131qRxIC2GRp-p~HgFAimp2FhzntjpyjZeoir0PUo5UNYUAh5HaofqijWLjFB7R0pcc4OvCY~q29bx--Mo~IySh8m70W81IQk4Qe2rmhaviXdVh5dMeom2PfSCNwAM~xNtGqqCAxt6Z1cYbCrbL2lPQdh3iVDuDAlFxbBrerVEJERTWRg6bnxZvyGND43fc~40MnQ-WhATsIG1A__",
    title: "Nhận biết và tìm hiểu về tiềm năng của trẻ em khuyết tật",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "18 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 6,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/cf7c/9e57/ba26ff1b9194f02332970b7b3d8923d9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkEHmUAhSexLT5sSw9y9-aeJU2LwWQ18zw90HY0Dtt-~W1oOb7H5kKY5qJVkdQPBcjPH3dpS8ccAmI8PfyMdyN09~ly15XzPaZmmhQPOkPKhYx2y9rOKD92KvpypWCkBaK8lvmPcsB-HVeYEbKyC5M0YGfedPga74J9TxkXJedPE1KmoDxVOWQy~cYq0eYb93RJ3sxFnxFTJS4jY2AqnA3ECBBSa4L6cyxXf3JsY0XmZ12xwLe3moxQzScvl0Rwv-OzVPG9dy-gJE~AFlKoUzC9fb4ucZDK40ThoEdt3OE0Nt992YCyBhqHV7ilpiSY9Yy7ugWapho9KUwYGwsmzJw__",
    title:
      "Cùng vẽ thêm “đôi chân” cho trẻ em khuyết tật từ hành trình nhà sáng chế trẻ",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "20 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 7,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/5c65/b046/2d2817da98b70edf91426cb9beb8b815?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te7kh4GX3Z8COpz0d~wwsuwsPzCi~ut-k9wy4w~TYuJpWI4bdreUBj0QyK5Fimv-whTuvtMWedozWKVJLC4X2C9u-9lySCfz7iMl7kynqbdAoivPZlInTXHinZSf2UCNnRpiXAVR48z1x67LtNbP7pV8tOQSFz-j~zkeyvwGkwsqQ3zTSOvXQ6xdAFrCYqCbpF9nRseL9MIrTMcuI1XvznfkucEaX5lVd1uCOuj3ABxUgt1jwd4yLpXvp7TaOU1NJw0yYoamqbocth7xH90TLYk9OsKEVZzefM2UmmeafyN0AcZ1htfU4Smk~uuCq-RuisEdnrgE37oLq-9epn5mjw__",
    title:
      "Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập",
    description:
      "Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 8,
    author: "TRỊNH THANH THANH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__",
    title: "Chuyện của chúng tôi",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "15 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 9,
    author: "ĐẶNG THÙY LINH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/a607/9b55/1f48ea83e9a5598111e685d1ef699d30?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncRGbMDQ33yISUuUTbT3RpNrmWN5WZzxt3qQBdsVxVZ4hWb5EFtN~f~Emg-F2XA1P9WqkT5g0vCupwV8UX-qLXLuy6KchFY8JHclCISWGHLc1HHcdpK7I3KONchSH3LVjJp5ROCawMjQS4QOccmhNgRxw-ydzTWq7~PxpaVT-RqGt5vWdNZjzNxRvJIDBaC20z2KQsMERpU93Ysy-c3T9y5QzD297Xs6ozwlUxZUWj5sHjkpCaLHXtN-gAGxrYJCSg4iPxpZaa7GjCG~2fl4yfYak34MJmlQadz85TOSHNpLfu2ZAhoKlvrEVJMRrFb9asMxYbzxkODUMcYTGmG7fw__",
    title:
      "Đấu tranh vì quyền đồng nghĩa với việc biến lời nói thành hành động",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 10,
    author: "HUYỀN TRANG",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/449e/d22e/31636dceffc9c2a85517b6cccf9eb77e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFlqMRzgEOonMTqhIA4lGLoMyO~NoS-7J95zp083zriox1PioZC5B4w2AB8bI1WDUjr8xG01lvt49LHwb-xzpWOTb1LauB2-OhPTXHyhLfOt~aHljKiFQbSoEvRTDjOVtsUlw4sXvCoUCxqTGGfFZs7noWPWiJwyFaUZg-OC1XaCAhvQcvx4jWwdHufxy1~ofXu0LyhxT540fNxkQe3DSvI-D~NtLVFwPGGjF5ixZR7ntKKPZjEsmBZflBci6gLpsFV-Tgb1TSrfdd9BWd4YSj9N-8t0NELrcSFZm3othlpqmH3N2qXx6QZpVLvixU5Itik-bFJJ35VOH8EXAyjpog__",
    title: "Câu chuyện đầy cảm hứng của Huyền Trang",
    description:
      "Là tình nguyện viên của UNICEF, công việc của Huyền Trang là thúc đẩy quyền của trẻ em khuyết tật. Bài viết dưới đây sẽ chia sẻ cho bạn đọc về công việc cũng như cảm xúc của cô khi đồng hành cùng các hoạt động của UNICEF",
    dateTime: "10 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 11,
    author: "ĐẶNG THÙY LINH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/25ba/9bf1/f50e02f03e31ac2c49e8ba3269f09a1d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOxxIrdolrC0jsnVlnJ5hlDlGbw4IzTKC7Yp3oHvsLdkL8g8IfX9H4c1zfR9KzGwTuoCBM7PCmEbwvZmRlTKDIcaACUHqb1r8TSG3Dlx66KcygJ2PzbVNUPI6FC493H3DuNeBWM9b1Vf2ZPZZYBCpzSG331eKMhYhidzGzxjL7yZlhxZQXfjD7Ap9EQyZOxzzUwgZBOXpTzxY~efOA8DpQO2R7eYz7eCUiZgkpc4wenXPXytqU5xWmbcqodWyu3rSB7XnAg76pdndRdzoDbvJXlo4hmqfQjaOsBd-zyCyMS4t9q6OfVCIlqeDJk029UQG0F5Dwup-MT-r7AumxsEtg__",
    title: "Câu chuyện của Mai làm thúc đẩy nghề công tác xã hội tại Việt Nam",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "12 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 12,
    author: "TRỊNH THANH THANH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 13,
    author: "NGUYỄN BÌNH MINH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/5de6/e000/5574fc4a0e59197d68720b19a03f0d08?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKhJpQ4XFGi3eqC9m0DvLqGuSX2-ER-fDVFpHkRqkGDppSPvIk2oWqUCXvxS84ePfx3fNiMpWh6~MrZIN99ZfzNpIQDxP5aR4P51t4CKRwKouznQRBxJv81RjO-7DLvB2P8U5Dt131qRxIC2GRp-p~HgFAimp2FhzntjpyjZeoir0PUo5UNYUAh5HaofqijWLjFB7R0pcc4OvCY~q29bx--Mo~IySh8m70W81IQk4Qe2rmhaviXdVh5dMeom2PfSCNwAM~xNtGqqCAxt6Z1cYbCrbL2lPQdh3iVDuDAlFxbBrerVEJERTWRg6bnxZvyGND43fc~40MnQ-WhATsIG1A__",
    title: "Nhận biết và tìm hiểu về tiềm năng của trẻ em khuyết tật",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "18 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 14,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/cf7c/9e57/ba26ff1b9194f02332970b7b3d8923d9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkEHmUAhSexLT5sSw9y9-aeJU2LwWQ18zw90HY0Dtt-~W1oOb7H5kKY5qJVkdQPBcjPH3dpS8ccAmI8PfyMdyN09~ly15XzPaZmmhQPOkPKhYx2y9rOKD92KvpypWCkBaK8lvmPcsB-HVeYEbKyC5M0YGfedPga74J9TxkXJedPE1KmoDxVOWQy~cYq0eYb93RJ3sxFnxFTJS4jY2AqnA3ECBBSa4L6cyxXf3JsY0XmZ12xwLe3moxQzScvl0Rwv-OzVPG9dy-gJE~AFlKoUzC9fb4ucZDK40ThoEdt3OE0Nt992YCyBhqHV7ilpiSY9Yy7ugWapho9KUwYGwsmzJw__",
    title:
      "Cùng vẽ thêm “đôi chân” cho trẻ em khuyết tật từ hành trình nhà sáng chế trẻ",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "20 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 15,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/5c65/b046/2d2817da98b70edf91426cb9beb8b815?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te7kh4GX3Z8COpz0d~wwsuwsPzCi~ut-k9wy4w~TYuJpWI4bdreUBj0QyK5Fimv-whTuvtMWedozWKVJLC4X2C9u-9lySCfz7iMl7kynqbdAoivPZlInTXHinZSf2UCNnRpiXAVR48z1x67LtNbP7pV8tOQSFz-j~zkeyvwGkwsqQ3zTSOvXQ6xdAFrCYqCbpF9nRseL9MIrTMcuI1XvznfkucEaX5lVd1uCOuj3ABxUgt1jwd4yLpXvp7TaOU1NJw0yYoamqbocth7xH90TLYk9OsKEVZzefM2UmmeafyN0AcZ1htfU4Smk~uuCq-RuisEdnrgE37oLq-9epn5mjw__",
    title:
      "Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập",
    description:
      "Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...",
    dateTime: "8 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 16,
    author: "TRỊNH THANH THANH",
    thumnail:
      "https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__",
    title: "Chuyện của chúng tôi",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "15 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
];
