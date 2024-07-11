import Container from "../../layout/Container";
import { SiWearos } from "react-icons/si";

const TopCategories = () => {
    return (
        <Container>
        <section className="my-14 lg:my-3">
            <div className="flex justify-between gap-3 py-5 border-b-2 border-gray-200/60">
                <h3 className="text-xl font-bold text-gray-800">Top Categories</h3>
                <h4 className="font-bold text-gray-800 text-lg">See all resources -</h4>
            </div>
            {/* grid section  */}
            <section className="mt-7 grid justify-between gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                
                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">3D Assets</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

            </section>
        </section>
         </Container>
    );
};

export default TopCategories;