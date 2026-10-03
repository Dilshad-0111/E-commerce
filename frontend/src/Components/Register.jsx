import React from 'react'

export default function Register() {
  return (
    <>
<div className="flex min-h-screen items-center justify-center bg-gray-800 px-4">
  <form className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

    <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
      Register Form
    </h2>

    <div className="mb-4">
      <label
        htmlFor="name"
        className="mb-2 block font-semibold text-gray-700"
      >
        Full Name
      </label>

      <input
        id="name"
        type="text"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        placeholder="Enter your full name"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="email"
        className="mb-2 block font-semibold text-gray-700"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-6">
      <label
        htmlFor="password"
        className="mb-2 block font-semibold text-gray-700"
      >
        Password
      </label>

      <input
        id="password"
        type="password"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        placeholder="Enter your password"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
    >
      Login
    </button>

  </form>
</div>

    </>
  )
}
