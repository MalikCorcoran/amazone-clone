import React from 'react'
import './Payment.css'
import { useStateValue } from '../../Provider/StateProvider';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="payment">
            <div className= "payment__container">
                <div className="payment__section">
                    <div clasName="payment__title">
                        <h3>Delivery Address</h3>

                    </div>
                </div>

                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>420 code lane</p>=
                    <p>Accra,Ghana</p>
                </div>


                <div className="payment__section">

                </div>

                <div className="payment__section">

                </div>

            </div>
        </div>
    )
}

export default Payment
