import React, {useState} from "react";
import { moneyFormat } from "./Helpers";


function Product({product, total, money, basket, setBasket}){


    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else{
            setBasket([...basket, {
                id:product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithCurrent = basket.filter(item => item.id !== product.id)
            currentBasket.amount -= 1
            if(currentBasket.amount === 0){
                setBasket([...basketWithCurrent])
            }else{

                setBasket([...basketWithCurrent, currentBasket])
            }
        
    }
    return(
        <>
        <div className="product">
            <img src={product.image}/>
            <h6 >{product.title}</h6>
            <div className="price">${moneyFormat(product.price)}</div>
            <div className="actions">
                <button className="sell-btn" onClick={removeBasket}>Sat</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button className="buy-btn" disabled={total + product.price >money} onClick={addBasket}>Satin Al</button>
            </div>
            <style jsx>{`
            .product{padding:15px;
             background: #fff;
             border: 1px solid #ddd;
             margin-bottom: 20px;
             width:24% }`}</style>
        </div>
        </>
    )
}

export default Product