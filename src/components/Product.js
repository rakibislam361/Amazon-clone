import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, price, img, rating}) {
const [basket , dispatch] = useStateValue(); 

const addToBasket = () => {
    console.log("this is basket items", basket);

    dispatch({
        type:"Add_to_Basket",
        item: {
            id:id,
            title:title,
            image:img,
            price:price,
            rating:rating,
        },
    });
};
    return (    
        <div className="product"> 
            <div className="product__info">
                <p>{title}</p> 
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>    
                </p> 
                <div className="product__ratting">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={img} alt="" />
            <button onClick={addToBasket} className="product__button">Add to cart</button>
        </div>
    )
}

export default Product
