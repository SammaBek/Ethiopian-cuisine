import MenuComponent from "./menuComponent";
import Head from "next/head";
import SearchComponent from "./searchComponent";
import VerticalNavComponent from "./verticalNavComponent";
import FooterComponent from "./footer";
export default function Home() {


  // This is menu items Array.
  const Menu = [
    { menuName: "Kitfo", menuImageUrl: "/images/kitfo.jpg", menuDescription: " Lean Beef, garlic, ginger, and a blend of spices are cooked to perfection in this Ethiopian dish.", menuPrice: "$12.99" },
    { menuName: "Genfo", menuImageUrl: "/images/genfo4.jpg", menuDescription: " Barley flour, water, salt, niter kibbeh, and berbere are stirred into a smooth, comforting Ethiopian porridge.", menuPrice: "$11.99" },
    { menuName: "Chechebsa", menuImageUrl: "/images/chechebsa2.jpg", menuDescription: " All-purpose flour, niter kibbeh, berbere, turmeric, and salt are pan-fried into a rich, spiced Ethiopian breakfast.", menuPrice: "$13.99" },
    { menuName: "Doro Wot", menuImageUrl: "/images/doroWot.jpg", menuDescription: " Chicken thighs, onions, garlic, ginger, berbere, niter kibbeh, and hard-boiled eggs simmer in a fiery Ethiopian stew.", menuPrice: "$12.99" },
    { menuName: "Firfir", menuImageUrl: "/images/Firfir.jpg", menuDescription: " Injera pieces, berbere, onions, and niter kibbeh are sautéed into a spicy, tangy breakfast favorite.", menuPrice: "$12.99" },
    { menuName: "Shekla Tibs", menuImageUrl: "/images/sheklatibs.webp", menuDescription: " Beef cubes, green chili, onions, garlic, and rosemary are seared over high heat for bold Ethiopian flavor.", menuPrice: "$10.99" },
    { menuName: "Gomen Besiga", menuImageUrl: "/images/gomenBesiga.jpg", menuDescription: " Collard greens, beef chunks, onions, and garlic simmer gently in spiced butter for a hearty side.", menuPrice: "$14.99" },
    { menuName: "Misir Wot", menuImageUrl: "/images/misirwot.jpg", menuDescription: " Red lentils, berbere, onions, and garlic stew into a thick, fiery vegan staple of Ethiopian cuisine.", menuPrice: "$15.99" },
    { menuName: "Shiro Wot", menuImageUrl: "/images/shirowot.jpg", menuDescription: " Powdered chickpeas, garlic, berbere, and niter kibbeh blend into a creamy, deeply spiced comfort dish.", menuPrice: "$12.99" },
    { menuName: "Beyaynetu", menuImageUrl: "/images/beyaynet.jpg", menuDescription: " Lentils, cabbage, potatoes, and beets are served over injera in a vibrant, plant-based sampler platter.", menuPrice: "$16.99" },
  ]
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-gray-400">

      <div className="flex flex-col items-center">


        <div className="w-full">
          { /* Here im importing a navigation Component(my own) */}
          <VerticalNavComponent />
        </div>

        <div className="grid sm:w-[65%] w-[80%] md:w-5/6 mx-auto mt-20">
          { /* Here im importing a search Component(my own) */}
          <SearchComponent />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">

            { /* Here im mapping over the Menu array and importing a Menu Component(my own) */}
            {Menu.map((menu) => (
              <MenuComponent
                key={menu.menuImageUrl}
                menuPrice={menu.menuPrice}
                menuName={menu.menuName}
                menuDescription={menu.menuDescription}
                menuImageUrl={menu.menuImageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <section id="contact" className=" h-56 sm:h-70 lg:h-72 bg-gray-900 flex flex-col items-center  border rounded-lg w-[80%] sm:w-[35%] md:w-[50%] lg:w-[35%] mx-auto mb-10 overflow-hidden mt-5">

        <span className="mx-auto font-bold text-sm sm:text-2xl py-2">Give us a review</span>

        <div className="my-auto flex ml-2 space-x-3 sm:space-x-8 mt-3">

          <div className="flex flex-col space-y-5">

            <div className=" h-6 sm:h-10 flex">
              <span className="my-auto text-sm font-serif ">Name</span>
            </div>


            <div className="h-6 sm:h-10 flex">
              <span className="my-auto text-sm font-serif">Email</span>
            </div>


            <div className="h-6 sm:h-10 flex">
              <span className="my-auto text-sm font-serif">Review</span>
            </div>



          </div>

          <div className="flex flex-col space-y-5">
            <input placeholder="name..." className=" px-3 border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out sm:rounded-lg rounded-md h-6 sm:h-10 w-[85%] md:w-[100%] transform focus:scale-105 text-xs sm:text-sm" type="text" name="name" />
            <input placeholder="email..." className="px-3 border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out sm:rounded-lg rounded-md h-6 sm:h-10 w-[85%] md:w-[100%] transform focus:scale-105 text-xs sm:text-sm" type="email" name="email" />
            <input placeholder="review..." className="px-3 border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out sm:rounded-lg rounded-md h-6 sm:h-10 w-[85%] md:w-[100%] transform focus:scale-105 text-xs sm:text-sm" type="text" name="review" />

          </div>



        </div>


        <div className="flex mx-auto mb-3 mt-2 lg:mt-4">
          <button className=" bg-blue-500 hover:bg-blue-700 transition-colors duration-300 rounded-md sm:rounded-lg sm:h-10 sm:w-24 h-6 w-20 text-white justify-center items-center border-0 border-gray-500">Submit</button>
        </div>

      </section>

      { /* Here im importing a Footer Component(my own) */}
      <FooterComponent />
    </div>

  )
}
