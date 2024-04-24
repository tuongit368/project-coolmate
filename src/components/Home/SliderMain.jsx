import React from 'react'
import Slider from "react-slick";
import "../../styles/home/slider.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function SliderMain() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

  return (
    <div data-aos="fade-down" className="slider-container">
      <Slider {...settings}>
      <div>
        <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/April2024/SUMMER_SALE.png" alt="" />
      </div>
      <div>
        <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/April2024/EXCOOL_BN.png" alt="" />
      </div>
      <div>
        <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/April2024/CM_BASIC2204.png" alt="" />
      </div>
      </Slider>
    </div>
  )
}

export default SliderMain