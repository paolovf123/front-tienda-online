import { LayOut } from "../../Components/LayOut"
import '../../Components/CheckOutMenu/checkOut.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './MyOrder.css'
import { NavLink } from "react-router-dom";
import { ShoppingCatContext } from '../../Context'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { SelectionCard } from '../../Components/SelectionCard';

function MySelection(){
    const context = React.useContext(ShoppingCatContext);
    const products = context.carProducts;
    let totalPagar = 0;
    return(
        <LayOut>
        <aside className='flex my-order flex-col rounded-xl text-center align-center items-center'>
            <div className='flex flex-col p-4 justify-between text-center w-full'>
                <div className='flex p-4 justify-between text-center w-full items-center'>
                    <p className="text-center p-4 justify-between w-full">
                        Resumen de Pedido
                    </p>

                    <NavLink to={'/my-orders'}>
                        <XMarkIcon className="size-6 text-grey-500 cursor-pointer" onClick={()=>{
                            context.setCarProducts([]);
                        }}>
                        </XMarkIcon>
                    </NavLink>
                </div>
            {products ?.map((product)=>{
                totalPagar = totalPagar + product.price;
                return(
                    <SelectionCard key={product.id} product={product}/>
                )
            })
            }
            <div className='p-4 flex align-middle justify-between items-center'>
                <CurrencyDollarIcon className='w-8 h-8'></CurrencyDollarIcon>
                <span className='text-sm font-thin'>Total pagado</span>
                <span className='font-bold text-sm w-12'>${(totalPagar).toFixed(2)}</span>  
            </div>            
            </div>
        </aside>

        </LayOut>
    )
}
export { MySelection }