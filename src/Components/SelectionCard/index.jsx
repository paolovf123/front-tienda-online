import React from 'react';
import { ShoppingCatContext } from '../../Context'

const SelectionCard=({product})=>{
    const context = React.useContext(ShoppingCatContext);
    
    const products = context.carProducts;

    return(
        <div className='m-2 p-2 h-auto flex align-middle justify-around items-center rounded-xl border border-black'>
            <img className="rounded-xl w-14 h-14 object-cover" src={product.image} alt="" />
            <span className='text-sm font-thin w-32 h-auto'>{(product.title).slice(0,30)}</span>
            <span className='font-bold text-sm w-12'>${product.price}</span>
        </div>
    )
}
export { SelectionCard };