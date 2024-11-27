import React from "react";
import {ShoppingCatContext} from "../../Context";

function Card(props){
    const context = React.useContext(ShoppingCatContext);
    
    return(
        <div className='bg-red-100 cursor-pointer w-70 h-90 rounded-xl items-center'>
            <figure className='w-full h-5/6 relative mb-2 pb-0'>
                <img className="w-full h-full rounded-t-xl object-cover" src={props.image}/>
                <span className="absolute text-sm text-gray-600  left-4 bottom-2 font-medium bg-slate-200 rounded-xl px-2">
                    {props.category}
                </span>
                <button className="w-5 h-5 absolute right-4 top-3 rounded-full">
                    <img className="w-full h-full bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/6325/6325028.png" alt="" onClick={()=>context.setCount(context.count+1)} />
                </button>
            </figure>
            <p className="flex text-sm align-middle justify-between text-center items-center">
                    <span className="font-thin text-sm p-2 pt-0">
                        {props.title}
                    </span>
                    <span className="p-2 pt-0">
                        ${props.price}
                    </span>
                </p>
        </div>
    );
}
export {Card}