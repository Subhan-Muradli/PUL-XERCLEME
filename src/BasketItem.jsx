import React, {useState} from 'react'

function BasketItem ({item, product}){
    return (
        <li>
          {product.title} x {item.amount}
       </li>
    )
    
    
}

export default BasketItem