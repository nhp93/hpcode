export interface Event {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  dateTime: string;
  day?: string;
  subContent?: SubContent[];
}

interface SubContent {
  id: string | number;
  imageUrl: string;
  descImage: string;
  content: string;
}
export const dataEvents: Event[] = [
  {
    id: 1,
    imgUrl:
      "https://thirdchurchnyc.com/wp-content/uploads/2017/11/Rise-in-Strength.jpg",
    title: "Việt Nam đặt mục tiêu hòa nhập toàn diện cho người khuyết tật",
    description:
      "Ngày 15/10, tại vùng Umbria, miền Trung Italia, Hội nghị G7 về Hòa nhập và Người khuyết tật đã chính thức khai mạc.",
    dateTime: "8 phút trước",
    day: "Ngày 31/05/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://cdnphoto.dantri.com.vn/km92lrzyC8PYv4hfTtb8PWPtWvA=/thumb_w/1020/2024/10/16/z593607136788471af556c3317776455def4b783712afd-2-1729075903053.jpg",
        descImage:
          "Thứ trưởng Bộ LĐ-TB&XH Nguyễn Văn Hồi chia sẻ tại hội nghị về người khuyết tật (Ảnh: Nhật Minh).",
        content: `Đây là lần đầu tiên một hội nghị cấp Bộ trưởng của G7 bàn về người khuyết tật và các vấn đề liên quan. Đoàn đại biểu Việt Nam do Thứ trưởng Bộ Lao động - Thương binh và Xã hội (LĐ-TB&XH) Nguyễn Văn Hồi làm trưởng đoàn, tham gia sự kiện.`,
      },
      {
        id: 2,
        imageUrl:
          "https://cdnphoto.dantri.com.vn/_D8x8ajA8e0ZZv7AzWmBwaq_8zA=/thumb_w/1020/2024/10/16/z59360725287924d22c07183af37dcef6a9b9f84dec6bd-2-1729075903194.jpg",
        descImage:
          "ĐThứ trưởng Nguyễn Văn Hồi cùng các đại biểu tham dự hội nghị (Ảnh: Nhật Minh).",
        content: `Cụ thể, ngay từ Hiến pháp đầu tiên năm 1946 của nước Việt Nam Dân chủ Cộng hòa, quyền bình đẳng của mọi công dân đã được ghi nhận. Trong Hiến pháp nhấn mạnh rằng, tất cả công dân Việt Nam, bao gồm người khuyết tật, đều có quyền tham gia vào chính quyền và xây dựng đất nước, cũng như công cuộc kiến quốc dựa trên tài năng và đạo đức của mình.

Những quy định này tiếp tục được kế thừa trong các bản Hiến pháp sửa đổi qua các năm 1959, 1980, 1992, và gần đây nhất là Hiến pháp 2013, khẳng định sự bảo vệ và tôn trọng các quyền con người, bao gồm cả quyền của người khuyết tật.

Năm 2014, Quốc hội Việt Nam đã phê chuẩn Công ước của Liên hợp quốc về quyền của người khuyết tật, đánh dấu bước tiến quan trọng trong việc bảo vệ quyền lợi của họ.

Tiếp đó, năm 2019, Việt Nam phê chuẩn Công ước 159 của Tổ chức Lao động Quốc tế (ILO) về tái thích ứng nghề nghiệp và việc làm cho người khuyết tật, thể hiện cam kết mạnh mẽ trong việc đảm bảo người lao động khuyết tật không bị phân biệt đối xử trong lao động và việc làm.

Đến năm 2022, Việt Nam tiếp tục gia nhập Hiệp ước Marrakesh, nhằm tạo điều kiện cho người khuyết tật khiếm thị tiếp cận chữ viết và các tác phẩm sáng tạo thuộc Tổ chức Sở hữu trí tuệ thế giới.

Theo Thứ trưởng Bộ LĐ-TB&XH, để hiện thực hóa Hiến pháp và các cam kết quốc tế, Chính phủ Việt Nam đã trình Quốc hội thông qua nhiều đạo luật quan trọng nhằm bảo vệ quyền lợi của người khuyết tật.

Nổi bật là Luật Người khuyết tật năm 2010, cùng với các luật liên quan như Bộ luật Lao động, Luật Khám chữa bệnh, Luật Bảo hiểm y tế, Luật Giáo dục, Luật Giáo dục nghề nghiệp, Luật Xây dựng, Luật Giao thông và Luật Trợ giúp pháp lý, quy định những chính sách đặc thù hỗ trợ người khuyết tật.`,
      },
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
    title:
      "Hội thảo Chia sẻ kinh nghiệm và tham vấn kế hoạch hỗ trợ người khuyết tật",
    description:
      "Ngày 31/05/2024 vừa qua, hơn 80 đại biểu bao gồm lãnh đạo các Sở, ban, ngành...",
    dateTime: "2 ngày trước",
    subContent: [
      {
        id: 1,
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
      },
      {
        id: 2,
        imageUrl:
          "https://www.kymviet.com.vn/290434506_5404576362964924_4419922684127429465_n.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 3,
    imgUrl:
      "https://image.nhandan.vn/Uploaded/2024/rktmgt/2024_10_16/ndo_br_lao-dong-khuyet-ta-tai-xuong-may-o-hanoi-8936.jpg",
    title: "Việt Nam rất quan tâm đến công tác người khuyết tật",
    description:
      "Tại Hội nghị G7 về hòa nhập và người khuyết tật, Thứ trưởng Lao động-Thương binh và Xã hội Nguyễn Văn Hồi chia sẻ, Việt Nam rất quan tâm đến công tác người khuyết tật. Nhằm hiện thực hóa Hiến pháp và các cam kết quốc tế, Chính phủ đã trình Quốc hội ban hành nhiều luật và bộ luật quy định các chính sách đặc thù hỗ trợ người khuyết tật. Ủy ban Quốc gia về người khuyết tật Việt Nam cũng được thành lập, giúp Thủ tướng chỉ đạo giải quyết những vấn đề về công tác này.",
    dateTime: "Thứ tư, ngày 16/10/2024 - 20:16",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Hội thảo “Vai trò và đóng góp của người khuyết tật trong các Mục tiêu Phát triển bền vững” diễn ra tại Tòa nhà xanh Một Liên Hợp Quốc, Hà Nội, ngày 2 tháng 12.",
        content: `“Để thực hiện cam kết không để ai bị bỏ lại phía sau, điều quan trọng là phải đảm bảo sự tham gia đầy đủ và bình đẳng của người khuyết tật trong mọi lĩnh vực của xã hội. Điều quan trọng không kém là tạo ra môi trường thuận lợi bởi, cho và với người khuyết tật”.

Đây là thông điệp của Điều phối viên thường trú của LHQ tại Việt Nam bà Pauline Tamesis tại Hội thảo “Vai trò và đóng góp của người khuyết tật trong các Mục tiêu Phát triển bền vững” diễn ra tại Hà Nội ngày hôm nay`,
      },
      {
        id: 2,
        imageUrl:
          "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/9/24/base64-1695546345173983180724.png",
        descImage: "",

        content: `Hội thảo do UNDP, UNFPA, và UNICEF - ba cơ quan thực hiện dự án Đối tác của Liên hợp quốc về quyền của người khuyết tật (UNPRPD) đồng tổ chức, với sự tham gia của đại diện Bộ Lao động-Thương binh và Xã hội, Bộ Y tế. Bộ Giáo dục và Đào tạo, Bộ Văn hóa, Thể thao và Du lịch, Liên hiệp hội về người khuyết tật Việt Nam (VFD), các tổ chức của và vì người khuyết tật, các tổ chức phi chính phủ và các nhà nghiên cứu. Hội thảo nhằm mục đích khuyến khích các bên liên quan ghi nhận những đóng góp đặc biệt của người khuyết tật trong nỗ lực đẩy nhanh việc thực hiện các Mục tiêu phát triển bền vững (SDGs).

Năm nay đánh dấu kỷ niệm 30 năm Ngày Quốc tế Người khuyết tật (3/12). Chủ đề của năm nay là “Các giải pháp chuyển đổi để phát triển toàn diện: vai trò của đổi mới trong việc thúc đẩy một thế giới tiếp cận và bình đẳng”.

Năm nay cũng đánh dấu năm thứ tám kể từ khi Việt Nam phê chuẩn Công ước của Liên Hợp Quốc về Quyền của Người khuyết tật. Điều phối viên thường trú của LHQ đánh giá cao Việt Nam đã có những bước tiến lớn trong nỗ lực thúc đẩy quyền và sự hòa nhập của người khuyết tật. Theo Báo cáo quốc gia mới được trình lên Ủy ban về quyền của người khuyết tật của Liên hợp quốc, trong thập kỷ qua Việt Nam đã nỗ lực cải thiện khả năng tiếp cận của người khuyết tật. Ví dụ, nhiều tòa nhà và phương tiện giao thông công cộng đã được trang bị các phương tiện tiếp cận để đảm bảo sự tham gia bình đẳng cho tất cả mọi người.

Bà Tamesis nhận định: “Điều này không thể đạt được nếu không có sự cam kết và quyết tâm của chính phủ, cũng như sự tận tâm của các tổ chức đại diện cho người khuyết tật – đó là Liên hiệp hội về Người khuyết tật Việt Nam (VFD) và các tổ chức của và vì người khuyết tật, các viện nghiên cứu, xã hội dân sự, và các cơ quan thông tấn báo chí, truyền thông cũng như các đối tác khu vực tư nhân”.

Tuy nhiên, vẫn còn nhiều thách thức. Theo Báo cáo phân tích thực trạng toàn diện về Quyền của người khuyết tật ở Việt Nam, được LHQ công bố ngày 2 tháng 12 năm 2022 tại Việt Nam và trên toàn cầu, 17,8% người khuyết tật sống trong các hộ gia đình nghèo đa chiều, so với mức trung bình toàn quốc là 10,9%. Nhiều trường học, đặc biệt là ở khu vực nông thôn, vẫn còn thiếu cơ sở vật chất và giáo viên được đào tạo chuyên biệt cho trẻ em có nhu cầu đặc biệt trong lớp học. Và nhiều công ty chưa được trang bị cơ sở vật chất và công nghệ để có thể tuyển dụng người khuyết tật trong đội ngũ nhân viên của công ty.

“Với sự hỗ trợ thích hợp, các cán bộ là NKT của chúng tôi làm việc năng suất và hiệu quả như (đôi khi hơn) các đồng nghiệp khác,” Đại diện thường trú của UNDP bà Ramla Khalidi chia sẻ suy nghĩ của bà về hiệu suất làm việc của cán bộ là NKT tại UNDP. “Chúng ta không nên coi tuyển dụng NKT là hoạt động từ thiện, cũng không phải là một đặc ân, mà là đảm bảo quyền được làm việc, và điều này mang lại lợi ích cho tất cả mọi người.  Kiến thức, kỹ năng và quan điểm của các đồng nghiệp là NKT đã mang lại giá trị lớn cho việc thiết kế và thực hiện các chương trình của chúng tôi, trong các lĩnh vực liên quan đến chính phủ điện tử hoặc thiết kế dịch vụ công lấy người dùng làm trung tâm”.

Năm nay, dự án UNPRPD đã đóng một vai trò quan trọng trong việc thay đổi thái độ và xây dựng năng lực cho những người có ảnh hưởng chính sách và các nhà cung cấp dịch vụ, tư vấn về luật và chính sách thông qua nghiên cứu thực chứng, cũng như nâng cao nhận thức của cộng đồng về hòa nhập và bình đẳng cho người khuyết tật.

Trưởng đại diện UNFPA tại Việt Nam Naomi Kitahara nhấn mạnh: "Thanh niên khuyết tật phải được hưởng các quyền về sức khỏe sinh sản và tình dục cũng như quyền tự chủ về cơ thể và sống một cuộc sống không bị phân biệt đối xử hoặc bạo lực. LHQ tại Việt Nam cam kết hỗ trợ người khuyết tật hướng tới thế giới và Việt Nam tiếp cận và bình đẳng.”

Các đại biểu tham dự hội thảo đánh giá cao sự tham gia tích cực, sự kiên cường, và những đóng góp quan trọng của cộng đồng người khuyết tật trong sự nghiệp phát triển đất nước và trên và toàn cầu. Hội thảo sẽ đóng góp thúc đẩy các hành động hợp tác của các bên liên quan hướng tới một xã hội hòa nhập hơn, dễ tiếp cận hơn và không phân biệt đối xử cho người khuyết tật ở Việt Nam.`,
      },
    ],
  },
  {
    id: 4,
    imgUrl:
      "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/9/23/hang-tram-nguoi-tham-gia-chay-cung-nguoi-khuyet-tat-le-trung-2023-09023-20-16954338614242076196225.jpg",
    title:
      "Người khuyết tật cười giòn tan ở giải chạy 'Không khoảng cách - không giới hạn'",
    description:
      "Hàng trăm người khuyết tật đã tranh tài cùng nhau tại sự kiện chạy cùng người khuyết tật không khoảng cách - không giới hạn, mọi người đều nở một nụ cười giòn tan.",
    dateTime: "23-9",
    subContent: [
      {
        id: 1,
        imageUrl:
          "hhttps://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/9/23/hang-tram-nguoi-tham-gia-chay-cung-nguoi-khuyet-tat-le-trung-2023-09023-1-16954334751532052182465.jpg",
        descImage:
          "Hàng trăm người tham gia chạy cùng người khuyết tật - Ảnh: LÊ TRUNG",
        content: `Sáng 23-9, tại quảng trường 24-3 (TP Tam Kỳ, Quảng Nam), sự kiện thể thao chạy cùng người khuyết tật "Không khoảng cách - không giới hạn" được tổ chức.

Hơn 600 vận động viên dự giải
Sự kiện này nằm trong khuôn khổ các dự án "Tăng cường năng lực, nâng cao vị thế của người khuyết tật" và "Hòa nhập 1" do Cơ quan Phát triển quốc tế Hoa Kỳ (USAID) tài trợ.

Sự kiện do Sở Lao động - Thương binh và Xã hội Quảng Nam phối hợp với Viện Nghiên cứu phát triển cộng đồng (ACDC), Sở Văn hóa - Thể thao và Du lịch, Hội Người khuyết tật tỉnh Quảng Nam tổ chức, mang đến cho người tham gia nhiều cung bậc cảm xúc và trải nghiệm thú vị khi tham gia đường chạy.

Giải chạy này đã thu hút hơn 600 người tham gia, trong đó có hàng trăm vận động viên là người khuyết tật của ba tỉnh Thừa Thiên Huế, Quảng Trị và Quảng Nam.

`,
      },
      {
        id: 2,
        imageUrl:
          "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/9/23/hang-tram-nguoi-tham-gia-chay-cung-nguoi-khuyet-tat-le-trung-2023-09023-6-16954335986601900646621.jpg",
        descImage: "Người khuyết tật tham gia chạy bộ - Ảnh: LÊ TRUNG",
        content: `Bên cạnh đó, thông qua hoạt động chạy bộ, ban tổ chức sẽ huy động nguồn quỹ hỗ trợ cho người khuyết tật, trọng tâm là việc xây dựng các công trình tiếp cận tại tỉnh Quảng Nam, bao gồm xây dựng đường dốc và nhà vệ sinh tiếp cận cho người khuyết tật.

Thể thao giúp người khuyết tật hòa nhập
Đường chạy kéo dài 2km, xuất phát tại trung tâm quảng trường 24/3 (TP Tam Kỳ), chạy dọc tuyến đường Hùng Vương đến vòng xoay Hùng Vương - Lê Duẩn và ngược lại. Người tham gia lựa chọn đường chạy tùy thuộc vào khả năng của bản thân.

Ông Hoàng Lãng (63 tuổi, trú Quảng Trị), bị khuyết tật ở hai tay, chia sẻ rằng mình rất vui khi tham gia giải chạy này và sẽ thử sức ở cự ly 1.000m. "Tôi thấy vui lắm, đây là dịp để người khuyết tật gặp gỡ, giao lưu, cùng nhau rèn luyện sức khỏe", ông Lãng nói.

Một hình ảnh xúc động là trong hàng trăm vận động viên tham gia giải chạy, có rất nhiều người đi xe lăn, chống nạng gỗ tuy nhiên họ vẫn tham gia nhiệt tình.

Dù hai chân bị teo, phải dùng hai cây nạng để chống đi, nhưng anh Nguyễn Văn Quang (40 tuổi, trú TP Tam Kỳ) cho biết mình rất hào hứng khi tham gia giải chạy và thử sức ở cự ly 1.000m. "Dù đi lại bằng nạng rất khó khăn nhưng mình sẽ cố gắng hoàn thành tốt cự ly", anh Quang tâm sự.`,
      },
      {
        id: 3,
        imageUrl:
          "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/9/23/hang-tram-nguoi-tham-gia-chay-cung-nguoi-khuyet-tat-le-trung-2023-09023-10-16954336607251935813961.jpg",
        descImage:
          "Ông Lãng bị khuyết tật hai tay tham gia chạy bộ - Ảnh: LÊ TRUNG",
        content: `Bà Nguyễn Thị Lan Anh - viện trưởng Viện Nghiên cứu phát triển cộng đồng (ACDC) - cho biết đây là sự kiện rất ý nghĩa, lần đầu tiên ở Quảng Nam có một sự kiện chạy bộ để cho tất cả mọi người tăng vị thế của người khuyết tật. "Thông qua đó sự kiện còn gây quỹ để xây dựng đường dốc và nhà vệ sinh tiếp cận cho người khuyết tật, chúng tôi rất tự hào và vui khi tham dự", bà Lan Anh chia sẻ.

Ông Trần Anh Tuấn - phó chủ tịch UBND tỉnh Quảng Nam - chia sẻ rằng người khuyết tật tuy khuyết tật về cơ thể nhưng không bao giờ khuyết tật về trí tuệ, tinh thần.

Sự kiện ngày hôm nay cũng là một cách tiếp lửa, tiếp thêm ý chí cho những người khuyết tật, từng bước tháo dỡ đi những rào cản mà người khuyết tật đang phải đối mặt hằng ngày, trong tham gia hòa nhập cộng đồng, trong chia sẻ tình yêu thương, gắn kết khoảng cách bằng tình yêu thương.

Sự kiện chạy bộ cùng người khuyết tật mang nhiều thông điệp, ý nghĩa, chúng ta luôn đặc biệt quan tâm, ghi nhận sự đóng góp lớn lao của người khuyết tật và chúng ta phải làm sao tạo điều kiện tốt nhất để họ được hòa nhập, cống hiến, phát triển.

Được biết, tổng số tiền các đơn vị, tổ chức, cá nhân ủng hộ tại sự kiện này hơn 50 triệu đồng và 20 chiếc xe lăn.`,
      },
    ],
  },
  {
    id: 5,
    imgUrl:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/10/14/hoi-17288953346571749015430.jpg",
    title:
      "Việt Nam chia sẻ kinh nghiệm bảo vệ quyền của người khuyết tật với các nước G7",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...",
    dateTime: "15/10",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/10/14/hoi-17288953346571749015430.jpg",
        descImage:
          "Thứ trưởng Nguyễn Văn Hồi tặng quà các cháu thiếu nhi khuyết tật tại Trường Phục hồi chức năng và dạy nghề cho người khuyết tật Khoái Châu, tỉnh Hưng Yên",
        content: `Được sự đồng ý của Thủ tướng Chính phủ, nhận lời mời của bà Alessandra Locatelli, Bộ trưởng phụ trách Người khuyết tật Cộng hòa Italia, từ ngày 14-16/10, Đoàn công tác của Bộ Lao động -Thương binh và Xã hội do Thứ trưởng Nguyễn Văn Hồi, Phó Chủ tịch Ủy ban Quốc gia về người khuyết tật Việt Nam làm Trưởng đoàn tham dự Hội nghị Bộ trưởng các nước công nghiệp phát triển (G7) mở rộng về Bao trùm và Khuyết tật tại Italia.

Hội nghị Bộ trưởng G7 mở rộng về bao trùm và khuyết tật có ý nghĩa lịch sử khi lần đầu tiên Italia đưa ra sáng kiến thúc đẩy vấn đề người khuyết tật vào Chương trình nghị sự của G7. Đây sẽ là cơ hội để chia sẻ với G7 và các cơ quan, tổ chức liên quan về chiến lược và cam kết về người khuyết tật nhằm chống phân biệt đối xử và đảm bảo tất cả mọi người có quyền tham gia cuộc sống dân sự, xã hội, chính trị đầy đủ.

Ngoài các Bộ trưởng G7, nước chủ nhà Italia còn mời các Bộ trưởng đến từ 4 quốc gia khác bao gồm Chilê, Kenya, Tunisia và Việt Nam; Ủy ban Châu Âu (EC), Hiệp hội Phát triển Quốc tế (IDA) và Quỹ Bảo vệ Môi trường (EDF).

Bộ trưởng phụ trách về Người khuyết tật Italia, bà Alessandra Locatelli đánh giá cao Việt Nam là nước có nhiều thành tích nổi bật trong việc thúc đẩy, bảo vệ quyền và lợi ích của người khuyết tật, có nhiều điểm tương đồng với Italia trong lĩnh vực này và sẽ có những chia sẻ góp phần vào thành công của hội nghị.

Tại hội nghị, các Bộ trưởng G7 sẽ tập trung thảo luận về nhiều chủ đề liên quan đến người khuyết tật như: Bao trùm là ưu tiên trong chương trình nghị sự của các quốc gia; khả năng tiếp cận phổ quát và phòng chống, quản lý các tình huống khẩn cấp; cuộc sống tự lập và hòa nhập trong công việc; quyền của tất cả mọi người được tham gia đời sống dân sự, xã hội, chính trị đầy đủ; trí tuệ nhân tạo; thể thao và các dịch vụ cho tất cả mọi người. Dự kiến tại phiên bế mạc, Hội nghị sẽ thông qua Tuyên bố của các Bộ trưởng, gọi là Hiến chương Solfagnano.`,
      },
    ],
  },
  {
    id: 6,
    imgUrl:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/31/img5239-17171288818771501038993.jpg",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 31/5, nhân dịp Ngày Quốc tế Thiếu nhi 1/6 và Tháng hành động Vì Trẻ em 2024, Thủ tướng Phạm Minh Chính đã tới thăm, tặng quà các thầy cô giáo, các cháu học sinh đang theo học tại Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội (Trung tâm)",
    dateTime: "31/05",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/31/img5239-17171288818771501038993.jpg",
        descImage:
          "Nhân dịp Ngày Quốc tế Thiếu nhi 1/6 và Tháng hành động Vì Trẻ em 2024, Thủ tướng Phạm Minh Chính tới thăm, tặng quà các thầy cô giáo, các cháu học sinh đang theo học tại Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội",
        content: `Cùng đi với Thủ tướng Chính phủ có Bộ trưởng Bộ LĐTB&XH Đào Ngọc Dung, Chủ tịch UBND TP. Hà Nội Trần Sỹ Thanh, lãnh đạo một số bộ, ngành Trung ương và địa phương.

Là đơn vị sự nghiệp công lập thuộc Sở LĐTB&XH thành phố Hà Nội, Trung tâm Nuôi dưỡng trẻ khuyết tật hiện đang chăm sóc, nuôi dưỡng, phục hồi chức năng và dạy văn hóa, hướng nghiệp dạy nghề cho 130 trẻ khuyết tật đặc biệt nặng.

Hiện tại Trung tâm đang tổ chức 11 lớp học văn hóa (từ 9-15 cháu/lớp), trong đó có 8 lớp học văn hóa dành cho trẻ khiếm thính, 3 lớp cho trẻ chậm phát triển trí tuệ. Các cháu được hưởng chế độ nuôi dưỡng theo quy định của Thành phố mức 1.760.000 đồng/đối tượng/tháng và 350.000 đồng/đối tượng/tháng tiền chi khác.

Phát biểu tại đây, Thủ tướng Phạm Minh Chính bày tỏ vui mừng, xúc động tới thăm, gặp gỡ, trò chuyện với các thầy cô giáo, các cháu học sinh của Trung tâm - nơi chăm sóc, nuôi dưỡng, giáo dục và hướng nghiệp cho những học sinh kém may mắn, chịu nhiều thiệt thòi so với các bạn cùng trang lứa.

Thay mặt lãnh đạo Đảng, Nhà nước, thay mặt đồng chí Tổng Bí thư Nguyễn Phú Trọng, với những tình cảm thân thiết, Thủ tướng gửi tới các thầy cô giáo, cán bộ, công chức, viên chức, người lao động ngành giáo dục, cùng toàn thể các cháu học sinh, nhi đồng trên toàn quốc nói chung và các cháu học sinh, nhi đồng có hoàn cảnh đặc biệt nói riêng lời chào thân ái, lời thăm hỏi ân cần và lời chúc mừng tốt đẹp nhất; chúc các cháu học sinh sẽ có một kỳ nghỉ hè vui vẻ, an toàn, ý nghĩa và thú vị bên gia đình, người thân, thầy cô giáo và bạn bè.

"Trong không khí của những ngày đầu hè với tiếng ve kêu, hoa phượng đỏ, một kỳ nghỉ hè sôi động đầy trải nghiệm với những hoạt động bổ ích, hấp dẫn đang chờ đợi các cháu", Thủ tướng nói.

Thủ tướng nhấn mạnh, trẻ em là hạnh phúc của mỗi gia đình, là tương lai của đất nước. Chăm sóc, giáo dục và bảo vệ trẻ em là vấn đề có tính chiến lược, lâu dài, góp phần quan trọng vào việc chuẩn bị và nâng cao chất lượng nguồn nhân lực phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, xây dựng đất nước Việt Nam hùng cường, thịnh vượng, nhân dân Việt Nam ngày càng hạnh phúc và ấm no. Đầu tư cho trẻ em là đầu tư cho tương lai của đất nước, đầu tư cho sự phát triển lâu dài, bền vững, nhanh và mang lại hiệu quả cao. Làm tốt công tác này là trách nhiệm của các cấp ủy đảng, chính quyền, đoàn thể, gia đình, nhà trường và toàn xã hội.

Những năm qua, Đảng, Nhà nước ta luôn đặc biệt quan tâm công tác bảo vệ, chăm sóc trẻ em, tạo mọi điều kiện tốt nhất để trẻ em được phát triển toàn diện, có môi trường sống an toàn, lành mạnh; tôn trọng, lắng nghe, xem xét, phản hồi ý kiến, nguyện vọng của trẻ em; không phân biệt đối xử và bảo đảm lợi ích tốt nhất của trẻ em trong các quyết định liên quan; coi đây là vấn đề có tính chiến lược, lâu dài.

Đảng, Nhà nước hoàn thiện thể chế, cơ chế, chính sách về bảo vệ, chăm sóc trẻ em, tổ chức thực hiện thông suốt, đồng bộ, toàn diện từ Trung ương tới cấp cơ sở, huy động mọi nguồn lực, đầu tư cơ sở vật chất, giáo viên, giáo trình để các cháu học sinh có điều kiện học tập, trong đó các cháu khuyết tật được chăm sóc, giáo dục, có cơ hội vượt qua nghịch cảnh, phát huy tốt nhất khả năng của mình.

Các cấp, các ngành, các địa phương, các tổ chức xã hội, đoàn thể và nhân dân luôn quan tâm, đầu tư, chăm lo cho công tác giáo dục, bảo vệ, chăm sóc sức khỏe trẻ em, đặc biệt là đối với trẻ em nghèo, trẻ em có hoàn cảnh đặc biệt khó khăn, trẻ em khuyết tật, trẻ em mồ côi...

Thủ tướng khẳng định, sự quan tâm, chăm lo đó đã mang lại những kết quả rất tích cực, trẻ em khuyết tật được đặc biệt quan tâm, theo đúng tinh thần "không để ai bị bỏ lại phía sau", không hy sinh tiến bộ, công bằng và an sinh xã hội để chạy theo tăng trưởng kinh tế đơn thuần, lấy con người là trung tâm, là chủ thể, là mục tiêu, là động lực và nguồn lực phát triển.

Nguồn lực dành cho chăm sóc trẻ em khuyết tật được huy động từ cả ngân sách Nhà nước và những tấm lòng tốt đẹp của người dân, doanh nghiệp, toàn xã hội.

Nhiều địa phương, tiêu biểu là Hà Nội không chỉ thực hiện đầy đủ, kịp thời các cơ chế, chính sách cho trẻ em đặc biệt khó khăn, trẻ em khuyết tật theo quy định chung, mà còn chủ động ban hành các chính sách đặc thù mở rộng theo thẩm quyền để chăm sóc tốt hơn cho các cháu.

Nhiều trường học, cơ sở giáo dục nghề nghiệp chuyên biệt đã được xây dựng và đưa vào hoạt động nhằm cải thiện điều kiện học tập và chất lượng cuộc sống của trẻ em khuyết tật, với tấm lòng, tình cảm và cả sự hy sinh của các thầy cô giáo.

Đóng góp vào những kết quả nêu trên có vai trò của Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội, với nhiệm vụ tiếp nhận chăm sóc, nuôi dưỡng, phục hồi chức năng, dạy văn hóa và hướng nghiệp dạy nghề cho 130 cháu học sinh khuyết tật.

Qua báo cáo của lãnh đạo Trung tâm, Thủ tướng vui mừng được biết, mặc dù còn gặp nhiều khó khăn, thách thức, nhất là về cơ sở vật chất, thiết bị dạy học, nhưng các thầy cô giáo và các cháu học sinh đã rất nỗ lực, cố gắng để dạy tốt và học tốt.

Ngoài học văn hóa, các cháu còn được học tin học, được hướng nghiệp dạy nghề (hiện đang có nghệ nhân dạy các cháu làm hoa đất), dạy kỹ năng sống, kỹ năng tự phục vụ giúp các cháu hòa nhập cộng đồng. Bên cạnh đó, các cháu được chăm sóc tốt, được vui chơi, tham gia nhiều hoạt động thể thao, rèn luyện sức khỏe bổ ích và lý thú.

"Có thể nói, sau 46 năm hình thành và phát triển, Trung tâm đã trở thành ngôi nhà chung của các cháu học sinh, nhi đồng, trở thành mái ấm của trí thức, của tình yêu thương.

Mái ấm này chính là nơi các thầy cô giáo đã thực sự trở thành những người cha, người mẹ luôn bền bỉ, kiên trì, bao dung, vị tha, cảm thông, nhẫn nại, vừa dạy vừa dỗ, truyền đạt kiến thức, vừa bảo ban, vỗ về, động viên, chia sẻ với những khó khăn, thiệt thòi của các cháu.

Mái ấm này chính là nơi tiếp sức, truyền lửa, giúp các cháu không ngừng nỗ lực, cố gắng, bằng ý chí và nghị lực đã vượt qua nghịch cảnh để học tập tốt, rèn luyện tốt, trở thành con ngoan, trò giỏi, cháu ngoan Bác Hồ và nhanh chóng hòa nhập cộng đồng", Thủ tướng xúc động.

Thủ tướng rất vui mừng được biết, sau khi được nuôi dưỡng chăm sóc tại Trung tâm, có những cháu được gia đình cho đi học tiếp cấp THCS, có những cháu được các công ty, doanh nghiệp tiếp nhận dạy nghề và tạo việc làm với mức thu nhập từ 3 đến 10 triệu đồng/tháng.

Đây là những tín hiệu rất đáng mừng, thể hiện văn hóa, truyền thống nhân văn tốt đẹp của dân tộc ta, giúp cho trẻ em không được may mắn có cơ hội khẳng định mình và có những đóng góp nhất định cho xã hội; là minh chứng rõ nét, sống động cho lời dạy của Bác Hồ kính yêu: "Không có việc gì khó/Chỉ sợ lòng không bền/Đào núi và lấp biển/Quyết chí ắt làm nên".

Thay mặt Chính phủ, Thủ tướng đánh giá cao, biểu dương sự chung tay, góp sức của các cấp, các ngành, các địa phương, các tổ chức, cá nhân, doanh nghiệp, nhất là vai trò của Bộ GD&ĐT, Bộ LĐTB&XH trong công tác bảo vệ, chăm sóc trẻ em nói chung, trẻ em khuyết tật, có hoàn cảnh đặc biệt nói riêng.

Thủ tướng trân trọng và biểu dương những nỗ lực, kết quả đạt được của thầy, trò và cán bộ, người lao động tại Trung tâm; nhất là vai trò đặc biệt, tình thương yêu, lòng nhân ái, vị tha, kiên trì, bền bỉ, sự hy sinh của các thầy, các cô đối với các cháu học sinh.

Thủ tướng nêu rõ, giai đoạn phát triển mới đặt ra cho công tác về trẻ em nói chung, giáo dục trẻ khuyết tật nói riêng nhiều khó khăn, thách thức mới. Những rào cản của việc tiếp cận một nền giáo dục bình đẳng, có chất lượng đối với trẻ khuyết tật cần được tiếp tục quan tâm, giải quyết. "Khó khăn đến mấy, thách thức đến mấy cũng phải làm", Thủ tướng nhấn mạnh.

Thủ tướng nhấn mạnh, ghi nhớ và thấm nhuần lời dạy của Chủ tịch Hồ Chí Minh kính yêu: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"; để vượt qua những thách thức đó, chúng ta cần quyết tâm cao hơn, nỗ lực lớn hơn, hành động quyết liệt, thiết thực hơn, dành nhiều nguồn lực hơn để làm tốt công tác chăm sóc, giáo dục và bảo vệ trẻ em trong thời gian tới.

"Mỗi gia đình hãy thực sự là một mái ấm tràn ngập tình yêu thương để các cháu được quan tâm, chăm lo, cảm nhận sự an toàn và niềm hạnh phúc, cảm nhận được sự bình đẳng! Mỗi ngôi trường hãy là một mái nhà hạnh phúc, để 'mỗi ngày đến trường là một niềm vui', để các cháu được học tập, rèn luyện, giao lưu, trưởng thành và phát triển! Cả cộng đồng, xã hội chúng ta hãy hành động thiết thực với trách nhiệm cao nhất; với những tình cảm gần gũi, thân thương nhất; với cả tấm lòng và trái tim yêu thương! Hãy là chỗ dựa vững chắc, là nơi để các cháu gửi gắm niềm tin, yêu thương và tin tưởng vào tương lai của mình!", người đứng đầu Chính phủ chia sẻ.

Về một số nhiệm vụ, giải pháp cụ thể, Thủ tướng lưu ý một số trọng tâm, mà trước hết là tiếp tục triển khai hiệu quả các cơ chế, chính sách bảo vệ và chăm sóc trẻ em nói chung, giáo dục trẻ em nói riêng.

Trong đó, tập trung giải quyết có hiệu quả một số vấn đề như: Tình trạng thiếu cơ sở giáo dục, nhất là ở các thành phố lớn, khu công nghiệp; thừa, thiếu giáo viên cục bộ; hiện tượng giáo viên có những hành vi không đúng mực, bạo lực, xâm hại… đối với trẻ em; tình trạng sách giáo khoa còn những bất cập, trường tạm, điểm trường còn xa, điều kiện sinh hoạt, dạy và học của thầy và trò còn khó khăn ở các vùng sâu, vùng xa, biên giới, hải đảo.

Cùng với đó là vấn đề bảo đảm nhà vệ sinh, nước sạch, chế độ dinh dưỡng, an toàn thực phẩm tại bếp ăn của các trường học; những hiểm họa, như ma túy học đường, đuối nước, trò chơi bạo lực, tai nạn thương tích…; tình trạng thiếu nơi vui chơi giải trí an toàn, bổ ích, nhất là trong dịp hè để phòng ngừa, ngăn chặn những thông tin xấu độc, không trong sáng trên môi trường mạng, văn hóa ngoại lai, không chuẩn mực.

Thủ tướng yêu cầu đẩy mạnh triển khai các chủ trương, chính sách về người khuyết tật, trong đó có học sinh, nhi đồng khuyết tật. Bộ GD&ĐT tăng cường phối hợp với các bộ, cơ quan liên quan tập trung hoàn thành Quy hoạch hệ thống cơ sở giáo dục chuyên biệt đối với người khuyết tật và hệ thống trung tâm hỗ trợ phát triển giáo dục hòa nhập thời kỳ 2021-2030, tầm nhìn đến năm 2045, còn việc triển khai đầu tư có thể phân kỳ, phù hợp nguồn lực từng giai đoạn.

Chính quyền địa phương các cấp cần đẩy mạnh hợp tác công tư, thu hút các nguồn lực xã hội đầu tư cơ sở vật chất, trang thiết bị dạy và học đặc thù, như chữ nổi, thiết bị hỗ trợ khiếm thính, khiếm thị, tự kỷ, khuyết tật trí tuệ… cho học sinh. Tiếp tục quan tâm thực hiện đầy đủ các chính sách cho học sinh có hoàn cảnh đặc biệt.

UBND TP. Hà Nội đẩy nhanh tiến độ dự án "Cải tạo, nâng cấp Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội" để cải thiện nơi ở, học tập, sinh hoạt cho trẻ em của Trung tâm. Đồng thời, tiếp tục chỉ đạo để công tác nuôi dưỡng, chăm sóc, giáo dục, dạy nghề cho các cháu có hoàn cảnh đặc biệt, trẻ em khuyết tật ngày càng đi vào chiều sâu, hiệu quả, thực chất.

Thủ tướng mong muốn các thầy cô giáo của hệ thống các trường chuyên biệt nói chung và của Trung tâm nói riêng không ngừng nỗ lực vượt qua khó khăn, thách thức, tiếp tục chia sẻ, đồng cảm, thương yêu, dạy dỗ, chỉ bảo các cháu học sinh trở thành những công dân tốt, có ích cho xã hội.

Thủ tướng nhắc lại, sinh thời, Bác Hồ kính yêu đã gửi gắm niềm tin của mình đối với các cháu nhi đồng qua 4 câu thơ:

"Bác mong các cháu 'cho ngoan',

Mai sau gìn giữ giang san Lạc - Hồng.

Sao cho nổi tiếng Tiên - Rồng,

Sao cho tỏ mặt nhi đồng Việt Nam".

Thủ tướng mong các cháu hãy không ngừng cố gắng, kiên trì, quyết tâm, nghị lực; luôn nuôi dưỡng, ấp ủ những ước mơ, hoài bão, khao khát cháy bỏng để vượt qua nghịch cảnh, có được kiến thức và tay nghề giỏi, trở thành những công dân tốt, có ích cho xã hội.

"Các cháu hãy luôn lạc quan, tự tin, không mặc cảm vì sự khiếm khuyết, mà phải phấn đấu nhiều hơn nữa trong học tập, rèn luyện, nâng cao trí lực và thể lực; đồng thời, tạo động lực, truyền cảm hứng cho các bạn có hoàn cảnh tương tự, cùng tích cực tham gia dựng xây tương lai đất nước ta đàng hoàng hơn, to đẹp hơn, như Bác Hồ kính yêu hằng mong muốn. Các cháu hãy luôn nhớ rằng: Đảng, Nhà nước, gia đình, xã hội, thầy cô, nhà trường, bạn bè, xã hội luôn đồng hành, hỗ trợ, mong đợi và tin tưởng ở các cháu", Thủ tướng phát biểu.

Nhân dịp này, Thủ tướng đánh giá cao, trân trọng cảm ơn và mong muốn các tổ chức, cá nhân, các nhà hảo tâm trong và ngoài nước tiếp tục đồng hành, chia sẻ và có những hỗ trợ thiết thực, hiệu quả, thực tâm, thực lòng, thực chất cho việc chăm sóc, bảo vệ, giáo dục trẻ em khuyết tật, chung tay mang lại cho các cháu tình yêu thương và niềm hạnh phúc trong cuộc sống./.`,
      },
    ],
  },
  {
    id: 7,
    imgUrl:
      "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/hero_extended/public/children_with_disabilities_survey_cover.jpg.webp?itok=k4VBSlbQ",
    title: "Báo cáo về tình hình trẻ em khuyết tật ở Việt Nam",
    description:
      "Báo cáo thu thập dữ liệu về tình trạng trẻ em khuyết tật ở Việt Nam, đóng vai trò quan trọng trong việc thực thi, ban hành các chính sách cho trẻ.",
    dateTime: "Tháng 11 2018",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/hero_extended/public/children_with_disabilities_survey_cover.jpg.webp?itok=k4VBSlbQ",
        descImage: "",
        content: `Điểm nổi bật
Khuyết tật ở trẻ em khó xác định hơn ở người lớn do trẻ em đang trong quá trình phát triển. Ở mỗi độ tuổi, khả năng thực hiện những hoạt động như vận động, nhận thức, giao tiếp, chơi đùa, kết bạn, ứng xử và tập trung có thể khác nhau ở từng em nhưng không cần phải coi là vấn đề liên quan đến khuyết tật. Chính vì vậy, việc sử dụng công cụ phù hợp để xác định khuyết tật ở trẻ em là điều rất quan trọng. Cuộc Điều tra Quốc gia về Người Khuyết tật do Tổng Cục Thống kê thực hiện thành công năm 2016-2017 với sự hỗ trợ kỹ thuật của UNICEF đã sử dụng Bộ câu hỏi về chức năng của trẻ em để nhận dạng trẻ khuyết tật do Nhóm kỹ thuật Washington và UNICEF xây dựng năm 2016. Việt Nam là một trong số các quốc gia đầu tiên trên thế giới sử dụng bộ công cụ chuẩn quốc tế về xác định khuyết tật trẻ em. `,
      },
    ],
    day: "Ngày 31/05/2024",
  },
  {
    id: 8,
    imgUrl:
      "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/hero_extended/public/C55A0886.jpg.webp?itok=4QxE4dUG",
    title: "Giáo dục hòa nhập cho trẻ khuyết tật",
    description:
      "UNICEF nỗ lực nhằm đảm bảo trẻ em và thanh thiếu niên khuyết tật ở Việt Nam có thể tiếp cận và hưởng lợi từ giáo dục hòa nhập.",
    dateTime: "2 ngày trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/media_large_image/public/C55A0899.jpg.webp?itok=g0jig3Rq",
        descImage: "",
        content: `Vấn đề
Ước tính có khoảng nửa triệu trẻ khuyết tật sống ở Việt Nam. Những trẻ em này phải đối mặt với những thách thức đáng kể trong cuộc sống hàng ngày của họ và nhiều hình thức phân biệt đối xử, dẫn đến bị loại trừ khỏi xã hội và trường học. Trong khi mọi trẻ em đều có quyền được giáo dục, thái độ đối với trẻ em khuyết tật cũng như thiếu hiểu biết về nhu cầu của chúng sẽ kết hợp những thách thức mà chúng phải đối mặt khi đòi hỏi quyền này. Với việc tiếp cận với trường học một vấn đề chính, mối quan tâm bình đẳng là chưa đáp ứng đầy đủ của hệ thống giáo dục để đảm bảo giáo dục chất lượng cho trẻ khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "hhttps://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/media_large_image/public/C55A0937.jpg.webp?itok=H6Y3fWC0",
        descImage: "",
        content: `Vẫn còn rất nhiều trẻ em khuyết tật không được đến lớp, đặc biệt là ở lứa tuổi tiểu học hoặc trung học.

Hiện nay, những trẻ em này vẫn phải đối mặt với một số rào cản để giáo dục hòa nhập xa tầm với, đặc biệt là thiếu các cơ sở vật chất, trường chuyên biệt, chuyên ngành và đào tạo cho giáo viên và có nhiều khác biệt của định nghĩa về trẻ khuyết tật trong các lĩnh vực khác nhau. Tất cả các lý do nêu trên đã đưa ra một hệ quả là còn quá nhiều trẻ em khuyết tật không được tới lớp học, không hoàn thành trường tiểu học hoặc trung học và không được đòi quyền lợi cơ bản của các em là được tiếp cận một nền giáo dục có ý nghĩa.

Giải pháp
UNICEF tin rằng mọi trẻ em, bất kể tình trạng khuyết tật, ở Việt Nam đều có quyền đến trường học mà được nuôi dưỡng đầy đủ tiềm năng của mình để học hỏi trong cộng đồng của các em. Để đảm bảo giáo dục chất lượng và hòa nhập cho trẻ em khuyết tật, chúng tôi phối hợp với chính phủ và các đối tác để đạt được mục tiêu này thông qua các phương pháp tiếp cận dựa trên quyền bình đẳng trẻ em, lấy trẻ em làm trọng tâm. Nghiên cứu cho thấy giáo dục hòa nhập không chỉ mang lại kết quả học tập tốt hơn cho trẻ em khuyết tật mà còn cho tất cả trẻ em. Giáo dục hòa nhập thúc đẩy sự khoan dung và cho phép gắn kết xã hội vì nó thúc đẩy một nền văn hóa xã hội gắn kết và thúc đẩy sự tham gia bình đẳng trong xã hội.

Không có ngoại lệ và không có trẻ em bị bỏ lại phía sau.`,
      },
    ],
  },
  {
    id: 9,
    imgUrl:
      "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/hero_extended/public/DSC_0039_0.JPG.webp?itok=lOnO0yI0",
    title:
      "Cùng UNICEF đến trung tâm hỗ trợ giáo dục trẻ hòa nhập cộng đồng tỉnh Ninh Thuận",
    description:
      "UNICEF hỗ trợ chuẩn bị cho trẻ khuyết tật cùng như các trẻ khó hòa nhập cộng đồng có thể đến học ở các trường phổ thông như một đứa trẻ bình thường.",
    dateTime: "04 Tháng 12 2016",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/media_large_image/public/DSC_0050.JPG.webp?itok=mEwN5kK_",
        descImage:
          "Cô Đoàn Thị Thanh Thủy, giáo viên của TT GDHN với dụng cụ học tập tự làm theo hướng dẫn tại các tập huấn do UNICEF hỗ trợ",
        content: `Bé Hà Phúc Nguyên mắc bệnh rối loạn tổng quát
Bé Hà Phúc Nguyên được chẩn đoán mắc chứng rối loạn tổng quát hơn hai năm trước. Nguyên được ba mẹ đưa đi chữa bệnh ở TP Hồ Chí Minh, cách nhà gần nghìn cây số. Tuy nhiên, gia đình chỉ có thể cho em điều trị ở đó vài tháng vì chi phí sinh hoạt ở thành phố lớn rất đắt đỏ.

Với mong muốn tìm kiếm phương pháp điều trị cho Nguyên tại nhà, mẹ em đã tham gia thảo luận tại một nhóm về trẻ tự kỷ trên Facebook. Thông qua nhóm này, mẹ em được giới thiệu đến một trung tâm mới thành lập ở ngay ở thành phố bên cạnh, cách nhà không xa, nơi có những dịch vụ chuyên biệt cho trẻ tự kỷ.

Từ nhà đến trung tâm đi xe buýt mất khoảng một tiếng rưỡi, mẹ đưa em đến đó tuần hai lần. Tại đó, em được điều trị còn mẹ được hướng dẫn cách thức tập với em ở nhà. Sau vài tháng Nguyên tiến bộ rõ rệt. “Con đã giao tiếp được qua ánh mắt, thể hiện tình cảm, chỉ tay vào đồ vật mà con muốn, bắt chước những điệu bộ, động tác đơn giản, chơi với đồ chơi. Đối với các bé khác điều này có vẻ dễ dàng, nhưng với con là một sự tiến bộ vượt bậc”, mẹ cháu chia sẻ.

Thắng - cậu bé có biểu hiện tự kỷ, khó hòa nhập cộng đồng khi 1 tuổi
Cũng giống Nguyên, Thắng có những biểu hiện của tự kỷ từ khi mới một tuổi. Nhưng em phải đợi thêm sáu năm nữa mới được điều trị vì không có một cơ sở hay dịch vụ nào cho trẻ tự kỷ ở gần nhà em.

Từ khi trung tâm mới được thành lập, ba em đưa em đến đó hai lần một tuần. Tại trung tâm em được tập các bài tập giúp tăng sự tập trung, cải thiện giao tiếp, bộc lộ cảm xúc và ý nghĩ. “Vì cháu bắt đầu muộn quá nên phải rất lâu mới thấy các bài tập có tác dụng”, cô Đoàn Thị Thanh Thủy, giáo viên của trung tâm chia sẻ.

Bé Vi, cô bé vừa lọt lòng đã bị khiếm thính
Hồ Tường Vi, 14 tuổi, còn phải đợi lâu hơn mới nhận được các hỗ trợ cần thiết giúp khắc phục khuyết tật. Bị khiếm thính từ khi mới lọt lòng, Vi cũng không nói được. Em không được đi học một cách chính thức vì các thầy cô giáo không biết cách dạy các trẻ em có nhu cầu đặc biệt. Tuy nhiên, em được phép ngồi cạnh em gái trong suốt các năm tiểu học.

Mặc dù rất vui vì được ở bên em gái và các bạn học, nhưng Vi thường không hiểu được các bạn trong lớp trò chuyện những gì. Giờ thì em gái lại đưa chị đến trung tâm một tuần hai lần để học ngôn ngữ ký hiệu. “Em muốn học cùng chị Vi để có thể giao tiếp với chị tốt hơn”, em gái của Vi chia sẻ.

Vận động chính sách cho giáo dục hòa nhập
Thiếu các dịch vụ chuyên nghiệp để phát hiện khuyết tật, lựa chọn phương thức can thiệp hỗ trợ phù hợp trong những năm đầu đời đã làm hạn chế cơ hội của trẻ khuyết tật được tiếp cận với giáo dục phổ thông.

Hiện nay, hơn 70% trẻ khuyết tật trong độ tuổi đi học ở Việt Nam không được đến trường. Phần lớn các trường học ở các cấp mẫu giáo, tiểu học, trung học cơ sở đều không có cơ sở vật chất và các trang thiết bị phù hợp cho trẻ khuyết tật. Giáo viên chưa được đào tạo để đảm bảo môi trường sư phạm hòa nhập và không có các kỹ năng cần thiết để phát hiện và thực hiện các phương thức giáo dục phù hợp để đáp ứng nhu cầu đặc biệt của trẻ khuyết tật.

Trung tâm hỗ trợ giáo dục hòa nhập (TT GDHN) đã chứng tỏ tính hiệu quả trong việc chuẩn bị cho trẻ khuyết tật hòa nhập vào các trường phổ thông cùng với các trẻ khác. Trung tâm cung cấp các dịch vụ khám sàng lọc và can thiệp sớm cho trẻ khuyết tật cũng như hướng dẫn và định hướng cho cha mẹ và các thầy cô giáo.

UNICEF Hợp tác kêu gọi hỗ trợ giáo dục trẻ em hòa nhập cộng đồng
UNICEF đã hợp tác chặt chẽ với các đối tác trong nước, ở cả cấp trung ương và địa phương, khuyến khích thành lập các trung tâm hỗ trợ giáo dục hòa nhập như trung tâm ở Ninh Thuận. UNICEF tập trung vào tiến hành các nghiên cứu với các viện khoa học để có được các thông tin chính xác cung cấp cho quá trình xây dựng chính sách vì phúc lợi của trẻ khuyết tật.

Năm 2014, Chính phủ đã ra văn bản quy định việc thành lập các trung tâm giáo dục hòa nhập và gần đây vào tháng 6 năm 2016, Chính phủ đã ra một Thông tư liên bộ quy định vai trò của các cán bộ nhân viên hỗ trợ giáo dục cho người khuyết tật. Mặc dù hiện nay quyết định thành lập TT GDHN đã thuộc thẩm quyền cấp tỉnh, nhưng cho tới nay, chỉ có 14 trung tâm được thành lập trong cả nước, con số quá nhỏ để có thể đáp ứng nhu cầu của 1.3 triệu trẻ khuyết tật ở Việt Nam.`,
      },
      {
        id: 2,
        imageUrl:
          "https://www.unicef.org/vietnam/sites/unicef.org.vietnam/files/styles/press_release_feature/public/UNI655265.webp?itok=j9BOoQ3x",
        descImage: "",
        content: `Trung tâm giáo dục hòa nhập tỉnh Ninh Thuận thực thi từ chính sách đến thực tiễn
Nguyên, Thắng và Vi là những học sinh đầu tiên được sử dụng các dịch vụ của TT GDHN ở Ninh Thuận. Đây là một trong những tỉnh nghèo thuộc miền Duyên hải Nam trung bộ Việt Nam.

Được đưa vào hoạt động từ năm 2015, trung tâm đã cung cấp các dịch vụ cho trẻ khuyết tật như phát hiện khuyết tật, can thiệp sớm, tư vấn cho cha mẹ, đào tạo giáo viên, nâng cao nhận thức của cộng đồng. Trung tâm xây dựng trên khu đất rộng 20,000m2 với đội ngũ 15 cán bộ công nhân viên bằng ngân sách của tỉnh, trung tâm cung cấp dịch vụ cho trẻ khuyết tật trên địa bàn Ninh Thuận và các vùng lân cận.

UNICEF đã hỗ trợ Ninh Thuận trong việc thành lập TT GDHN ngay từ những bước đầu tiên, từ việc vận động thành lập trung tâm, vận động các bên liên quan cùng vào cuộc, hỗ trợ kỹ thuật, xây dựng năng lực cho các giáo viên và cán bộ nhân viên của trung tâm.

Ông Youssouf Abdel-Jelil, Đại diện UNICEF phát biểu: “TT GDHN Ninh Thuận là một ví dụ tốt cho thấy các chính sách và cam kết ở cấp trung ương được áp dụng như thế nào ở địa phương. Ở cấp trung ương, UNICEF hỗ trợ xây dựng chính sách, cải cách luật pháp và cải thiện các dịch vụ xã hội. UNICEF cũng giúp nâng cao năng lực và áp dụng các chính sách quốc gia tại địa phương một cách phù hợp và bền vững. TT GDHN Ninh Thuận có khả năng trở thành một mô hình tốt có thể nhân rộng ra các tỉnh khác”`,
      },
    ],
  },
  {
    id: 10,
    imgUrl:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/31/img5239-17171288818771501038993.jpg",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 31/5, nhân dịp Ngày Quốc tế Thiếu nhi 1/6 và Tháng hành động Vì Trẻ em 2024, Thủ tướng Phạm Minh Chính đã tới thăm, tặng quà các thầy cô giáo, các cháu học sinh đang theo học tại Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội (Trung tâm)",
    dateTime: "31/05",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/31/img5239-17171288818771501038993.jpg",
        descImage:
          "Nhân dịp Ngày Quốc tế Thiếu nhi 1/6 và Tháng hành động Vì Trẻ em 2024, Thủ tướng Phạm Minh Chính tới thăm, tặng quà các thầy cô giáo, các cháu học sinh đang theo học tại Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội",
        content: `Cùng đi với Thủ tướng Chính phủ có Bộ trưởng Bộ LĐTB&XH Đào Ngọc Dung, Chủ tịch UBND TP. Hà Nội Trần Sỹ Thanh, lãnh đạo một số bộ, ngành Trung ương và địa phương.

Là đơn vị sự nghiệp công lập thuộc Sở LĐTB&XH thành phố Hà Nội, Trung tâm Nuôi dưỡng trẻ khuyết tật hiện đang chăm sóc, nuôi dưỡng, phục hồi chức năng và dạy văn hóa, hướng nghiệp dạy nghề cho 130 trẻ khuyết tật đặc biệt nặng.

Hiện tại Trung tâm đang tổ chức 11 lớp học văn hóa (từ 9-15 cháu/lớp), trong đó có 8 lớp học văn hóa dành cho trẻ khiếm thính, 3 lớp cho trẻ chậm phát triển trí tuệ. Các cháu được hưởng chế độ nuôi dưỡng theo quy định của Thành phố mức 1.760.000 đồng/đối tượng/tháng và 350.000 đồng/đối tượng/tháng tiền chi khác.

Phát biểu tại đây, Thủ tướng Phạm Minh Chính bày tỏ vui mừng, xúc động tới thăm, gặp gỡ, trò chuyện với các thầy cô giáo, các cháu học sinh của Trung tâm - nơi chăm sóc, nuôi dưỡng, giáo dục và hướng nghiệp cho những học sinh kém may mắn, chịu nhiều thiệt thòi so với các bạn cùng trang lứa.

Thay mặt lãnh đạo Đảng, Nhà nước, thay mặt đồng chí Tổng Bí thư Nguyễn Phú Trọng, với những tình cảm thân thiết, Thủ tướng gửi tới các thầy cô giáo, cán bộ, công chức, viên chức, người lao động ngành giáo dục, cùng toàn thể các cháu học sinh, nhi đồng trên toàn quốc nói chung và các cháu học sinh, nhi đồng có hoàn cảnh đặc biệt nói riêng lời chào thân ái, lời thăm hỏi ân cần và lời chúc mừng tốt đẹp nhất; chúc các cháu học sinh sẽ có một kỳ nghỉ hè vui vẻ, an toàn, ý nghĩa và thú vị bên gia đình, người thân, thầy cô giáo và bạn bè.

"Trong không khí của những ngày đầu hè với tiếng ve kêu, hoa phượng đỏ, một kỳ nghỉ hè sôi động đầy trải nghiệm với những hoạt động bổ ích, hấp dẫn đang chờ đợi các cháu", Thủ tướng nói.

Thủ tướng nhấn mạnh, trẻ em là hạnh phúc của mỗi gia đình, là tương lai của đất nước. Chăm sóc, giáo dục và bảo vệ trẻ em là vấn đề có tính chiến lược, lâu dài, góp phần quan trọng vào việc chuẩn bị và nâng cao chất lượng nguồn nhân lực phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, xây dựng đất nước Việt Nam hùng cường, thịnh vượng, nhân dân Việt Nam ngày càng hạnh phúc và ấm no. Đầu tư cho trẻ em là đầu tư cho tương lai của đất nước, đầu tư cho sự phát triển lâu dài, bền vững, nhanh và mang lại hiệu quả cao. Làm tốt công tác này là trách nhiệm của các cấp ủy đảng, chính quyền, đoàn thể, gia đình, nhà trường và toàn xã hội.

Những năm qua, Đảng, Nhà nước ta luôn đặc biệt quan tâm công tác bảo vệ, chăm sóc trẻ em, tạo mọi điều kiện tốt nhất để trẻ em được phát triển toàn diện, có môi trường sống an toàn, lành mạnh; tôn trọng, lắng nghe, xem xét, phản hồi ý kiến, nguyện vọng của trẻ em; không phân biệt đối xử và bảo đảm lợi ích tốt nhất của trẻ em trong các quyết định liên quan; coi đây là vấn đề có tính chiến lược, lâu dài.

Đảng, Nhà nước hoàn thiện thể chế, cơ chế, chính sách về bảo vệ, chăm sóc trẻ em, tổ chức thực hiện thông suốt, đồng bộ, toàn diện từ Trung ương tới cấp cơ sở, huy động mọi nguồn lực, đầu tư cơ sở vật chất, giáo viên, giáo trình để các cháu học sinh có điều kiện học tập, trong đó các cháu khuyết tật được chăm sóc, giáo dục, có cơ hội vượt qua nghịch cảnh, phát huy tốt nhất khả năng của mình.

Các cấp, các ngành, các địa phương, các tổ chức xã hội, đoàn thể và nhân dân luôn quan tâm, đầu tư, chăm lo cho công tác giáo dục, bảo vệ, chăm sóc sức khỏe trẻ em, đặc biệt là đối với trẻ em nghèo, trẻ em có hoàn cảnh đặc biệt khó khăn, trẻ em khuyết tật, trẻ em mồ côi...

Thủ tướng khẳng định, sự quan tâm, chăm lo đó đã mang lại những kết quả rất tích cực, trẻ em khuyết tật được đặc biệt quan tâm, theo đúng tinh thần "không để ai bị bỏ lại phía sau", không hy sinh tiến bộ, công bằng và an sinh xã hội để chạy theo tăng trưởng kinh tế đơn thuần, lấy con người là trung tâm, là chủ thể, là mục tiêu, là động lực và nguồn lực phát triển.

Nguồn lực dành cho chăm sóc trẻ em khuyết tật được huy động từ cả ngân sách Nhà nước và những tấm lòng tốt đẹp của người dân, doanh nghiệp, toàn xã hội.

Nhiều địa phương, tiêu biểu là Hà Nội không chỉ thực hiện đầy đủ, kịp thời các cơ chế, chính sách cho trẻ em đặc biệt khó khăn, trẻ em khuyết tật theo quy định chung, mà còn chủ động ban hành các chính sách đặc thù mở rộng theo thẩm quyền để chăm sóc tốt hơn cho các cháu.

Nhiều trường học, cơ sở giáo dục nghề nghiệp chuyên biệt đã được xây dựng và đưa vào hoạt động nhằm cải thiện điều kiện học tập và chất lượng cuộc sống của trẻ em khuyết tật, với tấm lòng, tình cảm và cả sự hy sinh của các thầy cô giáo.

Đóng góp vào những kết quả nêu trên có vai trò của Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội, với nhiệm vụ tiếp nhận chăm sóc, nuôi dưỡng, phục hồi chức năng, dạy văn hóa và hướng nghiệp dạy nghề cho 130 cháu học sinh khuyết tật.

Qua báo cáo của lãnh đạo Trung tâm, Thủ tướng vui mừng được biết, mặc dù còn gặp nhiều khó khăn, thách thức, nhất là về cơ sở vật chất, thiết bị dạy học, nhưng các thầy cô giáo và các cháu học sinh đã rất nỗ lực, cố gắng để dạy tốt và học tốt.

Ngoài học văn hóa, các cháu còn được học tin học, được hướng nghiệp dạy nghề (hiện đang có nghệ nhân dạy các cháu làm hoa đất), dạy kỹ năng sống, kỹ năng tự phục vụ giúp các cháu hòa nhập cộng đồng. Bên cạnh đó, các cháu được chăm sóc tốt, được vui chơi, tham gia nhiều hoạt động thể thao, rèn luyện sức khỏe bổ ích và lý thú.

"Có thể nói, sau 46 năm hình thành và phát triển, Trung tâm đã trở thành ngôi nhà chung của các cháu học sinh, nhi đồng, trở thành mái ấm của trí thức, của tình yêu thương.

Mái ấm này chính là nơi các thầy cô giáo đã thực sự trở thành những người cha, người mẹ luôn bền bỉ, kiên trì, bao dung, vị tha, cảm thông, nhẫn nại, vừa dạy vừa dỗ, truyền đạt kiến thức, vừa bảo ban, vỗ về, động viên, chia sẻ với những khó khăn, thiệt thòi của các cháu.

Mái ấm này chính là nơi tiếp sức, truyền lửa, giúp các cháu không ngừng nỗ lực, cố gắng, bằng ý chí và nghị lực đã vượt qua nghịch cảnh để học tập tốt, rèn luyện tốt, trở thành con ngoan, trò giỏi, cháu ngoan Bác Hồ và nhanh chóng hòa nhập cộng đồng", Thủ tướng xúc động.

Thủ tướng rất vui mừng được biết, sau khi được nuôi dưỡng chăm sóc tại Trung tâm, có những cháu được gia đình cho đi học tiếp cấp THCS, có những cháu được các công ty, doanh nghiệp tiếp nhận dạy nghề và tạo việc làm với mức thu nhập từ 3 đến 10 triệu đồng/tháng.

Đây là những tín hiệu rất đáng mừng, thể hiện văn hóa, truyền thống nhân văn tốt đẹp của dân tộc ta, giúp cho trẻ em không được may mắn có cơ hội khẳng định mình và có những đóng góp nhất định cho xã hội; là minh chứng rõ nét, sống động cho lời dạy của Bác Hồ kính yêu: "Không có việc gì khó/Chỉ sợ lòng không bền/Đào núi và lấp biển/Quyết chí ắt làm nên".

Thay mặt Chính phủ, Thủ tướng đánh giá cao, biểu dương sự chung tay, góp sức của các cấp, các ngành, các địa phương, các tổ chức, cá nhân, doanh nghiệp, nhất là vai trò của Bộ GD&ĐT, Bộ LĐTB&XH trong công tác bảo vệ, chăm sóc trẻ em nói chung, trẻ em khuyết tật, có hoàn cảnh đặc biệt nói riêng.

Thủ tướng trân trọng và biểu dương những nỗ lực, kết quả đạt được của thầy, trò và cán bộ, người lao động tại Trung tâm; nhất là vai trò đặc biệt, tình thương yêu, lòng nhân ái, vị tha, kiên trì, bền bỉ, sự hy sinh của các thầy, các cô đối với các cháu học sinh.

Thủ tướng nêu rõ, giai đoạn phát triển mới đặt ra cho công tác về trẻ em nói chung, giáo dục trẻ khuyết tật nói riêng nhiều khó khăn, thách thức mới. Những rào cản của việc tiếp cận một nền giáo dục bình đẳng, có chất lượng đối với trẻ khuyết tật cần được tiếp tục quan tâm, giải quyết. "Khó khăn đến mấy, thách thức đến mấy cũng phải làm", Thủ tướng nhấn mạnh.

Thủ tướng nhấn mạnh, ghi nhớ và thấm nhuần lời dạy của Chủ tịch Hồ Chí Minh kính yêu: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"; để vượt qua những thách thức đó, chúng ta cần quyết tâm cao hơn, nỗ lực lớn hơn, hành động quyết liệt, thiết thực hơn, dành nhiều nguồn lực hơn để làm tốt công tác chăm sóc, giáo dục và bảo vệ trẻ em trong thời gian tới.

"Mỗi gia đình hãy thực sự là một mái ấm tràn ngập tình yêu thương để các cháu được quan tâm, chăm lo, cảm nhận sự an toàn và niềm hạnh phúc, cảm nhận được sự bình đẳng! Mỗi ngôi trường hãy là một mái nhà hạnh phúc, để 'mỗi ngày đến trường là một niềm vui', để các cháu được học tập, rèn luyện, giao lưu, trưởng thành và phát triển! Cả cộng đồng, xã hội chúng ta hãy hành động thiết thực với trách nhiệm cao nhất; với những tình cảm gần gũi, thân thương nhất; với cả tấm lòng và trái tim yêu thương! Hãy là chỗ dựa vững chắc, là nơi để các cháu gửi gắm niềm tin, yêu thương và tin tưởng vào tương lai của mình!", người đứng đầu Chính phủ chia sẻ.

Về một số nhiệm vụ, giải pháp cụ thể, Thủ tướng lưu ý một số trọng tâm, mà trước hết là tiếp tục triển khai hiệu quả các cơ chế, chính sách bảo vệ và chăm sóc trẻ em nói chung, giáo dục trẻ em nói riêng.

Trong đó, tập trung giải quyết có hiệu quả một số vấn đề như: Tình trạng thiếu cơ sở giáo dục, nhất là ở các thành phố lớn, khu công nghiệp; thừa, thiếu giáo viên cục bộ; hiện tượng giáo viên có những hành vi không đúng mực, bạo lực, xâm hại… đối với trẻ em; tình trạng sách giáo khoa còn những bất cập, trường tạm, điểm trường còn xa, điều kiện sinh hoạt, dạy và học của thầy và trò còn khó khăn ở các vùng sâu, vùng xa, biên giới, hải đảo.

Cùng với đó là vấn đề bảo đảm nhà vệ sinh, nước sạch, chế độ dinh dưỡng, an toàn thực phẩm tại bếp ăn của các trường học; những hiểm họa, như ma túy học đường, đuối nước, trò chơi bạo lực, tai nạn thương tích…; tình trạng thiếu nơi vui chơi giải trí an toàn, bổ ích, nhất là trong dịp hè để phòng ngừa, ngăn chặn những thông tin xấu độc, không trong sáng trên môi trường mạng, văn hóa ngoại lai, không chuẩn mực.

Thủ tướng yêu cầu đẩy mạnh triển khai các chủ trương, chính sách về người khuyết tật, trong đó có học sinh, nhi đồng khuyết tật. Bộ GD&ĐT tăng cường phối hợp với các bộ, cơ quan liên quan tập trung hoàn thành Quy hoạch hệ thống cơ sở giáo dục chuyên biệt đối với người khuyết tật và hệ thống trung tâm hỗ trợ phát triển giáo dục hòa nhập thời kỳ 2021-2030, tầm nhìn đến năm 2045, còn việc triển khai đầu tư có thể phân kỳ, phù hợp nguồn lực từng giai đoạn.

Chính quyền địa phương các cấp cần đẩy mạnh hợp tác công tư, thu hút các nguồn lực xã hội đầu tư cơ sở vật chất, trang thiết bị dạy và học đặc thù, như chữ nổi, thiết bị hỗ trợ khiếm thính, khiếm thị, tự kỷ, khuyết tật trí tuệ… cho học sinh. Tiếp tục quan tâm thực hiện đầy đủ các chính sách cho học sinh có hoàn cảnh đặc biệt.

UBND TP. Hà Nội đẩy nhanh tiến độ dự án "Cải tạo, nâng cấp Trung tâm Nuôi dưỡng trẻ khuyết tật Hà Nội" để cải thiện nơi ở, học tập, sinh hoạt cho trẻ em của Trung tâm. Đồng thời, tiếp tục chỉ đạo để công tác nuôi dưỡng, chăm sóc, giáo dục, dạy nghề cho các cháu có hoàn cảnh đặc biệt, trẻ em khuyết tật ngày càng đi vào chiều sâu, hiệu quả, thực chất.

Thủ tướng mong muốn các thầy cô giáo của hệ thống các trường chuyên biệt nói chung và của Trung tâm nói riêng không ngừng nỗ lực vượt qua khó khăn, thách thức, tiếp tục chia sẻ, đồng cảm, thương yêu, dạy dỗ, chỉ bảo các cháu học sinh trở thành những công dân tốt, có ích cho xã hội.

Thủ tướng nhắc lại, sinh thời, Bác Hồ kính yêu đã gửi gắm niềm tin của mình đối với các cháu nhi đồng qua 4 câu thơ:

"Bác mong các cháu 'cho ngoan',

Mai sau gìn giữ giang san Lạc - Hồng.

Sao cho nổi tiếng Tiên - Rồng,

Sao cho tỏ mặt nhi đồng Việt Nam".

Thủ tướng mong các cháu hãy không ngừng cố gắng, kiên trì, quyết tâm, nghị lực; luôn nuôi dưỡng, ấp ủ những ước mơ, hoài bão, khao khát cháy bỏng để vượt qua nghịch cảnh, có được kiến thức và tay nghề giỏi, trở thành những công dân tốt, có ích cho xã hội.

"Các cháu hãy luôn lạc quan, tự tin, không mặc cảm vì sự khiếm khuyết, mà phải phấn đấu nhiều hơn nữa trong học tập, rèn luyện, nâng cao trí lực và thể lực; đồng thời, tạo động lực, truyền cảm hứng cho các bạn có hoàn cảnh tương tự, cùng tích cực tham gia dựng xây tương lai đất nước ta đàng hoàng hơn, to đẹp hơn, như Bác Hồ kính yêu hằng mong muốn. Các cháu hãy luôn nhớ rằng: Đảng, Nhà nước, gia đình, xã hội, thầy cô, nhà trường, bạn bè, xã hội luôn đồng hành, hỗ trợ, mong đợi và tin tưởng ở các cháu", Thủ tướng phát biểu.

Nhân dịp này, Thủ tướng đánh giá cao, trân trọng cảm ơn và mong muốn các tổ chức, cá nhân, các nhà hảo tâm trong và ngoài nước tiếp tục đồng hành, chia sẻ và có những hỗ trợ thiết thực, hiệu quả, thực tâm, thực lòng, thực chất cho việc chăm sóc, bảo vệ, giáo dục trẻ em khuyết tật, chung tay mang lại cho các cháu tình yêu thương và niềm hạnh phúc trong cuộc sống./.`,
      },
    ],
  },
];
