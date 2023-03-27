import { ButtonCart } from './ButtonCart';
import { CartMenu } from './CartMenu';

export const NavBar = ({ viewMenu, itemsCartMenu, buttons }) => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="../img/fake-logo.png" alt="fake-logo" />
                <img src="../img/strore-logo.png" alt="store-logo" id="fake-nav" />
            </div>
            <div className="cart">
                {(viewMenu && (<CartMenu itemsCartMenu={itemsCartMenu} buttons={buttons} />))}
                <ButtonCart view={buttons.view} />
            </div>
        </nav>
    )
}
