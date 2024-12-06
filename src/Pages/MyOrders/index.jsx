import { LayOut } from "../../Components/LayOut";
import React from "react";
import { ShoppingCatContext } from "../../Context";
import { NavLink } from "react-router-dom";
function MyOrders () {
    const context = React.useContext(ShoppingCatContext);
    const orders = context.orders;
    return(
        <LayOut>
            <ul className="w-8/12 h-auto rounded-xl border border-black items-center flex flex-col">
            <h1>Lista de Pedidos</h1>
            <div className="w-full flex justify-around text-xl font-thin border border-t-black border-b-black border-l-0 border-r-0 p-4"> 
                <p className="w-60 text-center">Fecha de compra</p>
                <p className="w-60 text-center">Hora de compra</p>
                <p className="w-60 text-center">Total Productos</p>
                <p className="w-60 text-center">Monto Total</p>
            </div>
                {orders?.map((order)=>{
                    return(
                        <NavLink to='/my-selection' className="w-full">
                            <li key={order.date} className="flex text-xl font-thin items-center justify-around w-full p-4 pointer-hover" onClick={()=>{
                            context.setCarProducts(order.products);
                        }}>
                                <div className="w-60 text-center">{(order.date).slice(0,9)}</div>
                                <div className="w-60 text-center">{(order.date).slice(10,19)}</div>
                                <div className="w-60 text-center">{order.total}</div>
                                <div className="w-60 text-center">{order.totalPrice}</div>
                            </li>
                        </NavLink> 
                        
                )
                })}
            </ul>
        </LayOut>
    )
}
export {MyOrders}