import VerticalNavComponent from "../verticalNavComponent"
import FooterComponent from "../footer"
export default function HomePage() {
    return (

        <div className="min-h-screen bg-gray-800 text-gray-400 overflow-scroll flex flex-col">

            <div className="w-full mx-auto">
                <VerticalNavComponent />
            </div>





            <div className="flex space-x-3 mt-5">

                <div className="overflow-hidden object-cover flex-1">
                    <img className="object-cover h-[50vh]  md:h-[70vh]" src="images/food1.jpg" alt="pic1" />
                </div>

                <div className="overflow-hidden flex-2 h-[50vh] md:h-[70vh]">

                    <div className="flex flex-col space-y-3">
                        <div className=" overflow-hidden flex space-x-2 ">
                            <div className="w-full">
                                <img className="object-cover  overflow-hidden h-[25vh] md:h-[35vh] w-full" src="images/food2.webp" alt="pic1" />
                            </div>

                            <div className="w-full">
                                <img className="object-cover  overflow-hidden h-[25vh] md:h-[35vh] w-full" src="images/food5.jpg" alt="pic1" />
                            </div>

                        </div>

                        <div className=" overflow-hidden ">

                            <img className="object-cover  overflow-hidden h-[25vh] md:h-[35vh]  w-full" src="images/food3.webp" alt="pic1" />
                        </div>


                    </div>

                </div>

            </div>


            <div className=" w-[95%] md:w-[80%] relative mx-auto mt-10 ">

                <div className="overflow-hidden flex  absolute -inset-0.5 bg-pink-800 blur-3xl ">

                </div>

                <div className=" flex flex-col relative bg-gray-900 w-full justify-center items-center rounded-2xl h-full">
                    <span className="flex justify-center items-center break-words text-xs md:text-2xl p-5 md:p-10 font-serif">
                        Ethiopian cuisine is renowned for its vibrant spices, earthy textures, and communal dining experience.
                        At the center of every meal is injera, a soft, spongy flatbread made from teff flour, used not just as a base but as a utensil—torn by hand and used to scoop up richly spiced stews, lentils, and sautéed greens.
                    </span>

                    <span className="flex justify-center items-center break-words text-xs md:text-2xl pb-5 md:pb-10 px-5 md:px-10  font-serif">
                        This ritual of sharing from a single platter fosters connection and warmth, making every meal a moment of togetherness.
                        Our menu features classics like Doro Wat, a fiery chicken stew simmered with berbere spice and onions until deeply flavorful, and Misir Wat, a comforting red lentil dish infused with garlic and ginger. Vegetarian options abound, with dishes like Gomen (collard greens) and Atkilt Wat (cabbage, carrots, and potatoes) offering hearty, satisfying bites.

                    </span>

                </div>
            </div>






            <FooterComponent />




        </div>
    )
}