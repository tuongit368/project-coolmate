import React from 'react'
import imageBannerTwo from '../../assets/images/imageBannerTwo.png'

import '../../styles/home/bannerTwo.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function BannerTwo() {
    return (
        <div className='BannerTwo'>
          <div data-aos="zoom-in-up" className='BannerTwo-image'>
            <a href="#"><img src={imageBannerTwo} alt="BannerTwo-image" /></a>
            <div className='BannerTwo-text'>
              <h2>POLO THỂ THAO</h2>
              <p>Công nghệ Ex-Dry thấm hút tối ưu & khô thoáng nhanh chóng</p>
            </div>
          </div>
        </div>
      )
    }

export default BannerTwo