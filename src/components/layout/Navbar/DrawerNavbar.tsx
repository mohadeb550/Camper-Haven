
import { AiOutlineClose } from "react-icons/ai";

const DrawerNav = () => {

  const navLinks = <>
<li ><a href="/" className={`font-semibold text-md px-3 py-[3px] `} >About Us </a></li>

</>

    return (
        <>
          {/* daisy ui drawer  */}
    <div className="drawer z-40 font-jakarta">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
   
  <div className="drawer-side">
    {/* close button for drawer outside  */}
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

    <div className={`menu p-4 w-48 md:w-60 min-h-full bg-white`}>
   {/* Drawer content here */}

      {/* close button inside drawer  */}
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay flex justify-end p-2"><AiOutlineClose size={21}/> </label>

      <div className="flex items-center gap-2 mt-2 mb-6">
      <div className="flex items-center gap-1" >
<img src='/src/assets/images/pngegg (15).png' className="w-8 md:w-9"/>
<h2 className={`text-base font-semibold  md:text-lg whitespace-nowrap `}>CAMPER HAVEN </h2>
</div>
    </div>
    
    <div className="flex flex-col gap-4">
     {navLinks}
    </div>

    </div>
  </div>
</div>
        </>
    );
};

export default DrawerNav;