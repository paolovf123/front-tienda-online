import './product.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { ShoppingCatContext } from '../../Context'
function ProductDetail(){
    const context = React.useContext(ShoppingCatContext);
    console.log(context.productToShow);
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-slate-100 border border-black rounded-xl`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl '>
                    Detalles
                </h2>
                <XMarkIcon className="size-6 text-grey-500 " onClick={()=>{
                    context.closeProductDetail();
                }}></XMarkIcon>
            </div>
            <div>
                
            </div>
        </aside>
    );
}
export {ProductDetail}