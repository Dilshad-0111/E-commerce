import Layout from "./Layout"
import { product } from ".../data/product";
import { useState, useEffect } from "react";
export default function Mouse() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(product);
  }, []);
  const Mouse=product.filter((cur) => cur.category == "Mouse")


  return (
    <>
      <h2 className="text centre bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Poplur Mouse</h2>
      <div className="flex flex-wrap justify-center">

        {
          Mouse.map(() => (
            <div>
              <Layout name={cur}/>
            </div>
          ))
        }

      </div>
    </>
  )
}