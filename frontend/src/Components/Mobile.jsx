import Layout from "./Layout"
import { product } from "../data/product";
import { useState, useEffect } from "react";
export default function Moblile() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products);
  }, [])
  const mobile = product.filter((cur) => cur.category == "mobile")


  return (
    <>
      <h2 className="text centre bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Poplur Mobile</h2>
      <div className="flex flex-wrap justify-center">
        {
          mobile.map(() => (
            <div>
              <Layout name={cur}></Layout>
            </div>
          ))
        }

      </div>
    </>
  )
}
