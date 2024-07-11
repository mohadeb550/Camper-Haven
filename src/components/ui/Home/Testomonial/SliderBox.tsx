
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from 'react';
import { TReviews } from './TestomonialSection';



function SliderBox({ reviews } : { reviews : TReviews[]}) {
  
  // get slider reference for custom buttons
  const sliderRef : React.MutableRefObject<null> = useRef(null)
 
  const settings = {
    infinite: true, 
    speed: 500, 
    autoplay: false, 
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: false
  };


  return (
    <div className="mt-8 md:mt-14 lg:mt-20 autoplay-slider w-full relative">
       
      <Slider ref={sliderRef} {...settings}>

       {reviews.map(review => {
        return (
          <>
           <div className={`shadow-2xl rounded-lg flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-8 xl:gap-11 bg-white`}>

          {/* image part  */}
            <div  className="mx-auto h-[200px] w-[200px] lg:h-[240px] xl:h-[400px] lg:w-[30%]">
                <img src={review.user_img} className="rounded-full md:rounded-2xl w-full h-full object-cover" />
             </div>

             {/* content part  */}
          <div className='md:w-[70%] flex flex-col justify-center lg:gap-1 xl:gap-4 py-2'>
          <h4 style={{lineHeight: 1.4}} className={`text-center md:text-left md:text-lg lg:text-xl  xl:text-[26px] font-thin text-black `}>{review.description}</h4>

          {/* rating  */}
          <div className="my-2 text-xl lg:text-2xl text-red-400">
        <Rating className='space-x-2'
            initialRating={review.rating}
            emptySymbol={<FaRegStar/>}
            fullSymbol={<FaStar/>}
          />
        </div>

          <h2 className={`text-xl md:text-base lg:text-lg xl:text-2xl  text-primary-orange`}> {review.user_name} </h2>
             <h4 className={`text-xs lg:text-sm xl:text-base text-black`}> {review.user_position} </h4>
          </div>
        </div>
          </>
        )
       })}
        
      </Slider>

{/* custom button for slick slider  */}
      <div className='flex items-center gap-3 absolute bottom-[5%] md:bottom-[16%] right-[5%] md:right-[10%]'>

      <div  onClick={()=> sliderRef?.current?.slickPrev()} className={`rounded-l-full text-xl md:text-2xl lg:text-4xl px-3 py-1 cursor-pointer text-gray-700`}> <BsArrowLeft/> </div>
      <div onClick={() => sliderRef?.current?.slickNext()}   className={`rounded-r-full text-xl md:text-2xl lg:text-4xl px-3 py-1 cursor-pointer  text-gray-700`}> <BsArrowRight/> </div>
      </div>
    </div>
  );
}

export default SliderBox;