import { NavLink } from "react-router-dom";
import { ShoppingCatContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
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
                    <button className=" flex w-10 h-10 items-center justify-between">
                        <ShoppingCartIcon className="w-6 h-6"> </ShoppingCartIcon>
                        <span className=" w6 h-6">{context.count}</span>
                    </button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};