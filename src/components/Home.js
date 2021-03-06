import React, { useState } from 'react';
import './Home.css';
import slider from "./asset/slider1.jpg"
import slider2 from "./asset/slider2.jpg"
import slider3 from "./asset/slider3.jpg"
import slider4 from "./asset/slider4.jpg"
import Carousel from 'react-bootstrap/Carousel'
import Product from './Product';
import product1 from './asset/product/product1.jpg'
import product2 from './asset/product/product2.jpg'
import product3 from './asset/product/product3.jpg'
import product4 from './asset/product/product4.jpg'


const Home = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="home">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={slider} alt=""/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={slider2} alt=""/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={slider3} alt=""/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={slider4} alt=""/>
                </Carousel.Item>
            </Carousel>

            <div className="home__row" style={{ }}>
                <Product
                    id="1"
                    title="New Product One" 
                    price="500" 
                    img={product1}
                    rating={5}
                />
                <Product 
                    id="2"
                    title="New Product Two" 
                    price="200"
                    img={product2}
                    rating={4}
                />
                <Product 
                    id="3"
                    title="New Product Three" 
                    price="100"
                    img={product3}
                    rating={3}
                  />
                <Product 
                    id="4"
                    title="New Product Four" 
                    price="900"
                    img={product4}
                    rating={4}
                />
            </div>
        </div>
        
    );
}

export default Home;
