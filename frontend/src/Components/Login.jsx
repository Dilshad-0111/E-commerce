
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate();
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
  <form className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

    <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
      Login Form
    </h2>

    <div className="mb-5">
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>

    <div className="mb-6">
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Password
      </label>

      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
     onClick={()=>navigate("/")}>

      Login
    </button>

  </form>
</div>


    </>
  )
}
