import React from "react";
import { useRoutes, BrowserRouter} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { NotFound } from '../Pages/NotFound';
import {SignIn} from '../Pages/SignIn';
import {MySelection} from '../Pages/MySelection'

export const ShoppingCatContext = React.createContext();
const ShoppingCatProvider=({children})=>{
    //Contador del carrito de compra
    const [count,setCount] = React.useState(0);

    
    
    //Ver la información del producto
    const [productToShow,setProductToShow] = React.useState({});
    //Abrir una sección para la información del producto
    const [isProductDetailOpen,setIsProductDetailOpen]= React.useState(false);
    //abrir o cerrar detalles de productos
    const openProductDetail = ()=>{
      setIsProductDetailOpen(true);
    }
    const closeProductDetail = ()=>{
      setIsProductDetailOpen(false);
    }
    const [orders, setOrders] = React.useState([]);

    const [orderSelection,setOrderSelection] = React.useState({});

    function borrarProduct(id,products){
      const updatedProduct = products.filter((product) => product.id !== id);
      setCarProducts(updatedProduct)
      setCount(count-1);
  }
    //almacenar los datos de una card en el carrito
    const [carProducts,setCarProducts] = React.useState([]);
    //Abrir una sección para el checkOut de productos
    const [isCheckOutOpen,setIsCheckOutOpen]= React.useState(false);
    //abrir o cerrar checkout
    const openCheckOut = ()=>{
      setIsCheckOutOpen(true);
    }
    const closeCheckOut = ()=>{
      setIsCheckOutOpen(false);
    }
    return(
      <ShoppingCatContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        setCarProducts,
        carProducts,
        openCheckOut,
        closeCheckOut,
        isCheckOutOpen,
        borrarProduct,
        orders,
        setOrders,
        orderSelection,
        setOrderSelection
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
    },
    {
      path: '/my-selection',
      element: <MySelection/>
    }
  ])
  return routes;
}
export {AppRoutes}