import Layout from "./Layout"
import {product} from ".../data/product";
import {useState,useEffect} from "react";
export default function Laptop() {
  const[product,setProduct]=useState([])
   useEffect(()=>{ 
    setProduct(product);
   },[])
   const mobile=product.filter((cur)=>cur.category=="laptop")
  
  return (
    <>
      <h2 className="text centre bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Poplur Laptop</h2>
      <div className="flex flex-wrap justify-center">
        {laptop.map((cur) => (
          <div> 
            <Layout name={cur}></Layout>/
          </div>
        ))}

      </div>
    </>
  )
}
