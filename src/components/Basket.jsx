import React, { useState } from "react";

import BasketItem from "../BasketItem";

function Basket({basket, total,resetBasket, products}){
    return (
        <>
        <div className="basket-container container">
        {
          basket.map(item => (
        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
    ))
    }
    <div>
      Toplam: ${total}
    </div>
    <button onClick={resetBasket}>Sebeti sifirla</button>
        </div>
        <style jsx>{`
        .basket-container{
          padding:20px;
          background:#fff;
          border:1px solid #ddd
        }
        `}</style>
        </>
    )
} 

export default Basket