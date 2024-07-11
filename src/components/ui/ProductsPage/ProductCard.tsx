
import { Link } from "react-router-dom";
import { TProduct } from "../Modal/CreateProductModal";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";


export default function ProductCard({ product } : { product : TProduct}) {

 const {_id, product_name, images, price, rating} = product;


  return (
    <div className="block rounded w-full">
   <div className="p-6 pb-4 flex items-center justify-center">
   <img className=" border p-[2px] w-64 h-64 object-contain "  src={images[0]} />
   </div>
  
  <div className="p-6 pt-0">
    <h5
      className="mb-4 text-xl font-medium leading-tight text-neutral-800  text-center">
   {product_name}
    </h5>
    
    <div className="flex gap-3 items-center justify-center">
    <Rating className="text-red-400" initialRating={rating} emptySymbol={<BsStar />} fullSymbol={<BsStarFill />} />
    </div>
 
    <h4 className="text-xl my-3 text-gray-500 text-center"> Price : <span className="text-orange-600 font-semibold"> {`${price}$`} </span> </h4>

   <div className="flex gap-3 flex-grow">

    <div className="flex justify-center items-center w-full">
    <Link to={`/products/${_id}`} > <button className="bg-gray-900/90 px-14 md:px-6 py-[5px] xl:px-14 text-white rounded font-semibold transition-all whitespace-nowrap hover:bg-gray-700 text-sm md:text-base"> See Details </button></Link>
    </div>
  
   </div>
  </div>
</div>
  )
}
