import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Liên hệ</h1>
      <p>Đây là trang liên hệ của chúng tôi.</p>
      <form>
        <label>
          Họ và Tên:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Nội dung:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default Contact;
