


export default function CreateProductModal({ open, setOpen} : { open: boolean, setOpen: object}) {

  const handleSubmit = (e : FormDataEvent) => {
    e.preventDefault()
  }

  return (
    <section className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50  bg-black/30 backdrop-blur-sm flex justify-center items-center">  
       
       <form className="w-[400px] md:w-[500px] p-7 bg-white rounded-md" onSubmit={handleSubmit}>


<button type="submit" className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-black hover:bg-gray-800 "> Add</button>

<button onClick={() => setOpen(!open)} className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-red-600 hover:bg-red-700 "> Close </button>
</form>
       
       </section>
  )
}
