

import {  Link, useParams } from "react-router-dom"
import { IoMdAdd }  from 'react-icons/io'
import { AiOutlineMinus }  from 'react-icons/ai'
import { BsCart2, BsFacebook, BsLinkedin, BsTwitter }  from 'react-icons/bs'
import { GiSelfLove }  from 'react-icons/gi'

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import '../styles/imageGallery.css'
import { ClipLoader } from "react-spinners"

import { useGetSingleProductQuery } from "../redux/features/product/productApi"
import { TProduct } from "../components/ui/Modal/CreateProductModal"


export default function ProductDetails() {
    const params = useParams();
    const { data, isLoading, isSuccess } = useGetSingleProductQuery(params.productId as string);

   const product : TProduct = data?.data;

  
    if(isLoading ){return  <ClipLoader
        color='#000002'
        size={60}
        aria-label="Loading Spinner"
        speedMultiplier={0.8} />}


        const {_id, product_name, images, price, rating, stock_quantity, description, category} = product;

        

  return (
    <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-14 lg:my-20 mb-10">
       
       <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-12 lg:gap-20">

       <div className=" bg-gray-100 p-6 custom-image-gallery flex-1">
       <ImageGallery items={images.map(image => ({ original: image, thumbnail: image}))} showNav={false} showPlayButton={false} showFullscreenButton={false} />
        </div>

        <div className="flex flex-col gap-5 flex-1">
            <p className="text-lime-600 py-1 text-sm px-3 border w-32 border-lime-600"> {stock_quantity} In Stock </p>
            <h2 className="text-[28px] lg:text-4xl font-semibold font-play"> {product_name} </h2>
            <h4 className=""> {description} </h4>
            <h3 className="text-[25px] font-semibold"> {`$${price}`} </h3>

            <div className="flex items-center justify-around text-lg lg:text-2xl py-1 lg:py-2 px-2 border w-32 lg:w-44">
                <AiOutlineMinus className=""/>
                <p className="border-l border-r py-0 px-3"> 1</p>
                <IoMdAdd/>
            </div>
           <div className="flex gap-3 items-center uppercase font-semibold"> <p className="capitalize">  Food Category :</p>
           <b className="text-orange-500 border py-1 px-3 text-sm  rounded border-orange-500 uppercase font-medium"> {category} </b>
           </div>
            <div className="flex gap-2">
                <Link to={`/purchase-page/${_id}`}>
                <button  className="bg-gray-800 py-4 px-14 text-white rounded font-semibold transition-all flex items-center gap-2 hover:bg-gray-700 text-sm md:text-base"> <BsCart2 className="text-xl" />Add to cart </button></Link>
                <p className="flex items-center justify-center p-4 border rounded "> <GiSelfLove/> </p>
            </div>

            <div className="border-t py-5 mt-5 space-y-2 w-[100%]">
                <h4> <b> Food Origin :</b> <p className="capitalize inline">{'India'}</p> </h4>
                <h4> <b> Made By :</b> {'Bangladesh'} </h4>
                <h4 className="flex items-center gap-3 text-xl"> <b className="text-gray-600"> Share :</b> <BsFacebook className="text-blue-600"/> <BsTwitter className="text-sky-500"/> <BsLinkedin className="text-lime-600"/> </h4>
               
            </div>
        </div>
       </div>

    </section>
  )
}
