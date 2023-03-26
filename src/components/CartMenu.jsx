import { MenuCard } from './MenuCard';

export const CartMenu = ({ items, buttons }) => {

    let totalPrice = (items.length === 0) ? 0 : items.map((item) => item.quantity * item.price).reduce((prev, next) => prev + next);

    return (
        <div className="menu-cart">
            {items.map((item) => <MenuCard key={item.id} item={item} buttons={buttons} />)}
            <div className="total-price">
                <button type="button" className="btn-drop" onClick={buttons.delAll}>Empty Cart</button>
                <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
        </div>
    )
}