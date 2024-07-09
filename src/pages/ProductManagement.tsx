import { useState } from "react"
import CreateProductModal from "../components/ui/Modal/CreateProductModal";


export default function ProductManagement() {
    const [openCreateModal, setOpenCreateModal ] = useState(false);

    const allParcels = [ {
        "_id": "656600ea79a25b077facbb32",
        "name": "Rasel Hasan",
        "email": "rasel@gmail.com",
        "phone": "01875466519",
        "parcel_type": "Walton Refrigerator 176 Ltr",
        "weight": "12",
        "product_img": "https://i.ibb.co/pW39xvt/download-6.jpg",
        "receiver_name": "Rokib Vai",
        "receiver_phone": "01445457215",
        "delivery_address": "Cumilla, Bangladesh",
        "req_date": "2023-12-14",
        "booking_date": "11/28/2023",
        "address_lat": "23.450001",
        "address_long": "91.199997",
        "cost": 150,
        "payment": "paid",
        "status": "delivered",
        "approx_date": "2023-12-13",
        "delivery_man_id": "65626922b7d84d0940bd1815",
        "converted_req_date": "2023-12-14T00:00:00.000Z"
    },
    {
        "_id": "6568c65a86cd092f6ec9a109",
        "name": "Rasel Hasan",
        "email": "rasel@gmail.com",
        "phone": "01875466519",
        "parcel_type": "Hisense Washing Machine ",
        "weight": "22",
        "product_img": "https://i.ibb.co/hgQ1nWZ/images-12.jpg",
        "receiver_name": "Shuvo Saha",
        "receiver_phone": "01478545154",
        "delivery_address": "Rajshahi , Bangladesh",
        "req_date": "2023-12-14",
        "booking_date": "11/30/2023",
        "address_lat": "\t24.3635886",
        "address_long": "\t88.6241351",
        "cost": 150,
        "payment": "paid",
        "status": "delivered",
        "__v": 0,
        "approx_date": "2023-12-06",
        "delivery_man_id": "6568d16877ab8aad8bb30143",
        "converted_req_date": "2023-12-14T00:00:00.000Z"
    }]

  return (
   <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-6 lg:my-10 mb-10 font-prompt"> 


   <div className="flex justify-center items-center mb-6">
   <h2 className="text-2xl md:text-3xl font-prompt font-semibold text-gray-700 ">ALL PRODUCTS</h2>
   </div>

   <div className="text-right mb-7">
   <button 
   onClick={() => setOpenCreateModal(true)}
    className=" px-6 text-sm lg:text-base mr-3 py-2 md:py-2 xl:py-3 font-semibold text-gray-900 rounded transition bg-gray-100 hover:bg-gray-200 whitespace-nowrap">Add New Product</button>

   {/* create product modal  */}
   {openCreateModal && <CreateProductModal open={openCreateModal} setOpen={setOpenCreateModal}/>}
    
   </div>


<div className="flex flex-col font-play">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-center text-sm font-light dark:border-neutral-500">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr className="bg-gray-500 h-8 text-white/95 text-[12px] md:text-base">
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
               Image
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
              Product Name
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
            Price
              </th>
              <th
                scope="col"
                className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
           Category
              </th>
             
              
              <th scope="col" className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"> Action </th>
            
              <th scope="col" className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"> Action </th>
            </tr>
          </thead>
          <tbody className="relative">

          {/* {isLoading && <RotatingTriangles
  visible={true}
  height="80"
  width="80"
  ariaLabel="rotating-triangels-loading"
  wrapperStyle={{}}
  wrapperClass="absolute top-[6%] md:top-[8%] left-2/4 mt-10"
/>} */}
          
          {allParcels?.map(parcel =>  <tr key={parcel._id} className="border-b ">
              <td
                className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 flex items-center justify-center">
                <img src={parcel.product_img} className="w-[52px] h-[52px] md:w-24 md:h-24 object-contain" />
              </td>
              <td
                className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                {parcel.name}
              </td>
              <td
                className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                {parcel.phone}
              </td>
              <td
                className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                {parcel.booking_date}
              </td>
              
              
              <td className="whitespace-nowrap font-medium border-r text-sm md:text-lg  px-6 py-4 dark:border-neutral-500">
             
             <button className={`bg-blue-700 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-blue-800 text-[12px] md:text-base `} > 
             Modify</button>
    
               </td>

              <td className="whitespace-nowrap font-medium  text-sm md:text-lg  px-6 py-4 dark:border-neutral-500">
             
            
             <button className={`bg-red-600 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-red-700 text-[12px] md:text-base `} > 
             Delete </button>
    
               </td>
            
            </tr>)}
         
          </tbody>
        </table>
        {!allParcels?.length && <p className="text-xl text-center mt-44 text-gray-500"> No Parcels  </p>}
      </div>
    </div>
  </div>
</div>

   </section>
  )
}

