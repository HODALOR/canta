import React from 'react'
import "./Checkout.css"
import {useStateValue } from './StateProvider'
import Basket from './basket'

import  Subtotal from  "./Subtotal"
function Checkout() {
    const [{basket}, dispatch] = useStateValue()
    

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title"> Your shopping basket</h2>
                    {basket.map(item =>(
                        <Basket
                        id={item.id}
                        title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                 />
                    
                        ))}
                </div>
            </div>
            <div className="checlout__right">
                <Subtotal 
                
                
                />
            </div>
        </div>
    )
}

export default Checkout;
