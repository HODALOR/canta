
import { Remove } from '@material-ui/icons';
import React from 'react'
import './basket.css'
import {useStateValue } from './StateProvider'

function Basket({id, image, title, price, rating }){
    const [{basket}, dispatch] = useStateValue()
    

    const removeFromBasket =() =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id 
        })
    }

    return(
        <div className="basket">

        <img className="basket__image" scr={image}/>

        <div className="basket__info">
         <p className="basket__title">
             {title}
         </p>
       <p className="basket__price">

          <small>$</small>
          <strong>{price}</strong>
       </p>

       <div className="basket__rating">
           {Array (rating) 
           .fill()
           .map((__, i)=>(
            <p>🌟</p>

           ))}

       </div>
    
      <button onClick={removeFromBasket}>remove from basket</button>



        </div>


        </div>)
}


export default Basket;