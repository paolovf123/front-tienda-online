import './product.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { ShoppingCatContext } from '../../Context'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

function ProductDetail(){
    
    const context = React.useContext(ShoppingCatContext);

    let product = context.productToShow;
    const addProductToCar =()=>{
        context.setCount(context.count+1);
        context.setCarProducts([...context.carProducts,product]);
    }
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-slate-100 border border-black rounded-xl`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl '>
                    Detalles
                </h2>
                <XMarkIcon className="size-6 text-grey-500 cursor-pointer" onClick={()=>{
                    context.closeProductDetail();
                }}></XMarkIcon>
            </div>
            <div>
                <img className="rounded-xl w-full object-cover" src={product.image} alt="" />
                <p className='p-4 flex text-center align-middle justify-between'>
                <span className='text-xl'>{product.title}</span>
                <span className='font-bold text-4xl'>${product.price}</span>
                </p>
                <p className=' flex p-4 pt-0 font-thin '>
                    <span className='text-sm'>{product.description}</span>
                </p>
            </div>
            <button className= 'flex p-4 justify-around' onClick={()=>addProductToCar()}>
                <p className='text-xl font-bold'>Agregar al carrito</p>
                <ArrowRightCircleIcon className='w-8 h-8'></ArrowRightCircleIcon>
            </button>
        </aside>
    );
}
export {ProductDetail}