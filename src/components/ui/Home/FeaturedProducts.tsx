import Container from "../../layout/Container";
import { TProduct } from "../Modal/CreateProductModal";


function FeaturedProducts() {
    const products : TProduct[] = [
        {
            "_id": "668e33a2b7648414a28e002f",
            "product_name": "Turbo Bag X3",
            "category": "Bag",
            "stock_quantity": 52,
            "price": 590,
            "description": "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde reiciendis quos quia dolore animi odit ipsum ab quo quaerat tempore non excepturi alias quasi pariatur a adipisci eos ut, est exercitationem error. Reprehenderit nobis, eligendi temporibus ea delectus optio aperiam perspiciatis exercitationem blanditiis praesentium, rem odio quos voluptatum voluptatibus sed.",
            "rating": 4.2,
            "images": [
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bc6e97b32fe4b4badf9af3c00929de3_9366/4ATHLTS_Camper_Backpack_Blue_HR2930_01_standard.jpg",
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/260b949e237a40858139af3c0092b36f_9366/4ATHLTS_Camper_Backpack_Blue_HR2930_05_hover_standard.jpg",
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/e9ce307f93a5493fa56baf3c0092bbe9_9366/4ATHLTS_Camper_Backpack_Blue_HR2930_41_detail.jpg"
            ],
            "createdAt": "2024-07-10T07:09:22.316Z",
            "updatedAt": "2024-07-10T20:01:47.801Z",
            "__v": 0
        },
        {
            "_id": "668e6fdfead735d669efa080",
            "product_name": "Bambo",
            "category": "Beyond",
            "stock_quantity": 5,
            "price": 750,
            "description": "To be fluent",
            "rating": 4.7,
            "images": [
                "https://images.othoba.com/images/thumbs/0641667_travello-backpack-blue.webp",
                "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg",
                ""
            ],
            "createdAt": "2024-07-10T11:26:23.075Z",
            "updatedAt": "2024-07-11T11:19:53.050Z",
            "__v": 0
        },
        {
            "_id": "668eb098145a823140c3d170",
            "product_name": "Hoddie",
            "category": "Hoddies",
            "stock_quantity": 45,
            "price": 75,
            "description": "dsfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "rating": 3.3,
            "images": [
                "https://plainbulktshirts.co.za/wp-content/uploads/2023/05/RoyalHoodie.png",
                "https://plainbulktshirts.co.za/wp-content/uploads/2023/05/RoyalHoodie.png",
                "https://plainbulktshirts.co.za/wp-content/uploads/2023/05/RoyalHoodie.png"
            ],
            "createdAt": "2024-07-10T16:02:32.013Z",
            "updatedAt": "2024-07-11T08:14:32.565Z",
            "__v": 0
        },
        {
            "_id": "668eb107145a823140c3d173",
            "product_name": "Running Shoes",
            "category": "Shoes",
            "stock_quantity": 34,
            "price": 100,
            "description": "This is so soft",
            "rating": 4,
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y7eeaxa6Ex83Fk0aTy2CyDPqFlvxsDwDEg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y7eeaxa6Ex83Fk0aTy2CyDPqFlvxsDwDEg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y7eeaxa6Ex83Fk0aTy2CyDPqFlvxsDwDEg&s"
            ],
            "createdAt": "2024-07-10T16:04:23.011Z",
            "updatedAt": "2024-07-10T17:09:00.967Z",
            "__v": 0
        },
        {
            "_id": "668eb191145a823140c3d176",
            "product_name": "Stove",
            "category": "Cooking",
            "stock_quantity": 41,
            "price": 35,
            "description": "sdfaaaaaaaaaaaaaaa",
            "rating": 2.7,
            "images": [
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg"
            ],
            "createdAt": "2024-07-10T16:06:41.027Z",
            "updatedAt": "2024-07-10T16:23:54.914Z",
            "__v": 0
        },
        {
            "_id": "668eb191145a823140c3d176",
            "product_name": "Stove",
            "category": "Cooking",
            "stock_quantity": 41,
            "price": 35,
            "description": "sdfaaaaaaaaaaaaaaa",
            "rating": 2.7,
            "images": [
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg"
            ],
            "createdAt": "2024-07-10T16:06:41.027Z",
            "updatedAt": "2024-07-10T16:23:54.914Z",
            "__v": 0
        },
        {
            "_id": "668eb191145a823140c3d176",
            "product_name": "Stove",
            "category": "Cooking",
            "stock_quantity": 41,
            "price": 35,
            "description": "sdfaaaaaaaaaaaaaaa",
            "rating": 2.7,
            "images": [
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg"
            ],
            "createdAt": "2024-07-10T16:06:41.027Z",
            "updatedAt": "2024-07-10T16:23:54.914Z",
            "__v": 0
        },
        {
            "_id": "668eb191145a823140c3d176",
            "product_name": "Stove",
            "category": "Cooking",
            "stock_quantity": 41,
            "price": 35,
            "description": "sdfaaaaaaaaaaaaaaa",
            "rating": 2.7,
            "images": [
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg",
                "https://earifin.com/public/uploads/all/1BLehJtlID57p5EpI2QDqz0yi6s6eYnLdZwH8gJd.jpg"
            ],
            "createdAt": "2024-07-10T16:06:41.027Z",
            "updatedAt": "2024-07-10T16:23:54.914Z",
            "__v": 0
        },
    ]

  return (
   <Container>
     <div className={`my-20 md:my-36 lg:my-40 xl:my-52 py-5 `}>
     <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >Featured Products</h1>
     <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>



     <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

       {products?.map(product => {
        return (
          <>
           <div className={`flex flex-col justify-center items-center gap-3 mx-2 border-r relative cursor-pointer rounded-md transition-shadow hover:shadow-lg`}>

           <p className="text-white py-[6px] mb-2 text-sm md:text-base font-semibold px-6 rounded-sm bg-[#FF8C46] absolute top-5 right-0">Hot</p>
            
       <div className="flex flex-col">
        

<div className=" flex items-center justify-center ">

     <img className="p-4 w-36 h-36 md:w-48 md:h-48 object-contain" src={product.images[0]}/>
 </div>

 <div className="flex justify-center items-center flex-col gap-2 p-4">
     <p className="text-sm font-semibold text-gray-400"> {product.category} </p>
     <h2 className="text-sm md:text-xl font-semibold"> {product.product_name} </h2>
     <h3 className="text-[20px] text-orange-500 font-bold flex items-center gap-2"> {`$${product.price}`}.00</h3>
    
 </div>
</div>

        </div>
          </>
        )
       })}
        </section>        
    
    </div>
   </Container>
  );
}

export default FeaturedProducts;


