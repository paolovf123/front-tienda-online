import { LayOut } from "../../Components/LayOut"
import '../../Components/CheckOutMenu/checkOut.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './MyOrder.css'
import { NavLink } from "react-router-dom";
import { ShoppingCatContext } from '../../Context'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { OrderCard } from '../../Components/OrderCard';
import { CreditCardIcon } from "@heroicons/react/24/outline";

function MyOrder () {
    const context = React.useContext(ShoppingCatContext);
    const products = context.carProducts;
    let totalPagar = 0;
    const pagarPedido=()=>{
        const orderToAdd ={
            date : (new Date()).toLocaleString(),
            products: products,
            total : products.length,
            totalPrice: (totalPagar).toFixed(2),
        }
        context.setOrders([...context.orders,orderToAdd]);
        context.setCarProducts([]);
        context.setCount(0);
    }
    console.log(context.orders);
    return(
        <LayOut>
        <aside className='flex my-order flex-col rounded-xl text-center align-center items-center'>
            <div className='flex flex-col p-4 justify-between text-center w-full'>
                <div className='flex p-4 justify-between text-center w-full items-center'>
                    <p className="text-center p-4 justify-between w-full">
                        Resumen de Pedido
                    </p>

                    <NavLink to={'/'}>
                        <XMarkIcon className="size-6 text-grey-500 cursor-pointer">
                        </XMarkIcon>
                    </NavLink>
                </div>
            {products ?.map((product)=>{
                totalPagar = totalPagar + product.price;
                return(
                    <OrderCard key={product.id} product={product}/>
                )
            })
            }
            <div className='p-4 flex align-middle justify-between items-center'>
                <CurrencyDollarIcon className='w-8 h-8'></CurrencyDollarIcon>
                <span className='text-sm font-thin'>Total a pagar</span>
                <span className='font-bold text-sm w-12'>${(totalPagar).toFixed(2)}</span>  
            </div>            
            </div>
            <NavLink to={'/'}>
                <button className="flex align-center items-center justify-between p-4 mb-4 w-40 h-5 bg-black text-white rounded-lg" onClick={()=>{
                        pagarPedido();
                    }
                    }>
                    <p className="font-thin text-xl">YAPEAR</p>
                    <CreditCardIcon className="w-6 h-6" ></CreditCardIcon>
                </button>
            </NavLink>

        </aside>

        </LayOut>
    )
}
export {MyOrder}
