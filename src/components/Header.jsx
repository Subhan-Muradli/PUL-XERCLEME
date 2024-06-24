import React, { useState } from "react"
import { moneyFormat } from "./Helpers";
import styles from './header.module.css'


function Header ({total, money}){
    return (
        <>
          
            {total >0 && money-total !==0 &&(
                <div className={styles.header}>Xerclemek üçün <span>${moneyFormat(money -total)}</span> pulumuz qaldi!</div>
            )}
            {total === 0 &&(
                <div className={styles.header}>Xerclemek üçün <span>${moneyFormat(money)}</span> pulumuz var!</div>
            )}
            {money - total === 0 &&(
                <div className={styles.header}>Pulunuz qurtardi</div>
            )}

            
      
        </>
    )
}
 export default Header;