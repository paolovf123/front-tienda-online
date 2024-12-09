import React from "react";
import {ShoppingCatContext} from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
function Card({data}){
    const context = React.useContext(ShoppingCatContext);
    const showProduct = ()=>{
        context.openProductDetail();
        context.setProductToShow(data);
        context.closeCheckOut();
    }
    const addProductToCar =()=>{
        context.setCount(context.count+1);
        context.setCarProducts([...context.carProducts,data]);
    }
    const renderIcon = (id)=>{
        const isInCar = context.carProducts.filter(product => product.id == id).length > 0
        if (isInCar){
            return(
                <CheckBadgeIcon className="h-6 w-6 absolute right-4 top-3 rounded-full bg-black text-gray-400 " onClick={()=>{
                    context.borrarProduct(id,context.carProducts)
                }}></CheckBadgeIcon>
            )
        }
        else{
            return(
                <PlusIcon className="h-6 w-6 absolute right-4 top-3 rounded-full text-gray-400 " onClick={()=>addProductToCar()}></PlusIcon>
            )
        }
    }
    return(
        <div className='border border-black flex flex-col cursor-pointer w-60 h-75 rounded-xl items-center relative text-center'>
            <figure className='flex w-58 h-60 relative mb-2 pb-0' 
            onClick={()=>{
            showProduct();
        }}>
                <img className="w-full rounded-t-xl object-cover" src={data.image}/>
                <button className="absolute text-sm text-gray-600  left-4 bottom-2 font-medium bg-slate-200 rounded-xl px-2" onClick={()=>{
                    context.setCategoria(data.category);
                }}>
                    {data.category}
                </button>     
            </figure>
            {renderIcon(data.id)}
        <p className="flex text-sm align-middle justify-between text-center items-center" 
            onClick={()=>{
            showProduct();
        }}>
            <span className="font-thin text-sm p-2 pt-0">
                {(data.title).slice(0,35)+"..."}
            </span>
            <span className="p-2 pt-0">
                ${data.price}
            </span>
            </p>
        </div>
    );
}
export {Card}
