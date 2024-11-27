import React from "react";
import { useRoutes, BrowserRouter} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { NotFound } from '../Pages/NotFound';
import {SignIn} from '../Pages/SignIn';


export const ShoppingCatContext = React.createContext();
const ShoppingCatProvider=({children})=>{
    const [count,setCount] = React.useState(0);
    return(
      <ShoppingCatContext.Provider value={{
        count,
        setCount
      }}>
        {children}
      </ShoppingCatContext.Provider>
    );
  };

  export default ShoppingCatProvider;

const AppRoutes=()=>{
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/*',
      element: <NotFound/>
    },
    {
      path: '/sing-in',
      element: <SignIn/>
    }
  ])
  return routes;
}
export {AppRoutes}