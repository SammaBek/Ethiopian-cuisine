import Link from "next/link"
export default function FooterComponent() {
    return (

        // A simple footer component which later on imported in Menu Page
        <div className="w-full h-40 md:h-80 bg-gray-900 mt-10 flex sm:justify-evenly border-t-2 border-gray-950 p-2">

            <div className=" flex  flex-col my-auto ml-1 sm:ml-5 flex-1">

                <Link rel="stylesheet" href="/home" >
                    <img className=" h-12 w-12  md:w-40 md:h-40 rounded-full border-2 border-gray-400" src="/images/logo.png" alt="Logo" />
                </Link>
                <span className=" font-serif text-xs md:text-lg  mt-1">Ethiopian Cuisine</span>

            </div>

            <div className=" flex  flex-col my-auto  sm:ml-5 flex-1">
                <span className=" font-serif text-xs md:text-2xl mx-auto mt-1">Contact Us</span>
                <span className=" font-serif text-xs md::text-lg mx-auto mt-1">Phone: (478)-790-898</span>
                <span className=" font-serif text-xs md:text-lg mx-auto mt-1">Email:ethiocuisine@gmail.com</span>
                <span className=" font-serif text-xs md:text-lg mx-auto mt-1">Address: 17 St South East</span>

            </div>

            <div className=" flex  flex-col my-auto ml-2 sm:ml-5 flex-1">
                <span className=" font-serif text-xs md:text-2xl mx-auto mt-1">Follow Us</span>
                <span className=" font-serif text-xs md:text-lg mx-auto mt-1">Facebook</span>
                <span className=" font-serif text-xs md:text-lg mx-auto mt-1">Instagram</span>
                <span className=" font-serif text-xs md:text-lg mx-auto mt-1">Twitter</span>


            </div>

        </div>

    )
}