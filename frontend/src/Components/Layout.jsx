import ViewDetails from "../Pages/ViewDetails"
import { useNavigate } from "react-router-dom"
export default function Layout(props) {
  const navigate=useNavigate()
  
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl m-4">

      {/* Image */}
      <div className="h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={props.name.Image}
          alt={props.name.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Product Name */}
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          {props.name}
        </h2>

        {/* Properties */}
        <p className="mb-2 text-sm font-medium text-gray-500">
          {props.name.Properties}
        </p>

        {/* Description */}
        <p className="mb-4 text-gray-600">
          {props.name.Discription}
        </p>

        {/* Color */}
        <div className="mb-4 flex items-center gap-2">
          <span className="font-semibold text-gray-700">Color:</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {props.name.Color}
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">

          <span className="text-2xl font-bold text-green-600">
            {props.name.Price}
          </span>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95">
            onclick={()=>navigate(' /viewDetails/${props.name.id}')}
            View Details
          </button>

        </div>
      </div>
    </div>
  )
}

