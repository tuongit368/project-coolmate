import React from 'react'
import imageBannerOne from '../../assets/images/imageBannerOne.png'

import '../../styles/home/bannerOne.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function BannerOne() {
  return (
    <div className='Banner'>
      <div data-aos="zoom-in-up" className='Banner-image'>
        <a href="#"><img src={imageBannerOne} alt="Banner-image" /></a>
        <div className='Banner-text'>
          <h2>ĐỒ CHẠY BỘ</h2>
          <p>Trải nghiệm chưa từng có trong mỗi sải chân</p>
        </div>
      </div>
    </div>
  )
}

export default BannerOne