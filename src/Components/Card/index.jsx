import React from "react";
import {ShoppingCatContext} from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

function Card({data}){
    const context = React.useContext(ShoppingCatContext);
    const showProduct = ()=>{
        context.openProductDetail();
        context.setProductToShow(data);
    }
    return(
        <div onClick={()=>{
            showProduct();
        }}
        className='bg-red-100 cursor-pointer w-70 h-90 rounded-xl items-center'>
            <figure className='w-full h-5/6 relative mb-2 pb-0'>
                <img className="w-full h-full rounded-t-xl object-cover" src={data.images[0]}/>
                <span className="absolute text-sm text-gray-600  left-4 bottom-2 font-medium bg-slate-200 rounded-xl px-2">
                    {data.category.name}
                </span>

                <PlusIcon className="h-6 w-6 absolute right-4 top-3 rounded-full text-gray-300 " onClick={()=>context.setCount(context.count+1)}></PlusIcon>
                
            </figure>
            <p className="flex text-sm align-middle justify-between text-center items-center">
                    <span className="font-thin text-sm p-2 pt-0">
                        {data.title}
                    </span>
                    <span className="p-2 pt-0">
                        ${data.price}
                    </span>
                </p>
        </div>
    );
}
export {Card}

