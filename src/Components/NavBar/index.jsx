import { NavLink } from "react-router-dom";
import { ShoppingCatContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
const NavBar = () =>{

    const activeStyle = 'underline underline-offset-4';
    const context = React.useContext(ShoppingCatContext);
    
    const openCheck = ()=>{
        context.openCheckOut();
        context.closeProductDetail();
    }
    return(
        <nav className="bg-red-300 flex justify-between items-center w-full z-10 top 0 py-3 px-6 font-light">
            <ul className="flex items-center gap-4">
                <li className="font-bold text-2xl">
                    <NavLink 
                     to='/'
                     className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }
                    onClick={()=>{
                        context.setCategoria("");
                    }}
                    >
                        gatify
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    } onClick={()=>{
                        context.setCategoria("electronics")
                    }
                    }
                    >
                        Electronic
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/women'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    }
                    onClick={()=>{
                        context.setCategoria("women's clothing")
                    }}
                    >
                        Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men'
                    className={({isActive})=>
                        isActive ? activeStyle:undefined
                    } onClick={()=>{
                        context.setCategoria("men's clothing")
                    }}>
                        Varon
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
                    <button onClick={()=>{
                        openCheck()
                    }} className=" flex w-10 h-10 items-center justify-between">
                        <ShoppingCartIcon className="w-6 h-6"> </ShoppingCartIcon>
                        <span className=" w6 h-6">{context.count}</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};