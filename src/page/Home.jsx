import React from "react";

const Home = () => {
  return (
    <div className="mt-20">
      {/* Banner */}
      <section className="relative bg-blue-900 text-white p-10 text-center">
        <h2 className="text-3xl font-bold">PMG - Chăm sóc sức khỏe mọi lúc, mọi nơi!</h2>
        <p className="mt-2">“Cung cấp dịch vụ tư vấn y tế an toàn, chính xác và tiện lợi nhất.”</p>
        <p className="mt-1">“Đồng hành cùng bạn trên hành trình chăm sóc sức khỏe toàn diện.”</p>
        <img
          src="/doctor-banner.png"
          alt="Bác sĩ"
          className="absolute top-0 right-5 h-40"
        />
      </section>

      {/* 3 Cột: Phát triển - Tương lai - Giải pháp */}
      <section className="grid grid-cols-3 gap-6 p-10 text-center">
        <div>
          <img src="/phat-trien.png" alt="Phát triển" className="mx-auto h-32" />
          <h3 className="font-bold text-lg mt-2">Phát triển y học</h3>
        </div>
        <div>
          <img src="/mo-ra-tuong-lai.png" alt="Tương lai" className="mx-auto h-32" />
          <h3 className="font-bold text-lg mt-2">Mở ra tương lai</h3>
        </div>
        <div>
          <img src="/giai-phap-y-khoa.png" alt="Giải pháp" className="mx-auto h-32" />
          <h3 className="font-bold text-lg mt-2">Giải pháp y khoa</h3>
        </div>
      </section>

      {/* Tin tức Y tế + Thông tin bệnh viện */}
      <section className="grid grid-cols-2 gap-6 p-10">
        {/* Tin tức Y tế */}
        <div>
          <h3 className="text-xl font-bold text-blue-900">Tin từ Sở Y Tế</h3>
          <ul className="mt-3 space-y-2">
            <li className="border-b pb-2">
              <button className="text-blue-600 hover:underline" onClick={()=>alert("Tính năng đang phát triển")}>
                Yêu cầu Bệnh viện Đa khoa Quốc tế DNA tuân thủ quy định quảng cáo
              </button>
            </li>
            <li className="border-b pb-2">
            <button className="text-blue-600 hover:underline" onClick={()=>alert("Tính năng đang phát triển")}>
            Thành lập Phòng Bảo vệ, chăm sóc trẻ em và bảo trợ xã hội
              </button>
            </li>
            <li className="border-b pb-2">
            <button className="text-blue-600 hover:underline" onClick={()=>alert("Tính năng đang phát triển")}>
                Quyết định 2468-QĐ/TU về tổ chức và đăng ký y tế
            </button>
            </li>
          </ul>
        </div>

        {/* Thông tin bệnh viện */}
        <div className="bg-blue-900 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold">Thông tin về bệnh viện</h3>
          <ul className="mt-3 space-y-2">
            <li>- Giới thiệu bệnh viện</li>
            <li>- Cơ cấu tổ chức</li>
            <li>- Tuyển dụng</li>
            <li>- Sự kiện nổi bật</li>
          </ul>
          <button className="mt-4 bg-white text-blue-900 font-bold py-2 px-4 rounded">
            Xem thêm
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
