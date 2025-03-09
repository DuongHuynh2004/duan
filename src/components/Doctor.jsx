import React from "react";

const Doctors = () => {
  return (
    <section className="p-8">
      <h3 className="text-xl font-bold">Danh sách bác sĩ</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border">Bác sĩ Nguyễn Minh Tuấn - Ngoại khoa</div>
        <div className="p-4 border">Bác sĩ Phan Quang Hòa - Tim mạch</div>
      </div>
    </section>
  );
};

export default Doctors;
