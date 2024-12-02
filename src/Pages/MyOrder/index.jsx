import { LayOut } from "../../Components/LayOut"
import '../../Components/CheckOutMenu/checkOut.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './MyOrder.css'
import { ShoppingCatContext } from '../../Context'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { OrderCard } from '../../Components/OrderCard';
function MyOrder () {
    const context = React.useContext(ShoppingCatContext);
    const products = context.carProducts;
    let totalPagar = 0;
    return(
        <LayOut>
        <aside className='flex my-order flex-col bg-blue-300 rounded-xl text-center'>
            <div>
                <div className='flex p-4 justify-between'>
                    <p>
                        Resumen de Pedido
                    </p>
                    <XMarkIcon className="size-6 text-grey-500 cursor-pointer" onClick={()=>{
                                context.closeCheckOut();
                            }}>
                    </XMarkIcon>
                </div>
            {products?.map((product)=>{
                totalPagar = totalPagar + product.price;
                return(
                    <OrderCard key={product.id} product={product}/>
                )
            })
            }
            <div className='p-4 flex align-middle justify-between items-center'>
                <CurrencyDollarIcon className='w-10 h-10'></CurrencyDollarIcon>
                <span className='text-sm font-thin'>Total a pagar</span>
                <span className='font-bold text-sm w-12'>${(totalPagar).toFixed(2)}</span>  
            </div>            
            </div>
            
        </aside>
        </LayOut>
    )
}
export {MyOrder}
