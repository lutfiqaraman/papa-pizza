import { useContext } from "react"
import { CartContext } from "./contexts.jsx";

export default function Header() {

    const [cart] = useContext(CartContext);

    return (
        <nav>
            <h1 className="logo">Papa Pizza</h1>
            <div className="nav-cart">
                <span className="cart-icon">&#128722;</span>
                <span className="nav-cart-number">
                    { cart.length }
                </span>
            </div>
        </nav>
    )
}
