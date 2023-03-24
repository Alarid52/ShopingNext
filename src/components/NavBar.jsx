import { ButtonCart } from './ButtonCart';
import { CartMenu } from './CartMenu';

export const NavBar = ({menu, view, itemMenu}) => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="../img/fake-logo.png" alt="fake-logo" />
                <img src="../img/strore-logo.png" alt="store-logo" id="fake-nav" />
            </div>
            <div className="cart">
                {(menu && (<CartMenu items = {itemMenu}/>))}
                <ButtonCart view={view}/>
            </div>
        </nav>
    )
}
