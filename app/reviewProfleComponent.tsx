// Here i defined an interface with TypeScript to specify the tyes of variables im expecting
interface ReviewProps {
    reviewMessage?: string,
    reviewImage?: string,
    reviewName?: string
}

export default function ReviewProfileComponent({ reviewImage, reviewMessage, reviewName }: ReviewProps) {
    return (


        // a component i made for displaying the reviews in clean way. 
        // max-w-[300px] limits the component to not grow beyond 300px on bigger screens

        <div className="flex flex-col h-44  md:h-60 border border-gray-400 rounded-lg p-2 max-w-[300px] mx-auto md:max-w-none">

            <div className="w-full flex h-[70%] md:h-34 lg:h-36">

                <span className=" w-full text-xs md:text-sm lg:text-base font-serif  md:h-30 break-words">
                    {reviewMessage}
                </span>
            </div>

            <img className=" rounded-full w-8 h-8 md:w-12 md:h-12 object-cover mt-2" src={reviewImage} alt="" />

            <span className=" font-bold text-sm">{reviewName}</span>


        </div>





    )
}