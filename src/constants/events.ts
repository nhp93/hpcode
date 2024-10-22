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
    title: "Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật",
    description:
      "Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...",
    dateTime: "8 phút trước",
    day: "Ngày 31/05/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
      "https://www.kymviet.com.vn/290434506_5404576362964924_4419922684127429465_n.jpg",
    title:
      "Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”",
    description:
      "Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...",
    dateTime: "5 ngày trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 4,
    imgUrl:
      "https://www.kymviet.com.vn/Kymviet%20Handicraft%20Products%20-%20Colourful%20puzzle%20pieces%201.jpg",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 5,
    imgUrl: "https://www.kymviet.com.vn/10.jpg",
    title: "Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 6,
    imgUrl:
      "https://www.kymviet.com.vn/383806843_694119282743544_5560753418557927165_n.jpg",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 7,
    imgUrl:
      "https://thirdchurchnyc.com/wp-content/uploads/2017/11/Rise-in-Strength.jpg",
    title: "Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật",
    description:
      "Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    day: "Ngày 31/05/2024",
  },
  {
    id: 8,
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
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 9,
    imgUrl:
      "https://www.kymviet.com.vn/290434506_5404576362964924_4419922684127429465_n.jpg",
    title:
      "Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”",
    description:
      "Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...",
    dateTime: "5 ngày trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 10,
    imgUrl:
      "https://www.kymviet.com.vn/Kymviet%20Handicraft%20Products%20-%20Colourful%20puzzle%20pieces%201.jpg",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 11,
    imgUrl: "https://www.kymviet.com.vn/10.jpg",
    title: "Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
    id: 12,
    imgUrl:
      "https://www.kymviet.com.vn/383806843_694119282743544_5560753418557927165_n.jpg",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://www.undp.org/sites/g/files/zskgke326/files/2022-12/group1-e.jpg",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
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
];
