
import { FaXTwitter } from "react-icons/fa6";
import { PiWarehouseDuotone } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import Container from "../components/layout/Container";
import { FaLocationDot } from "react-icons/fa6";
import TeamSection from "../components/ui/AboutUS/TeamSection/TeamSection";

const AboutUs = () => {
    return (
        <Container>
         <div className="flex flex-col lg:flex-row gap-8 relative lg:mt-5">

            {/* left side  */}
                <div className="w-full h-[500px] lg:w-[40%] bg-cover flex flex-col items-start mt-2">

                <div className="w-full h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116399.90657227112!2d89.79155163654143!3d24.259362611903022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb44c7eeadc1%3A0x635d437a356cefa!2sTangail%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1720767292885!5m2!1sen!2sbd"  className="rounded w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                    <div className="p-4 space-y-3">
                    <h3 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <PiWarehouseDuotone size={26} />CAMPERS SHOP</h3>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <TfiEmail size={22} />Email :  campers77@gmail.com</h5>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <MdOutlinePhone size={22} /> +88 018654545</h5>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <FaLocationDot size={22} />Tangail, Bangladesh</h5>

                    <div className="flex gap-2 my-2">

                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaXTwitter size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaTelegramPlane size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaLinkedinIn size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaFacebookF size={15}/> </span>
                    </div>
                    </div>
                </div>

            {/* right side  */}
                <div className="flex-1">
                <h3 className="flex gap-2 items-center text-2xl md:text-3xl font-bold uppercase text-gray-600"> get in touch</h3>
                <p className="text-gray-600 mt-1 mb-8">24/7 We will answer your questions and problems</p>

                <div className="">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex items-center border bg-white pl-2 col-span-2 md:col-span-1"> <span className="text-gray-600"><LuUser2 size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2 md:col-span-1"> <span className="text-gray-600"><LuUser2 size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2"> <span className="text-gray-600"><TfiEmail size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2"> <span className="text-gray-600"><MdOutlinePhone size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="border bg-white pl-2 col-span-2"> <textarea  className="p-3 outline-none w-full resize-none" rows={5} placeholder="Describe your issue" /></div>

            
                
        </div>
       <div className="flex justify-center items-center">
       <button type="submit" className="p-3 outline-none bg-gray-700 border font-semibold text-gray-100 text-lg my-6 px-10 w-full"> Send </button>
       </div>
      
    </div>
                </div>
        </div> 

        <TeamSection/>
        </Container>
       
    );
};

export default AboutUs;