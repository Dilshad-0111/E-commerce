import Layout from "./Layout"
import {product} from ".../data/product";
import { useState,useEffect } from "react";
export default function Ac() {
  const[product,setProduct]=useState([]);
  useEffect(()=>{
    setProduct(product);
  },[])
  const ac=product.filter((cur)=>cur.category=="Ac")




  return (
     <>
          <h2 className="text centre">Poplur AC</h2>
          <div className="flex flex-wrap justify-center">
            {ac.map((cur) => (
              <div>
                <Layout name={cur}/>
              </div>
            ))}
    
          </div>
        </>
  )
}
