import { Card } from "../../Components/Card";
import { LayOut } from "../../Components/LayOut";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckOutMenu } from "../../Components/CheckOutMenu";
import React from "react";
function fetchData(){
    const [items, setItems] = React.useState([])
    React.useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response =>response.json())
      .then(data=>setItems(data))
    },[])
    return {items};
  }
function Home(){
    const {items} = fetchData();
    return(
        <LayOut>
            <h1>Ofertas del Día!!</h1>
            <div className="grid gap-4 grid-cols-4 pt-8 w-full max-w-screen-lg">
             {
                items?.map((item)=>{
                    return(
                        <Card key={item.id} data={item}/>
                    );
                })
            }
            </div>
           <ProductDetail/>
        </LayOut>
    );
}

export{Home}