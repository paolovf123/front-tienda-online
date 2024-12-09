import { Card } from "../../Components/Card";
import { LayOut } from "../../Components/LayOut";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCatContext } from "../../Context";
import React from "react";
import "./Home.css";
function Home(){
    const context = React.useContext(ShoppingCatContext);
    const itemsFiltrados = context.itemsFiltrados;
    return(
        <LayOut>
            {
                context.isMobile
                ?context.loading
                    ?   <img src="https://img.pikbest.com/ai/illus_our/20230422/4e876aac6fbe443ad142c1634814f00d.jpg!w700wp" className="flex items-center object-cover"/>
                    :
                        <>
                        <h1>Nuestros Productos</h1>
                        <input type="text" placeholder="Busca un producto" className="w-2/3 border border-black text-center rounded-lg text-2xl font-thin" onChange={(e)=>{
                        context.setBuscandoProducto(e.target.value);
                        }}/>
                        <div className="home-cards grid gap-4 grid-cols-1 pt-8 w-full max-w-screen-lg">
                        {
                            itemsFiltrados?.map((item)=>{
                            return(
                                <Card key={item.id} data={item}/>
                            )
                        })
                        }
                        </div>
                        <ProductDetail/>
                        </>
                :context.loading
                    ?   <img src="https://img.pikbest.com/ai/illus_our/20230422/4e876aac6fbe443ad142c1634814f00d.jpg!w700wp" alt=""  className="w-full object-cover top-0"/>
                    :
                        <>
                        <h1>Nuestros Productos</h1>
                        <input type="text" placeholder="Busca un producto" className="w-1/3 border border-black text-center rounded-lg text-2xl font-thin" onChange={(e)=>{
                        context.setBuscandoProducto(e.target.value);
                        }}/>
                        <div className="home-cards grid gap-4 grid-cols-4 pt-8 w-full max-w-screen-lg">
                        {
                            itemsFiltrados?.map((item)=>{
                            return(
                                <Card key={item.id} data={item}/>
                            )
                        })
                        }
                        </div>  
                        <ProductDetail/>
                        </>
                
            }
        </LayOut>
    );
}

export{Home}