import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";


import '../../styles/home/collectionCategories.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const APISpecific = 'https://fakestoreapi.com/products/categories'
const APIGetProductsSpecific = 'https://fakestoreapi.com/products/category' 

function CollectionCategories() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };


    const [specific, setSpecific] = useState([])
    const [dataProductsSpecific, setDataProductsSpecific] = useState([])

    useEffect(() => {
        const fetchApiSpecific = axios.get(APISpecific)
        fetchApiSpecific.then((data) => {
            setSpecific(data.data)
        })
    })


    useEffect(() => {
        const handleGetProductsSpecific = axios.get('https://fakestoreapi.com/products/category/electronics')
        handleGetProductsSpecific.then((data) => {
            setDataProductsSpecific(data.data)
        })
    }, [])

    const handleChangData = ((param) => {
        const newParam = param.split(" ").join("%20")

        const handleGetProductsSpecific = axios.get(`${APIGetProductsSpecific}/${newParam}`)
        handleGetProductsSpecific.then((data) => {
            setDataProductsSpecific(data.data)
        })
    })

  return (
    <div className='CollectionCategories-body'>
        <div className='CollectionCategories-container-button' >
            {
                specific.map(item => {
                    return(
                        <button onClick={() => handleChangData(item)}>{item}</button>
                    )
                })
            }
        </div>
        <div className='CollectionCategories-container' >
        <Slider {...settings}>
            {
                dataProductsSpecific.map(item => {
                    return(
                        <div data-aos="zoom-in-up" className='CollectionCategories-container-item'>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
  )
}

export default CollectionCategories