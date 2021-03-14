import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout()  {
    const[{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            </div>
            <div >
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        rating={item.rating}
                        img={item.img}
                    />
                ))}

            </div>
               
             <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
