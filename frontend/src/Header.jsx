import { useContext } from "react"
import { CartContext } from "./Contexts.jsx";
import { Link } from '@tanstack/react-router';

export default function Header() {

    const [cart] = useContext(CartContext);

    return (
        <nav>
            <Link to="/">
                <h1 className="logo">Papa Pizza</h1>
            </Link>
            <div className="nav-cart">
                <span className="cart-icon">&#128722;</span>
                <span className="nav-cart-number">
                    { cart.length }
                </span>
            </div>
        </nav>
    )
}
