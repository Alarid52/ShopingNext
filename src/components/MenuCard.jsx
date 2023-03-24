import React from 'react'

export const MenuCard = ({item}) => {
    return (
        <div className="row">
            <div className="img-row">
                <img src={item.image} alt="img-item-${item.id}"/>
            </div>
            <div className="data-item-cart">
                <h5>{item.title}</h5>
                <h6>ID: <span>{item.id}</span></h6>
                <h4>${(item.price * item.quantity).toFixed(2)}</h4>
            </div>
            <div className="cuantity">
                <button type="button" className="btn-cuantity-min">-</button>
                <h5>{item.quantity}</h5>
                <button type="button" className="btn-cuantity-max">+</button>
            </div>
            <div className="delete-item">
                <button type="button" className="btn-delete">X</button>
            </div>
        </div>
    )
}
