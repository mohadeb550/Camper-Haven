
import { useState } from "react";
import SearchBanner from "../components/ui/ProductsPage/SearchBanner";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { ClipLoader } from "react-spinners";
import ProductCard from "../components/ui/ProductsPage/ProductCard";
import Container from "../components/layout/Container";
import { TProduct } from "../components/ui/Modal/CreateProductModal";



export default function Products() {

  const [ filterQuery, setFilterQuery ] = useState({})
    const { data , isFetching } = useGetProductsQuery(filterQuery);
    const products : TProduct[] = data?.data || [];

    const resetFilterQuery = () => {
      setFilterQuery({})  
    }
  return (
    
<Container>
     <section className="my-2 md:my-6 lg:my-8 " >
    
          <SearchBanner setFilterQuery={setFilterQuery} />
      
        {isFetching && <ClipLoader
           color='#000002'
           size={60}
           className="absolute top-72 md:top-2/4 left-2/4"
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> }

        <section>

          {/* all filtering section  */}
          <div className="flex justify-between md:justify-end my-6 gap-3 flex-wrap-reverse">
            
          <select 
          onChange={(e)=> setFilterQuery(prev => ({...prev, sortByPrice: e.target.value}))}
           className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm">
              <option disabled selected> Sort by Price</option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>

          <select
           onChange={(e)=> setFilterQuery(prev => ({...prev, priceRange: e.target.value}))}

            className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm">
              <option disabled selected>Filter by Price</option>
               <option value='0-20'>0 - 20$</option>
               <option value='20-40'>20 - 40$</option>
               <option value='40-60'>40 - 60$</option>
               <option value='60-80'>60 - 80$</option>
               <option value='80-100'>80 - 100$</option>
               <option value='0-0'>Custom</option>
        </select>
        
        <select 
        onChange={(e) => setFilterQuery(prev => ({...prev, category: e.target.value}))}
         className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm ">
              <option disabled selected> Filter by Category</option>
              <option value='camp kitchen'>Camp Kitchen</option>
              <option value='gear'>Gear</option>
              <option value='power'>Power</option>
              <option value='personal care'>Personal Care</option>
              <option value='sleeping'>Sleeping</option>
              <option value='shelter'>Shelter</option>
              <option value='furry friends'>Furry Friends</option>
              <option value='merch'>Merch</option>
        
        </select>

    {/* reset  */}
        <button
        onClick={resetFilterQuery} 
        className="px-2 md:px-8 text-sm lg:text-base py-2 md:py-2 font-semibold text-gray-800 rounded transition bg-gray-100 hover:bg-gray-200 ">Reset</button>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 xl:mt-20">
            {products?.map(product => <ProductCard key={product._id} product={product} /> )}
        </div> 

          {/* no products direction  */}
        { (!products || !products.length) && <p className="text-base md:text-lg mt-4 text-center">No Products Found</p>}

        </section>
          
    </section>
</Container>
 
  )
}
