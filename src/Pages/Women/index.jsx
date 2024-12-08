import { Card } from "../../Components/Card";
import { LayOut } from "../../Components/LayOut";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCatContext } from "../../Context";
import React from "react";

function Women(){
    const context = React.useContext(ShoppingCatContext);
    context.setItems(context.fetchData());
    const itemsFiltrados = context.itemsFiltrados;
    return(
        <LayOut>
            <h1>Nuestros Productos</h1>
            <input type="text" placeholder="Busca un producto mano" className="w-1/3 border border-black text-center rounded-lg text-2xl font-thin" onChange={(e)=>{
                context.setBuscandoProducto(e.target.value);
            }}/>
            <div className="grid gap-4 grid-cols-4 pt-8 w-full max-w-screen-lg">
             {
                itemsFiltrados?.map((item)=>{
                    return(
                        <Card key={item.id} data={item}/>
                    )
                })
            }
            </div>
           <ProductDetail/>
        </LayOut>
    );
}

export{Women}