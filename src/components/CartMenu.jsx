import { MenuCard } from './MenuCard';

export const CartMenu = ({ itemsCartMenu, buttons }) => {

    return (
        <div className="menu-cart">
            {itemsCartMenu.map((item) => <MenuCard key={item.id} item={item} buttons={buttons} />)}
            <div className="total-price">
                <button type="button" className="btn-drop" onClick={buttons.delAll}>Empty Cart</button>
                <h4>Total Price: ${(itemsCartMenu.length === 0) ? 0 : itemsCartMenu.map((item) => item.quantity * item.price).reduce((prev, next) => prev + next).toFixed(2)}</h4>
            </div>
        </div>
    )
}