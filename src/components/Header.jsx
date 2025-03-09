import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="/logo.png" alt="PMG Logo" className="logo" />
      <h1>Trung tâm hỗ trợ tư vấn sức khỏe trực tuyến</h1>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
          <li><Link to="/dich-vu">Dịch vụ</Link></li>
          <li><Link to="/tin-tuc">Tin tức</Link></li>
          <li><Link to="/lien-he">Liên hệ</Link></li>
        </ul>
      </nav>
      <input type="text" placeholder="Tìm kiếm..." />
    </header>
  );
}

export default Header;
