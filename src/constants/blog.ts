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
          "https://th.bing.com/th/id/OIP.u0zKHmBGLC7Ob34dKtckxQHaFj?rs=1&pid=ImgDetMain",
        descImage: "",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
        descImage: "",
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
    ],
  },
  {
    id: 4,
    author: "user04",
    thumnail:
      "https://www.kymviet.com.vn/R%E1%BA%AFn%20trong%20v%C4%83n%20h%C3%B3a%20c%E1%BB%95%20truy%E1%BB%81n%20Vi%E1%BB%87t%20Nam.jpg",
    title: "KHÁM PHÁ LINH VẬT RẮN ĐẠI DIỆN CON GIÁP CỦA NĂM ẤT TỊ 2025",
    description:
      "Theo quan niệm Á Đông, Rắn là biểu tượng của sự ẩn giấu . . .",
    dateTime: "",
    day: "25/10/2024 10:46 AM",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.kymviet.com.vn/z5875960972075_6e4c35a6b78b4c413b8ce0123bd35bae.jpg",
        descImage: "",
        content: `Rắn trong văn hóa Việt:Là biểu tượng của sự bảo vệ và tăng cường tài vận. Trưng bày mô hình rắn không chỉ tăng cường yếu tố phong thủy mà còn thể hiện sự tôn trọng văn hóa truyền thống
        `,
      },
      {
        id: 2,
        imageUrl:
          "https://www.kymviet.com.vn/z5875960993787_377bb992b7b5d6a277daceead2663a6c.jpg",
        descImage: "",
        content: `Văn hóa rắn tăng cư��ng phong thủy: Trong phong thủy, rắn đại diện cho sự bảo vệ và tăng cư��ng tài vận.
        `,
      },
      {
        id: 3,
        imageUrl:
          "https://www.kymviet.com.vn/z5875984794514_765d73062e088f456117750b95175da8.jpg",
        descImage: "",
        content: `Văn hóa rắn thể hiện sự tôn trọng văn hóa truyền thống và giúp học sinh sinh viên học tốt và thành công.`,
      },
    ],
  },
  {
    id: 5,
    author: "user08",
    thumnail: "https://www.kymviet.com.vn/1-7.jpg",
    title:
      "Tìm hiểu hoạt động trải nghiệm giáo dục bổ ích cho học sinh sinh viên tại Hà nội",
    description: "Hoạt động trải nghiệm giáo dục cho học sinh sinh viên là gì?",
    dateTime: "18 ngày trước",
    day: "06/06/2024",
    subContent: [
      {
        id: 1,
        imageUrl: "https://www.kymviet.com.vn/1-7.jpg",
        descImage: "",
        content: `Tại sao hoạt động trải nghiệm giáo dục lại quan trọng?

Rèn luyện kỹ năng: Giúp học sinh sinh viên rèn luyện các kỹ năng mềm cần thiết cho công việc và cuộc sống sau này.
Mở rộng kiến thức: Cung cấp cơ hội tiếp xúc với môi trường thực tế, giúp học sinh sinh viên mở rộng hiểu biết và khám phá những điều mới mẻ.
Phát triển tư duy: Khuyến khích học sinh sinh viên tư duy độc lập, sáng tạo và tìm ra giải pháp cho các vấn đề thực tế.
Tăng cường khả năng thích ứng: Giúp học sinh sinh viên thích nghi với những thay đổi và thử thách trong cuộc sống.
Xây dựng mối quan hệ: Tạo cơ hội cho học sinh sinh viên giao lưu, kết nối với những người khác, xây dựng các mối quan hệ xã hội`,
      },
      {
        id: 2,
        imageUrl: "https://www.kymviet.com.vn/2-7.jpg",
        descImage: "",
        content: `Các hình thức hoạt động trải nghiệm giáo dục tại Hà nội:

Thực tập: Làm việc tại các doanh nghiệp, tổ chức để ứng dụng kiến thức đã học vào thực tế.
Tham gia các dự án: Tham gia các dự án cộng đồng, nghiên cứu khoa học, khởi nghiệp để phát triển các kỹ năng và kiến thức mới.
Tham quan thực tế: Tham quan các nhà máy, công ty, bảo tàng, di tích lịch sử, các cơ sở sản xuất kinh doanh sản phẩm và dịch vụ của người khuyết tật trong xã hội để tìm hiểu về các ngành nghề, lĩnh vực khác nhau.
Trại hè, trại đông: Tham gia các trại hè, trại đông để trải nghiệm cuộc sống tập thể, rèn luyện các kỹ năng sống.
Các hoạt động ngoại khóa: Tham gia các câu lạc bộ, đội nhóm, tổ chức sự kiện để phát triển sở thích và khả năng của bản thân.
Lợi ích của hoạt động trải nghiệm giáo dục đối với học sinh sinh viên:

Nâng cao chất lượng đào tạo: Giúp nhà trường đào tạo ra những sinh viên có kiến thức, kỹ năng và phẩm chất phù hợp với yêu cầu của xã hội.
Tăng cường sự gắn kết giữa nhà trường và doanh nghiệp: Tạo điều kiện cho nhà trường và doanh nghiệp hợp tác, cùng nhau đào tạo nguồn nhân lực chất lượng cao.
Đáp ứng nhu cầu của thị trường lao động: Giúp sinh viên định hướng đúng, dễ dàng tìm được việc làm sau khi ra trường.`,
      },
    ],
  },
  {
    id: 6,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://lh4.googleusercontent.com/-EexYzY8tHJ8/WB9MQZwDj9I/AAAAAAAACO0/ySFgodfQz-sjSidKyf8pxZUiEIlTK19DQCLcB/s1600/tho-nguoi-khuyet-tat.jpg",
    title: "Những bài thơ viết về người khuyết tật, những mảnh đời bất hạnh",
    description:
      "Mình là một người phụ nữ mang trên mình khuyết tật về thể chất. Mình sinh ra và lớn lên tại Hà Nội, thủ đô của Việt Nam. Chuyện kể rằng, mình được sinh ra vào thời kỳ sau chiến tranh. ",
    dateTime: "20 ngày trước",
    day: "",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://lh4.googleusercontent.com/-zpIYW6ukG9E/WD39eVZWcwI/AAAAAAAACqI/SIY6_eVFkIQEpNjNnPmqkjK3wuXb6YjpwCLcB/s1600/tho-nguoi-cha-khuyet-tat.jpg",
        descImage: "",
        content: `BÀI THƠ: THÂN PHẬN TẬT NGUYỀN
Thơ: Hồng Hoa

Em cũng sống giữa đời như thiên hạ
Nhưng nỗi đau lại quá sức làm người
Năm tháng buồn…mặt rủ rượi chẳng tươi
Thân tàn phế tiếng cười không còn nữa.
Cầu sớm tối…vui đùa tình chan chứa
Nhưng thân em đâu chọn lựa được gì
Chân tay cùng…ghì níu để lết đi
Lê thân xác…môi thầm thì…gọi Mẹ.
Rồi cứ thế em nhẹ nhàng thật khẽ
Cố gượng cười…dù chỉ hé vành môi
Nuốt đớn đau muôn lối của cuộc đời
Rơi nước mắt thấm bờ môi mặn chát.
Ai ngang qua…nhớ giúp em két bạc
Để nuôi thân khi thân xác hiểm nghèo
Đời dải dầu khô héo…giữa cheo leo
Thương thân phận bọt bèo trời nỡ đọa!
`,
      },
      {
        id: 2,
        imageUrl:
          "https://th.bing.com/th/id/OIP.owj68gvEt_kXLDioIALMNwHaEm?rs=1&pid=ImgDetMain",
        descImage: "",
        content: `

THƠ NGƯỜI KHUYẾT TẬT: THẮP SÁNG ƯỚC MƠ
Thơ: Trần Văn Nghệ

Bao mong mỏi đến ngày sinh hạ
Mẹ đón em một đóa hoa tươi
Nét môi, khoé mắt,mi cười
Bi bô học nói, vui chơi suốt ngày.
Nhưng uất hận đắng cay vô lối
Trời cao xanh bắt tội em mang
Hóa công sao lại bẽ bàng
Tứ chi nặn dở, muộn màng ngày sinh.
Nhìn chúng bạn đuổi hình bắt bóng
Bi với cù, chong chóng, nhảy dây
Còn em lay lắt thân gầy
Sàn nhà, bậu cửa vạch đầy nét son.
Cuộc đời nhỏ sao còn phải gánh?
Nét tai ương ai chạnh lòng đây?
Bất công giữa cuộc đời này
Nuôi mầm mơ ước có thay phận nghèo?
Nhưng em hỡi!Gieo neo đâu sợ
Khó khăn nhiều chớ có chùn chân
Trong em nhiều lắm: Tinh thần
Trí khôn tuyệt đỉnh, rất cần đó em.
Trong giấc ngủ nuôi niềm mộng ước
Đời cho em được bước thẳng ngay
Vạch đường bằng chính đôi tay
Gian nan đâu kể, có ngày vinh quang.
Hãy tin nhé, mỗi trang em viết
Sẽ có dòng tha thiết tình thương
Cuộc đời nhiều lắm -Vô thường
Bàn tay nâng đỡ đoạn đường em đi.
Lòng nhân ái chẳng khi nào thiếu
Nghĩa nhân từ đâu liệu đắn đo?
Chở hy vọng -Một con đò
Thắp niềm mơ ước em thơ vững lòng.`,
      },
    ],
  },
  {
    id: 7,
    author: "NGUYỄN ĐÌNH VŨ",
    thumnail:
      "https://baodanang.vn/dataimages/202311/original/images1719398_1.gif",
    title: "Sản phẩm thủ công độc đáo của người khuyết tật",
    description:
      "Nhiều sản phẩm thủ công đẹp mắt, tinh tế được làm bởi chính đôi bàn tay của người khuyết tật trên địa bàn thành phố. Những sản phẩm này không chỉ tạo việc làm, mà còn góp phần quảng bá hình ảnh quê hương đến với khách du lịch.",
    dateTime: "",
    day: "24/11/2023 ",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://baodanang.vn/dataimages/202311/original/images1719398_1.gif",
        descImage:
          "Anh Hứa Văn Minh nói về cơ duyên làm đồ lưu niệm bằng tăm tre",
        content: `Quảng bá du lịch địa phương

Trong quá trình lao động, chẳng may bị đá rơi trúng người gãy cột sống khiến anh Hứa Văn Minh (SN 1982, quận Sơn Trà) liệt nửa người. Từ một người khỏe mạnh, là chỗ dựa cho cả gia đình, anh trở thành người tật nguyền. Nhưng nhờ tình yêu thương, động viên của cả gia đình, anh nỗ lực vượt qua số phận và hành trình đến với sản phẩm thủ công làm từ tăm tre bắt đầu từ đó.

Năm 2014, với 3 tháng thực hiện, anh cho ra mắt sản phẩm đầu tay là tháp Eiffel. Tiếp đến là Ngọ Môn Huế, anh hoàn thiện chỉ trong vòng 10 ngày. Anh cho biết, giai đoạn đầu anh nhờ gia đình đến các cửa hàng mua nguyên vật liệu. Thời gian sau, anh sắm một chiếc xe ba bánh tự đi tìm nguồn nhập tre và đi chào bán cho các tiệm lưu niệm.

Đối với những sản phẩm đầu tiên ra mắt, anh ký gửi ở các cửa hàng bán đồ lưu niệm du lịch tại Đà Nẵng và nhận được nhiều sự hưởng ứng, cùng với đó là những ý kiến đóng góp. Anh tham khảo, học hỏi và điều chỉnh ngay. Chính vì vậy, những sản phẩm về sau có thiết kế độc đáo và tinh tế hơn, thu hút được nhiều lượng khách hàng tìm đến.

Qua tìm hiểu, thấy sản phẩm lưu niệm du lịch có rất ít trên thị trường, anh đã nghiên cứu và chọn biểu tượng Trung tâm Hành chính thành phố cùng các cây cầu tại thành phố để làm mô hình quà lưu niệm. Khách hàng đặt mua qua mạng xã hội, các sản phẩm mô phỏng bằng tăm tre như: cầu Rồng, cầu Thuận Phước, thành Đại nội Huế, nhà rông Tây Nguyên... Mỗi sản phẩm có giá từ 700.000 - 1,5 triệu đồng tùy theo kích thước khách yêu cầu.

Nói về quy trình thực hiện, anh tâm sự: “Trước khi thực hiện sản phẩm, tôi phác họa bản vẽ, thực hiện theo tỷ lệ khách yêu cầu và triển khai lắp ráp. Tăm tre tôi mua từ Hội Người mù thành phố. Mỗi sản phẩm tôi thực hiện mất ít nhất 3-4 ngày”.

Trung bình mỗi tháng, anh kiếm được 5-7 triệu đồng từ các sản phẩm lưu niệm này. Nhưng với anh, đây không chỉ là một công việc mang lại thu nhập, ổn định cuộc sống mà còn là niềm đam mê sáng tạo. Được đóng góp sức lực nhỏ bé vào việc đưa hình ảnh của quê hương đến với khách du lịch, anh bảo anh rất vui và đó cũng là động lực để không ngừng học hỏi, tìm tòi phát triển mỗi ngày.

Vươn lên trong cuộc sống

Đoạt giải Nhất trong cuộc thi “Ý tưởng khởi nghiệp” năm 2023 với chủ đề “Phát triển kinh tế gắn với nâng cao khả năng thương mại cho các sản phẩm địa phương” do Hội Liên hiệp Phụ nữ huyện Hòa Vang tổ chức, chị Hồ Thị Láng (SN 1994, trú huyện Hòa Vang) không dám tin những bức tranh nhỏ bé của mình chinh phục được Ban giám khảo cuộc thi.

Không giống với bạn bè đồng trang lứa, từ nhỏ, chị Hồ Thị Láng mắc bệnh xương khớp, cơ thể nhỏ bé, không thể lao động, làm việc như người bình thường.

Năm 2014, chị tìm hiểu về dòng sản phẩm thủ công quilling paper, nhận thấy việc làm này phù hợp với sức khỏe của bản thân nên chị quyết tâm học nghề. Đến năm 2018, gom hết số tiền dành dụm, chị mua nguyên vật liệu, dụng cụ để làm tranh giấy xoắn. Nói về bước đầu khởi nghiệp, chị Láng kể: “Thời điểm đó rất ít người biết đến tranh giấy xoắn. Tôi thường đăng bài giới thiệu sản phẩm trên trang Facebook cá nhân của mình, rồi cũng có những vị khách hàng đầu tiên tìm đến. Đó là động lực lớn để tôi có thể theo đuổi dòng sản phẩm tranh giấy xoắn đến nay”. 

Theo chị Láng, mỗi sản phẩm là một câu chuyện về quê hương, chim chóc, cây cối... Khi thực hiện, chị phải lựa chọn sắc màu phối hợp sao cho bắt mắt nhưng không kém phần mềm mại. Đối với thiệp, chị mất từ 1-2 giờ đồng hồ để hoàn thành một sản phẩm. Đối với tranh, chị thực hiện từ 4-7 ngày cho một bức khổ lớn. Trong đó, công đoạn xoắn sợi cần sự tập trung, kiên nhẫn để chị có thể tạo sự ấn tượng cho bức tranh. Mỗi tháng, chị kiếm được 4-5 triệu đồng từ công việc này.

Trong thời gian tới, chị Láng mong muốn tìm được đầu ra cho sản phẩm để nguồn thu nhập ổn định hơn. Đồng thời, chị sẵn sàng dạy nghề cho những bạn có nhu cầu học tập, có hoàn cảnh kém may mắn và yêu thích tranh tảo xoắn.`,
      },
    ],
  },
  {
    id: 8,
    author: "BÁCH NHẬT",
    thumnail:
      "https://images2.thanhnien.vn/zoom/600_315/528068263637045248/2023/4/18/20230418-151754-1-16818237996451668895126-4-0-1190-1898-crop-1681823807074738799742.jpg",
    title:
      "Ấn tượng triển lãm bày gần 40 bức tranh, sản phẩm thủ công của người khuyết tật",
    description:
      "Chiều nay 18.4, tại Bảo tàng Hà Nội, Hợp tác xã Vụn Art tổ chức khai mạc triển lãm mang tên Những mảnh vụn trưng bày các sản phẩm được thiết kế bởi bàn tay của những người khuyết tật, yếu thế trong cuộc sống.",
    dateTime: "",
    day: "18/04/2023",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/4/18/20230418151715-16818197622311923885604.jpg",
        descImage:
          "Tranh ghép từ vải vụn nhiều màu sắc của người khuyết tật tại Hợp tác xã Vụn Art",
        content: `Chiều nay 18.4, tại Bảo tàng Hà Nội, Hợp tác xã Vụn Art tổ chức khai mạc triển lãm mang tên Những mảnh vụn trưng bày các sản phẩm được thiết kế bởi bàn tay của những người khuyết tật, yếu thế trong cuộc sống.
Triển lãm Những mảnh vụn giới thiệu gần 40 bức tranh và nhiều sản phẩm thủ công ứng dụng cùng các hoạt động trình diễn và trải nghiệm tương tác phục vụ khách tham quan, với mong muốn lan tỏa những giá trị tốt đẹp về nghị lực sống, vượt khó, vươn lên của những người khuyết tật.

Chia sẻ về triển lãm, anh Lê Việt Cường, Giám đốc Hợp tác xã Vụn Art, cho biết triển lãm lần này của Vụn Art trưng bày những bức tranh ghép vải là một loại hình nghệ thuật mới, đòi hỏi tính tỉ mỉ, cẩn trọng, con mắt nghệ thuật tinh tế và khả năng phối hợp ngẫu hứng với những mảnh lụa nhiều màu sắc. `,
      },
      {
        id: 2,
        imageUrl:
          "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/4/18/20230418151543-16818204249901436007452.jpg",
        descImage: "",
        content: `Các bức tranh trưng bày được chuyển thể từ nhiều thể loại: tranh dân gian Việt Nam (tranh Hàng Trống, tranh Kim Hoàng, tranh Đông Hồ…), tranh đồng quê, tranh danh lam thắng cảnh Việt Nam và thế giới, chân dung danh nhân và tranh của các họa sĩ nổi tiếng. Những mảnh vụn lụa qua tay người thợ Vụn Art như được thổi hồn, trở nên sống động, khiến những bức tranh độc bản trở thành những tác phẩm nghệ thuật tuyệt đẹp.`,
      },
    ],
  },
  {
    id: 9,
    author: "ĐẶNG THÙY LINH",
    thumnail:
      "https://hoilhpn.org.vn/documents/1809139/0/sp+pnkt+HCM+3+1+.jpg/d3b6ec48-2d14-498e-82c9-bd420e588066",
    title: "TP. HCM: Những sản phẩm handmade độc - lạ của phụ nữ khuyết tật",
    description:
      "Nhìn những sản phẩm thủ công tinh xảo tại chương trình “Vẻ đẹp vầng trăng khuyết”, ít ai nghĩ rằng đó là sản phẩm của các chị em phụ nữ khuyết tật. Vượt lên số phận, họ đã nỗ lực gấp nhiều lần để tìm thấy giá trị của bản thân và khẳng định năng lực qua từng sản phẩm. ",
    dateTime: "",
    day: "15/04/2022",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://hoilhpn.org.vn/documents/20182/3618027/21_Apr_2022_022213_GMTsp_pnkt_HCM.jpg/836c6d1d-8ca9-439c-bb11-40748d2a7f96",
        descImage: "",
        content: `Chương trình "Vẻ đẹp vầng trăng khuyết" dành không gian trưng bày, giới thiệu các sản phẩm do phụ nữ khuyết tật thực hiện.

Ngày 14/4, Hội LHPN TPHCM tổ chức chương trình "Vẻ đẹp vầng trăng khuyết" năm 2022, tại Hội trường Công ty Cổ phần Du lịch Hòa Bình (60, Võ Văn Tần, Quận 3, TPHCM). Chương trình còn có sự đồng hành của một số tổ chức, đơn vị, cá nhân trên địa bàn, nhằm góp phần nâng cao năng lực cho phụ nữ yếu thế, hưởng ứng hoạt động kỷ niệm Ngày Người khuyết tật Việt Nam (18/4).`,
      },
      {
        id: 2,
        imageUrl:
          "https://th.bing.com/th/id/OIP.JhUg-fTB0SfFg3eVcblgUAHaEo?rs=1&pid=ImgDetMain",
        descImage: "Sản phẩm thủ công của người khuyết tật",
        content: ``,
      },
    ],
  },
  {
    id: 10,
    author: "HUYỀN TRANG",
    thumnail:
      "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/3/28/base64-1679973367493681307658.png",
    title: "Hai cô gái khuyết tật lập doanh nghiệp xã hội xanh",
    description:
      "Đi xe lăn đến phố sách, hai cô gái mời chào khách hàng tham quan gian hàng. Ai cũng trầm trồ xuýt xoa trước những sản phẩm thủ công do chính tay những người khuyết tật làm ra.",
    dateTime: "",
    day: "28/03/2023 ",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/3/28/base64-1679973367493681307658.png",
        descImage:
          "Hai cô gái khuyết tật Nguyễn Thùy Chi (trái) và Lưu Thị Hiếu sáng lập doanh nghiệp 'Chạm vào xanh'",
        content: `"Không một cộng đồng nào phát triển được mà chỉ dựa vào đi xin tiền tài trợ. Quan điểm của chúng tôi chính là không ai cứu mình được tốt hơn cho bằng chính mình" - chị Nguyễn Thùy Chi (33 tuổi, phó giám đốc doanh nghiệp xã hội "Chạm vào xanh") quả quyết.
        
        Hành trình trên chiếc xe lăn
Là chủ nhiệm Câu lạc bộ CP trưởng thành (cerebral palsy - tạm dịch: bại não - một rối loạn thần kinh cơ gây ra bởi tổn thương vỏ não vận động của não đang phát triển), mối duyên đã đưa Chi gặp gỡ người cộng sự là Lưu Thị Hiếu (ở Hà Nội).

Cả hai cùng chung ý tưởng xây dựng một "mái nhà" mà ở đó các bạn khuyết tật nói chung và người CP nói riêng đều có cơ hội để làm việc, tạo một môi trường sáng tạo để ai ai cũng có thể tìm thấy niềm vui.

Để thực hiện ý tưởng của mình, trên chiếc xe lăn, hai cô gái "lăn" khắp nơi, tìm kiếm các nguồn tài trợ, kết nối các thành viên để vận hành doanh nghiệp.`,
      },
      {
        id: 2,
        imageUrl:
          "https://cdn.tuoitre.vn/thumb_w/800/471584752817336320/2023/3/28/base64-1679973367591252276772.png",
        descImage:
          "Những mặt hàng sản phẩm thủ công của 'Chạm vào xanh' do người khuyết tật thực hiện",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
];
