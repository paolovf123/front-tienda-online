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
        context.closeProductDetail();
    }
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-red-50 border border-black rounded-xl items-center`}>
            <div className='w-full flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl '>
                    Detalles del producto
                </h2>
                <XMarkIcon className="size-6 text-grey-500 cursor-pointer" onClick={()=>{
                    context.closeProductDetail();
                }}></XMarkIcon>
            </div>
            <div className='flex flex-col items-center'>
                <img className="rounded-xl w-60 h-60 object-cover" src={product.image} alt="" />
                <p className='p-4 flex items-center align-middle justify-between'>
                <span className='text-xl'>{product.title}</span>
                <span className='font-bold text-4xl'>${product.price}</span>
                </p>
                <p className=' flex p-4 pt-0 font-thin '>
                    <span className='text-sm'>{product.description}</span>
                </p>
            </div>
            <button className= 'flex p-4 mb-4 rounded-xl justify-around border border-black w-64 h-14 items-center' onClick={()=>addProductToCar()}>
                <p className='text-xl font-bold'>Agregar al carrito</p>
                <ArrowRightCircleIcon className='w-8 h-8'></ArrowRightCircleIcon>
            </button>
        </aside>
    );
}
export {ProductDetail}