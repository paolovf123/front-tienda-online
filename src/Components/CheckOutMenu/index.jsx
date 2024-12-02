import './checkOut.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { ShoppingCatContext } from '../../Context'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { OrderCard } from '../OrderCard';
function CheckOutMenu(){
    const context = React.useContext(ShoppingCatContext);
    
    const products = context.carProducts;
    let totalPagar = 0;
    function borrarProduct(id){
        const updatedProduct = products.filter((product) => product.id !== id);
        context.setCarProducts(updatedProduct)
    }
    return(
        <aside className={`${context.isCheckOutOpen ? 'flex' : 'hidden'} check-out-menu flex-col  right-0 bg-red-300 rounded-xl text-center`}>
            <div>
                <div className='flex p-4 justify-between'>
                    <p>
                        Mis Pedidos
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
            <button className='pay-button w-40 h-10 bg-red-800 uppercase text-white font-bold letter tracking-wider cursor-pointer rounded-xl'> ir a pagar
                
                </button>
            </div>
            
        </aside>
    );
}
export { CheckOutMenu }