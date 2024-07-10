

import TopFoodCard from "../components/ui/ProductsPage/ProductCard";
import { useState } from "react";
import SearchBanner from "../components/ui/ProductsPage/SearchBanner";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { ClipLoader } from "react-spinners";
import ProductCard from "../components/ui/ProductsPage/ProductCard";




export default function Products() {
    const { data , isLoading, isSuccess } = useGetProductsQuery(undefined);
    const products = data?.data || [];

    // const [ searchName, setSearchName ] = useState('');
    // const [ sortType, setSortType ] = useState('');
    // const [ selectedCategory , setSelectedCategory ] = useState('');


 
// for pagination 
    // useEffect(()=>{
        
    //     setTotalFoods(allFoods?.totalFood)
    //     if(totalFoods){
    //         setTotalPage(Math.ceil(totalFoods / foodPerPage));

    //         let pgsArray = [];
  
    //         for(let i = 0; i < totalPage; i++){
    //             pgsArray.push(i)
    //         }
    //         setPageArray([...pgsArray])
    //     }   
    // },[allFoods, totalFoods, foodPerPage, totalPage, currentPage])




    // const handleSearch = (e) => {
    //     setSearchName(e.target.value)
    // }


  return (
    

    <section className="my-2 md:my-6 lg:my-8 lg:px-0 max-w-[1300px] mx-auto px-5" >

    
          {/* <SearchBanner handleSearch={handleSearch} /> */}
      
        {isLoading && <ClipLoader
           color='#000002'
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> }

        <section>
{/* 
          <div className="flex justify-end my-6 gap-3 px-5 md:px-0">
          <select onChange={(e)=> setSortType(e.target.value)} className=" w-full max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 ">
              <option disabled selected> Sort by Price</option>
               <option value=''> Random </option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>
        
        <select onChange={(e) => setSelectedCategory(e.target.value)} className=" w-full max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 ">
              <option disabled selected> Filter by Category</option>
              <option value=''> None </option>
              <option value='appetizers'> Appetizers </option>
            <option value='salads'> Salads and Bowls </option>
            <option value='sandwiches'> Sandwiches </option>
            <option value='pizzas'> Pizzas</option>
            <option value='burger'> Burger </option>
            <option value='bbq'>BBQ and Grilled </option>
            <option value='desserts'> Desserts </option>
            <option value='beverages'> Beverages </option>
            <option value='seasonal'>  Seasonal </option>
            <option value='vegan'> Vegan Options </option>
            <option value='breakfast'> Breakfast Classics </option>
            <option value='street'> Street Food </option>
            <option value='cheese'> Cheese and Charcuterie  </option>
            <option value='soup'>Soup </option>
            <option value='fusion'>International Fusion </option>
            <option value='vegetarian'> Vegetarian </option>
        </select>
          </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 xl:mt-20">
            {products?.map(product => <ProductCard  product={product} /> )}
        </div> 

        {/* { (!products || !allFoods.foods.length) && <p className="mt-4 text-center">No results Found</p>} */}

        </section>
          
    </section>
  )
}
