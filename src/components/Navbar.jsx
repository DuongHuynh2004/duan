import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="PMG Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/about">Giới thiệu</Link></li>
        <li><Link to="/service">Dịch vụ</Link></li>
        <li><Link to="/news">Tin tức</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </ul>
      <input type="text" placeholder="Tìm kiếm..." className="search-box" />
    </nav>
  );
};

export default Navbar;
