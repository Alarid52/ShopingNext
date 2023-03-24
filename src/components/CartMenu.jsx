import React from 'react'
import { MenuCard } from './MenuCard'

export const CartMenu = ({items}) => {
    return (
        <div className="menu-cart">
            {items.map((item)=>{
                return(
                    <MenuCard key={item.id} item={item}/>
                )
            })}
            <div className="total-price">
                <h4>Total Price: $0</h4>
            </div>
        </div>
    )
}
