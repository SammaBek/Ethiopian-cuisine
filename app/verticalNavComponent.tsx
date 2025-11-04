import Link from "next/link"
export default function VerticalNavComponent() {

  return (
    <div className="border-b-2 border-gray-600  h-20  flex  mx-auto flex-row justify-around  shadow-2xl bg-sky-950 fixed top-0 z-50 w-[100%]">

      <div className=" flex  flex-col my-auto ml-5">
        <img className=" w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-400" src="/images/logo.png" alt="Logo" />

      </div>

      <div className=" w-[70%] sm:w-[60%] flex-row justify-around flex ">
        <Link href="/home" className="my-auto text-sm lg:text-lg font-bold hover:text-blue-400 transition-colors duration-200" >Home</Link>
        <span className="my-auto">|</span>
        <Link href="/" className="my-auto text-sm lg:text-lg font-bold hover:text-blue-400 transition-colors duration-200">Menu</Link>
        <span className="my-auto">|</span>
        <Link href="/#contact" className="my-auto text-sm lg:text-lg font-bold hover:text-blue-400 transition-colors duration-200">Contact</Link>
        <span className="my-auto">|</span>
        <Link href="/reviews" className="my-auto text-sm lg:text-lg font-bold hover:text-blue-400 transition-colors duration-200">Reviews</Link>
      </div>


    </div>
  )
}