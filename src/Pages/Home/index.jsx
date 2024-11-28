import { Card } from "../../Components/Card";
import { LayOut } from "../../Components/LayOut";
import { ProductDetail } from "../../Components/ProductDetail";
import React from "react";
function fetchData(){
    const [items, setItems] = React.useState([])
    React.useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response =>response.json())
      .then(data=>setItems(data))
    },[])
    return {items};
  }
function Home(){
    const {items} = fetchData();
    return(
        <LayOut>
            <h1>Gatitos en Adopción!!</h1>
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