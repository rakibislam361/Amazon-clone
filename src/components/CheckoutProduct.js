import React from 'react'
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, img, title, price, rating, desc }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={img} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title} <br/><p className="productDescription">{desc}</p></p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__ratting">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>             
            </div>
                <p className="checkoutProduct__title checkoutProduct__info"><strong></strong></p>
        </div>
    )
}

export default CheckoutProduct
