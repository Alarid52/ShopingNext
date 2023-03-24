import { ButtonCart } from './ButtonCart';

export const NavBar = ({menu}) => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="../img/fake-logo.png" alt="fake-logo" />
                <img src="../img/strore-logo.png" alt="store-logo" id="fake-nav" />
            </div>
            <div className="cart">
                {(menu && (<div className="menu-cart">
                    <div className="total-price">
                        <h4>Total Price: $0</h4>
                    </div>
                </div>))}
                <ButtonCart />
            </div>
        </nav>
    )
}
