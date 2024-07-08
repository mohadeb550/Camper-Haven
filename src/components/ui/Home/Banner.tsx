import Container from "../../layout/Container";


export default function Banner() {

  
    return (
      <section className="bg-[#F2F2F2]">
      <Container>
          <div  className="hero h-[580px] lg:h-[600px] mb-3 md:mb-8 font-play flex flex-col-reverse  md:flex-row justify-around items-center  md:pb-12 gap-3 md:gap-0" >

<div className=" text-left text-neutral-content flex-1">
  <div className="max-w-4xl space-y-4 md:space-y-6 xl:space-y-10">
    <h1 className=" text-4xl md:text-5xl xl:text-6xl text-gray-800">Elevate Your Style With <br/> Our New Collections</h1>
    <p className="text-sm md:text-base lg:text-lg lg:font-medium text-gray-600"> Discover our wide range of campers and RVs perfect for your next adventure. Start your journey today!</p>

<button className=" px-8 text-sm lg:text-base mr-3 py-2 md:py-2 xl:py-3 font-semibold text-white rounded transition bg-black hover:bg-gray-800 whitespace-nowrap">Shop Now</button>
    

  </div>
</div>

<div className="flex-1 h-full w-full pt-2 md:pt-14">
    <img src="/src/assets/images/—Pngtree—happy shopping boy_4496189.png" className=" h-[300px] md:h-full w-full object-contain" />
</div>


</div>
      </Container>
       </section>
    )
  }
  