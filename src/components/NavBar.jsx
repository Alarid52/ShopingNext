import { ButtonCart } from './ButtonCart';

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="../img/fake-logo.png" alt="fake-logo" />
                <img src="../img/strore-logo.png" alt="store-logo" id="fake-nav" />
            </div>
            <div className="cart">
                <ButtonCart />
            </div>
        </nav>
    )
}
