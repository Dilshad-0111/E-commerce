// import { Link,useNavigate } from "react-router-dom"
// import { GiHamburgerMenu } from "react-icons/gi";
//  import{ useState } from "react";
// export default function Navbar() {

//   const navigate=useNavigate()

//   const[openMenu,setOpenMenu]=useState(false); 
//   return (
//     <>
//       <div className="flex justify-around bg-black">
//         <button className="md:hidden text-white" onClick={()=>setOpenMenu(!openMenu)}>
//         <GiHamburgerMenu />
//         </button> 
//         <div>
//           <h1 className="text-white p-4 text-xl">ApniMarket</h1>
//         </div>
//         <div className="hidden md:flex items-center">
//           <ul className="flex text-white">
//             <li>Home</li>
//             <li>Contact</li>
//             <li>AboutUs</li>
//             <li className="relative group">
//               <span className="text-blue-500 cursor-pointer">
//                 products
//               </span>
//               <div className="hidden group-hover:flex flex-col absolute bg-black text-white shadow-md p-3" >
//                 <Link to="/mobile">Mobile</Link>
//                 <Link to="/laptop">Laptop</Link>
//                 <Link to="/mouse">Mouse</Link>
//                 <Link to="/ac">AC</Link>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden md:flex text-white">
//           <button className="bg-blue-300 px-4 m-4 hover:bg-green-500"onClick={()=>navigate("/Login")}>Login</button>
//           <button className="bg-blue-300 px-4 m-4 hover:bg-green-500" onClick={()=>navigate("/Register")}>Register</button>
//           <button className="bg-blue-300 px-4 m-4 hover:bg-red-500">Logout</button>
//         </div>

//         {/* <button className="md:hidden text-white" onClick={()=>setOpenMenu(!openMenu)}>
//         <GiHamburgerMenu />
//         </button>  */}

//         {
//         openMenu &&(
//           <>
//           <ul className="hidden md:flex text-white">
//             <li><link onClick={()=>navigate('/')}>Home</link></li>
//             <li><link onClick={()=>navigate('/about')}>About</link></li>
//             <li><link onClick={()=>navigate('/contact')}>Contact</link></li>
//           </ul>

//           <ul className="hidden md:flex text-white">
//             <li><link onClick={()=>navigate('/product')}>Product</link></li>
//             <li><link onClick={()=>navigate('/mobile')}>Mobile</link></li>
//             <li><link onClick={()=>navigate('/laptop')}>Laptop</link></li>
//             <li><link onClick={()=>navigate('/mouse')}>Mouse</link></li>
//             <li><link onClick={()=>navigate('/ac')}>Ac</link></li>
//           </ul>
//           </>
//         )
//        } 
//       </div>

       
      
//     </>
//   )
// }


import { Link,useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
   const navigate=useNavigate()

   const[openMenu,setOpenMenu]=useState(false);
   console.log(openMenu)
  return (
    <>
      <div className="flex justify-around bg-black">
        <button className="md:hidden text-white" onClick={()=>setOpenMenu(!openMenu)}>
          <GiHamburgerMenu />
        </button>
        <div>
          <h1 className=" text-white p-4 text-xl">ApniMarket</h1>
        </div>

         {
        openMenu && (
          <>
            <ul className="text-white md:hidden">
              <li><Link onClick={()=>navigate('/')}>Home</Link></li>
              <li><Link onClick={()=>navigate('/about')}>About</Link></li>
              <li><Link onClick={()=>navigate('/contact')}>Contact</Link></li>
            </ul>
           
             <ul className="text-white md:hidden">
              <li><Link onClick={()=>navigate('/')}>Products</Link></li>
              <li><Link onClick={()=>navigate('/mobile')}>Mobile</Link></li>
              <li><Link onClick={()=>navigate('/laptop')}>Laptop</Link></li>
               <li><Link onClick={()=>navigate('/mouse')}>Mouse</Link></li>
              <li><Link onClick={()=>navigate('/ac')}>Ac</Link></li>
              
              
            </ul>


          </>
        )
         }
       
        <div className="hidden md:flex items-center">
          <ul className="flex text-white gap-4">
            <Link to="/">Home</Link>
            <Link>Contact</Link>
            <Link to="/about">Aboutus</Link>
            <li className="relative group">
              <span className="text-blue-500 cursor-pointer">
                Products
              </span>

               <div
    className="hidden group-hover:flex absolute top-full left-0
               bg-black text-white shadow-lg rounded-md
               p-2 flex-col w-32 z-50"
  >
                <Link to="/mobile">Mobile</Link>
                <Link to="/laptop">Laptops</Link>
                <Link to="/mouse">Mouse</Link>
                <Link to="/ac">AC</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500" onClick={()=>navigate("/login")}>Login</button>
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500" onClick={()=>navigate("/register")}>register</button>
        </div>
        {/* <button className="md:hidden text-white text-xl"
        onClick={()=>setOpenMenu(!openMenu)}>
            <GiHamburgerMenu />
        </button> */}

        
       
         
      </div>
        {/* MOBILE MENU - OUTSIDE MAIN NAVBAR */}

      
      
    </>

    
  )
}