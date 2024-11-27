import { NavLink } from "react-router-dom";
import { ShoppingCatContext } from "../../Context";
import React from "react";
const NavBar = () =>{

    const activeStyle = 'underline underline-offset-4';

    const context = React.useContext(ShoppingCatContext);

    return(
        <nav className="flex justify-between items-center w-full z-10 top 0 py-3 px-6 font-light">
            <ul className="flex items-center gap-4">
                <li className="font-bold text-2xl">
                    <NavLink 
                     to='/'
                     className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }
                    >
                        gatify
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/quienes-somos'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }
                    >
                        quienes somos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/adoptar'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        adoptar
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/comida'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        comida
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ropa'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dar-en-adopcion'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        dar en adopción
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li className="text-black/65">
                    correodelusuario@sadas.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        Mis Ordenes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        Mi Cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                        Iniciar Session
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/my-order'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }>
                    <button className="relative w-10 h-10">
                        <span className="absolute w-4 h-4 m-0 text-center text-xs top-1 left-4 z-10 bg-emerald-500 rounded-full border items-center">{context.count}</span>
                        <img className="absolute top-1 w-full h-full object-cover rounded-full" src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-shop-cart-icon-symbol-simple-design-mall-icon-shopping-cart-vector-png-image_12176236.png"></img>
                    </button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};