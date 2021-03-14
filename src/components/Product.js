    import React from 'react'
    import './Product.css'
    import { useStateValue } from './StateProvider';

    function Product({ id, title, desc, price, img, rating }) {
    const [{ basket }, dispatch] = useStateValue(); 

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                desc: desc,
                img:img,
                price:price,
                rating:rating
            },
        });
    };


    return (    
        <div className="product"> 
            <div className="product__info">
                <p><strong>{title}</strong><br/>{desc}</p> 
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product__ratting">
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>    
                </p> 
                
            </div>
            <img src={img} alt="" />
            <button onClick={addToBasket} className="product__button">Add to cart</button>
        </div>
    );
}

export default Product;
