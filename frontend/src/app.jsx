import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx"

const App = () => {
    return(
        <div>
            <Order/>
            <PizzaOfTheDay/>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)
