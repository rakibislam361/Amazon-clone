import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>Subtotal (0 items): <strong>0</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> this order contain gift
                        </small>
                    </>
                    
                )}
                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSparator={true}
                    prefix={"$"}
            />
            <button>Process to Checkout</button>                

        </div>
    )
}

export default Subtotal
