import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../Provider/StateProvider';
import {getBasketTotal} from '../../Reducer/Reducer'
import { useHistory } from 'react-router-dom';


function Subtotal() {

    const history = useHistory();


    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value => 
                    <>
                   <p>
                subtotal ({basket.length}): <strong>{value}</strong>
                       </p>
                       <small calssName="subtotal__gift">
                           <input type="checkbox" />This order 
                        containd a gift
                       </small>
                       </>
                       
                        )}
                        declineScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix= {"$"}

            />
            <button onClick={history.push["/payment"]}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
 