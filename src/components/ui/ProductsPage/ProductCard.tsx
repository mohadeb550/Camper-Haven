
import { Link } from "react-router-dom";
import { TProduct } from "../Modal/CreateProductModal";

export default function ProductCard({ product } : { product : TProduct}) {

 const {_id, product_name, images, price, rating} = product;


  return (
    <div className="rounded w-full h-full flex flex-col">

   <div className="p-6 pb-4 flex items-center justify-center flex-grow">
   <img className=" border p-[2px] w-64 h-64 object-contain "  src={images[0]} />
   </div>
  
  <div className="p-6 pt-0">
    <h5
      className="mb-4 text-lg font-medium leading-tight text-neutral-700  text-center uppercase">
   {product_name}
    </h5>
    
    <div className="flex space-x-1 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className='w-5 cursor-pointe' viewBox="0 0 24 24" fill="#F24444">
                    <path 
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" 
                        fill={ star <= rating ? "#F87171" :"#94a3b8" } />
                </svg>
            ))}
        </div>
   
 
    <h4 className="text-xl my-3 text-gray-500 text-center"> Price : <span className="text-orange-600 font-semibold"> {`${price}$`} </span> </h4>

    <div className="flex justify-center items-center w-full flex-grow-1">
    <Link to={`/products/${_id}`} > <button className="bg-gray-100 px-14 md:px-6 py-[5px] xl:px-14 text-gray-800 font-semibold transition-all whitespace-nowrap hover:bg-gray-200 text-sm md:text-base"> See Details </button></Link>
    </div>

  </div>
</div>
  )
}
