import React from 'react'
import logoHome from "../../assets/images/logoHome.png"
import "../../styles/home/header.css"

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <img className='header-logo' src={ logoHome } alt="logoHome" />
      <ul className='header-nav-links'>
        <li>Sale</li>
        <li>Sản phẩm</li>
        <li>Đồ lót</li>
        <li>Đồ thể thao</li>
        <li>Mặc hàng ngày</li>
        <li>Nước hoa</li>
        <li>Sản xuất riêng</li>
        <li>Care & share</li>
      </ul>
      <div className='header-actionUser'>
        <div className='header-actionUser-search'>

          <CiSearch />
          <input type="text" placeholder='Tìm kiếm sản phẩm...'/>

          </div>

          <Link to="/regiter"> <FaUser className='header-actionUser-userIcon'/> </Link>
          
          <IoBagHandleSharp className='header-actionUser-bagIcon' />
      </div>
    </div>
  )
}

export default Header