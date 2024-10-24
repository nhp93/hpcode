import Banner from "@/components/Banner";
import IntroductionImages from "@/components/img/Introduction";
import React from "react";

const Introduction = () => {
  const introductions = [
    {
      img: IntroductionImages.whoAreUs,
      title: "Sứ mệnh và tầm nhìn",
      subtitle: "Tổng quan về mục tiêu trang web ",
      detail: [
        "Sứ mệnh của chúng tôi là trở thành cầu nối giữa những doanh nhân khuyết tật và người tiêu dùng, từ đó tạo cơ hội kinh doanh công bằng và thúc đẩy sự hoà nhập xã hội. Chúng tôi tin rằng với những công cụ và sự hỗ trợ phù hợp, bất kỳ ai cũng có thể trở thành một doanh nhân thành công. Tầm nhìn của chúng tôi là xây dựng một cộng đồng kinh doanh nơi những người khuyết tật không chỉ phát triển mà còn trở thành những người tiên phong trong việc tạo ra thay đổi tích cực trong xã hội.",
      ],
      flex: "flex md:flex-row",
    },
    {
      img: IntroductionImages.goal,
      title: "Tính Năng",
      subtitle: "Các dịch vụ chính",
      detail: [
        "Chúng tôi cung cấp một loạt các dịch vụ giúp người khuyết tật xây dựng và quản lý cửa hàng trực tuyến của mình một cách hiệu quả. Những dịch vụ bao gồm: ",
        "- Tạo gian hàng miễn phí: Mỗi người khuyết tật có thể dễ dàng thiết lập một cửa hàng trực tuyến với giao diện thân thiện và dễ sử dụng.",
        "- Hỗ trợ tiếp thị và quảng bá sản phẩm: Chúng tôi cung cấp công cụ quảng cáo và tiếp thị mạnh mẽ để giúp sản phẩm của người khuyết tật tiếp cận đến đúng đối tượng khách hàng.",
        "- Dịch vụ tư vấn kinh doanh: Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ, từ việc phát triển sản phẩm đến chiến lược bán hàng và chăm sóc khách hàng.",
      ],
      flex: "flex md:flex-row-reverse",
    },
    {
      img: IntroductionImages.action,
      title: "Chủng tôi",
      subtitle: "Mong muốn đem lại lợi ích những mảnh đời thiếu may mắn",
      detail: [
        "Chúng tôi sẽ giúp quảng bá, mang những sản phẩm của những con người kém may mắn trở nên phổ biến hơn với cộng đồng. ",
        "Người khuyết tật không chỉ có cơ hội giới thiệu về những mặt hàng của bản thân, giúp cộng đồng có một cái nhìn tích cực hơn, thấu hiểu và đồng cảm sâu sắc với những khao khát được làm việc, được cống hiến và làm chủ cuộc sống của người khuyết tật",
      ],
      flex: "flex md:flex-row",
    },
  ];
  return (
    <div className="w-screen mt-16">
      {/* header */}
      <Banner
        title="Giới thiệu về website của chúng tôi"
        image={IntroductionImages.banner}
      />
      {/* content */}
      <div className="md:pt-24 md:pb-[128px] md:px-64 mobile:px-5 mobile:pt-12 mobile:pb-16">
        {introductions.map((introduction, index) => (
          <div
            className={`mobile:flex mobile:flex-col-reverse mobile:gap-6 md:${introduction.flex} w-full md:gap-20 mb-16`}
            key={index}
          >
            <div className="md:py-5 flex-1 text-justify">
              <h3 className="text-primary text-left uppercase mobile:text-[16px] md:text-lg font-semibold font-inter mb-3">
                {introduction.title}
              </h3>
              <h1 className="md:text-[30px] text-left mobile:text-[24px] font-semibold font-inter mb-3">
                {introduction.subtitle}
              </h1>
              <div className="mobile:text-[16px] md:text-[20px] font-inter">
                {introduction.detail.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="flex-1 h-[420px]">
              <img
                src={introduction.img}
                alt=""
                className="w-full h-full object-cover bg-top rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
