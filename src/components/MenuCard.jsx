export const MenuCard = ({item, buttons}) => {
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
                 <button type="button" className="btn-cuantity-min" onClick={()=> buttons.min(item)}>-</button>
                <h5>{item.quantity}</h5>
                <button type="button" className="btn-cuantity-max" onClick={()=> buttons.add(item)}>+</button>
            </div>
            <div className="delete-item">
                <button type="button" className="btn-delete"  onClick={()=> buttons.del(item)}>X</button>
            </div>
        </div>
    )
}
