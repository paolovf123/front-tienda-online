import React from 'react';
import { ShoppingCatContext } from '../../Context'
import { TrashIcon } from '@heroicons/react/24/outline';

const OrderCard=({product})=>{
    const context = React.useContext(ShoppingCatContext);
    
    const products = context.carProducts;

    function borrarProduct(id){
        const updatedProduct = products.filter((product) => product.id !== id);
        context.setCarProducts(updatedProduct)
    }
    return(
        <div className='m-4 p-4 h-auto flex align-middle justify-between bg-green-300 items-center rounded-xl'>
            <img className="rounded-xl w-14 h-14 object-cover" src={product.image} alt="" />
            <span className='text-sm font-thin w-32 h-auto'>{product.title}</span>
            <TrashIcon className = "w-4 h-4 text-gray-400" onClick={()=>{
                borrarProduct(product.id);
            }}
            ></TrashIcon>
            <span className='font-bold text-sm w-12'>${product.price}</span>
        </div>
    )
}
export { OrderCard };
