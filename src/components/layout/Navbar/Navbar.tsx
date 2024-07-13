import Headroom from "react-headroom"
import DrawerNav from "./DrawerNavbar"
import { HiOutlineMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { useAppSelector } from "../../../redux/hooks";
import Container from "../Container";


export default function Navbar() {
  const cartItems = useAppSelector(state => state.cart);

  
  const navLinks = <>
   <li ><NavLink to='/' className={`cursor-pointer font-semibold  px-4 py-[3px] text-gray-700  hover:border-b-[1px] border-b-gray-400`} >Home</NavLink></li>
   
   <li ><NavLink to='/products' className={`cursor-pointer font-semibold  px-4 py-[3px] text-gray-700  hover:border-b-[1px] border-b-gray-400`} >Products</NavLink></li>

   <li ><NavLink to='/cart' className={`cursor-pointer font-semibold  px-4 py-[3px] text-gray-700  hover:border-b-[1px] border-b-gray-400`} >Cart</NavLink></li>

   <li ><NavLink to='/product-management' className={`cursor-pointer font-semibold  px-4 py-[3px] text-gray-700  hover:border-b-[1px] border-b-gray-400`} >Product Management</NavLink></li>


   <li ><NavLink to='/about-us' className={`cursor-pointer font-semibold  px-4 py-[3px] text-gray-700  hover:border-b-[1px] border-b-gray-400`} >About Us</NavLink></li>

  
   
  </>

  return (
    <>
    {/* <DrawerNav/> */}

   <Headroom> 
  <div className={`font-jakarta bg-white`} >
  <Container>

<section className={`flex justify-between md:pt-2  h-16 md:h-[90px] bg-white `}>

{/* logo section  */}
<div className="flex items-center gap-1" >
<img src='/pngwing.com (48).png' className="w-9 md:w-12 lg:w-16 opacity-90"/>
<h2 className={`text-[18px] text-gray-800 font-bold  md:text-xl lg:text-[22px] xl:text-2xl whitespace-nowrap `}>CAMPER HAVEN </h2>
</div>


{/* nav menu section  */}
<ul id="nav-menu-list" className="hidden lg:flex items-center lg:text-[15px] xl:text-base  lg:gap-3 xl:gap-6 menu-horizontal px-1">
  {navLinks}
</ul>


<div className="flex items-center justify-center  gap-2 z-50">


{/* cart  */}  
<div className="mr-3 md:mr-5 rounded-full text-xl md:text-[22px] lg:text-2xl text-black flex gap-5 md:gap-6 ">

    <FiHeart/>
    <div className="relative hover:bg-gray-100 rounded-full ">
     {cartItems.length?  <p className="bg-red-500 size-5 absolute -top-2 -right-3 text-sm text-white font-semibold flex items-center justify-center rounded-full">{cartItems.length}</p> : ''}
    <Link to={'/cart'}> <LuShoppingCart/></Link>
    </div>
</div>

{/* label for open daisy ui drawer that component has another file  */}
    <label htmlFor="my-drawer" className={`lg:hidden text-xl md:text-2xl`}><HiOutlineMenu/> </label>
    <DrawerNav/>
</div>

</section>
  </Container>
</div>
   </Headroom>
   </>
  )
}
