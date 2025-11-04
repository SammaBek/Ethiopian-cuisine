export default function SearchComponent() {

    // Here i have a search component which i'll import later on in Menu Page.

    return (
        <div className="flex mb-6 mt-6 mx-auto w-[100%] md:w-[60%] ">
            <input type="text" placeholder="Search..." className=" flex border border-gray-600 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 h-8 md:h-12 w-[100%]  " />
            <button className=" ml-2 md:ml-4  px-2 md:px-4 py-2 bg-blue-500 text-sm md:text-lg text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-8 md:h-12 w-[40%]">Search</button>
        </div>
    )
}