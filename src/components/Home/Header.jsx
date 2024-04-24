import React, { useEffect, useState } from 'react'
import logoHome from "../../assets/images/logoHome.png"
import "../../styles/home/header.css"

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


import { Link, useSearchParams } from 'react-router-dom';

import { BsChevronDown } from "react-icons/bs";

function Header() {

  const handleDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const handleLogOut = () => {
    localStorage.removeItem("dataRegister")
    navigate("/register")
  }

  const navigate = useNavigate()

  const [showDropDown, setShowDropDown] = useState(true)
  const [userName, SetUserName] = useState("")

  const dataRegister = JSON.parse(localStorage.getItem("dataRegister"))

  useEffect(() => {
    SetUserName(dataRegister?.name)
  }, [])

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
          {
            userName === "" || userName == null ? <Link to="/register"> <FaUser className='header-actionUser-userIcon'/> </Link> : 
            <div>
              {userName}
              <BsChevronDown onClick={handleDropDown} />

              {
                showDropDown ? "" : <div>
                <button onClick={handleLogOut}>Log Out</button>
                <IoBagHandleSharp className='header-actionUser-bagIcon' />
              </div>
              }
            </div>
          }
          {
            userName === "" || userName == null ? <IoBagHandleSharp className='header-actionUser-bagIcon' /> : ""
          }
          
      </div>
    </div>
  )
}

export default Header