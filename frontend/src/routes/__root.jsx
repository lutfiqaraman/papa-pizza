import { useState } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import PizzaOfTheDay  from '../PizzaOfTheDay.jsx';
import Header from '../Header.jsx';
import { CartContext } from '../Contexts.jsx';
import Order from "../routes/order.lazy.jsx";

export const Route = createRootRoute({
    component: () => {

        const cartHook = useState([]);

        return(
            <>
                <CartContext.Provider value={cartHook}>
                    <div>
                        <Header />
                        <Outlet/>
                        <PizzaOfTheDay/>
                    </div>
                </CartContext.Provider>
                <TanStackRouterDevtools/>
            </>
        );

    }
})
