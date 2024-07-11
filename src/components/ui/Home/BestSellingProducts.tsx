
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ProductCard from "../ProductsPage/ProductCard";
import Container from "../../layout/Container";

export default function BestSellingProducts() {

    const products = [
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
     <section className="my-8 md:my-16 lg:my-24" >
        <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >Best Selling Products </h1>
        <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>
      
        {/* {isLoading &&  <ClipLoader
           color='#000002'
           size={60}
           className="absolute top-72 md:top-2/4 left-2/4"
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> } */}

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-12">
            {products?.map(product => <ProductCard key={product._id} product={product} /> )}
        </div> 

       {products?.length && 

        <div className="flex justify-center mt-20">
        <Link to={`/products`} > <button className="bg-gray-200 py-[8px] px-10 text-gray-800 rounded font-semibold text-sm md:text-base"> See All </button></Link>
        </div>}

    </section>   
    </Container>
    
  )
}
