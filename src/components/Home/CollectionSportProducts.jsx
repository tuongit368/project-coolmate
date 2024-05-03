import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";

import '../../styles/home/collectionSportProducts.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const APIALLProducts = "https://fakestoreapi.com/products"

function CollectionSportProducts() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
    
    const [dataAllProducts, setDataAllProducts] = useState([])
    
    useEffect(() => {
        const fetchApiProducts = axios.get(APIALLProducts)
        fetchApiProducts.then((data) => { setDataAllProducts(data.data) } )
    }, [])
        
    
    
    return (
        <div className='sport-products-body'>
            <h1 className='sport-products-text'>SẢN PHẨM POLO THỂ THAO</h1>
            <div className='sport-products-container' >
            <Slider {...settings}>
                {
                    dataAllProducts.map((item) => {
                        return(
                            <div data-aos="zoom-in-up" className='sport-products-item'>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <p>{item.price} $</p>
                            </div>
                        )
                    })
                }
            </Slider>
            
            </div>
        </div>
    )
    }

export default CollectionSportProducts