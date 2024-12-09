import React, { useEffect } from "react";
import { useRoutes, BrowserRouter} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { NotFound } from '../Pages/NotFound';
import {SignIn} from '../Pages/SignIn';
import {MySelection} from '../Pages/MySelection'
import { Electronics } from "../Pages/Electronics";
import { Men } from "../Pages/Men";
import {Women} from "../Pages/Women";
import { Registro } from "../Pages/Resgistro";
export const ShoppingCatContext = React.createContext();
const ShoppingCatProvider=({children})=>{
    //usuarios
    const [usuarios,setUsuarios] = React.useState([]);
    //Loading
    const[loading,setLoading] = React.useState(true);
    //Cargando data
    const [items, setItems] = React.useState([]);

    function fetchData(){
      React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response =>response.json())
        .then(data=>setItems(data))

        setLoading(false);
      }
      ,[])
      return items;
    }
    fetchData();
    //Para ver la ancho de la pantalla
    const [isMobile, setIsMobile] = React.useState(false);
    const cambiarPantalla=()=>{
      setIsMobile(window.innerWidth < 600);
    }
    React.useEffect(()=>{
      cambiarPantalla();
      window.addEventListener('resize', cambiarPantalla);
      window.removeEventListener('resize', cambiarPantalla);
    },[])

    //items por categoria
    const [categoriaItem, setCatergoriaItem]= React.useState([]);
    //categoria de los items
    const [categoria, setCategoria] = React.useState("");
    //Buscando data por nombre
    const [buscandoProducto,setBuscandoProducto] = React.useState("");
    //Productos buscados
    const [itemsFiltrados,setItemsFiltrados] = React.useState([]);
    const filtrarProducto=(items,buscandoProducto)=>{
      return items.filter(item=>(item.title.toLowerCase()).includes(buscandoProducto.toLowerCase()))
    }
    const filtrarCategoria=(items,categoria)=>{
      return items.filter(item=>(item.category.toLowerCase())===(categoria.toLowerCase()))
    }
    React.useEffect(()=>{
      categoria
      ?setCatergoriaItem(filtrarCategoria(items,categoria))
      :setCatergoriaItem(items)
    },[items,categoria])

    React.useEffect(()=>{
      buscandoProducto
      ?setItemsFiltrados(filtrarProducto(categoriaItem,buscandoProducto))
      :setItemsFiltrados(categoriaItem)
    },[categoriaItem,buscandoProducto])
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
        setOrderSelection,
        items,
        setItems,
        fetchData,
        buscandoProducto,
        setBuscandoProducto,
        itemsFiltrados,
        setItemsFiltrados,
        categoria,
        setCategoria,
        categoriaItem,
        setCatergoriaItem,
        isMobile,
        setIsMobile,
        loading,
        setLoading,
        usuarios,
        setUsuarios
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
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/my-selection',
      element: <MySelection/>
    },
    {
      path:'/electronics',
      element: <Electronics/>
    },
    {
      path:'/men',
      element: <Men/>
    },
    {
      path:'/women',
      element: <Women/>
    },
    {
      path:'/registrar',
      element: <Registro/>
    }
  ])
  return routes;
}
export {AppRoutes}