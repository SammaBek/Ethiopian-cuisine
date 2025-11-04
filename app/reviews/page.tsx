import ReviewProfileComponent from "../reviewProfleComponent"
import VerticalNavComponent from "../verticalNavComponent"
import FooterComponent from "../footer"
export default function ReviewComponent() {

    const Review = [{
        reviewName: "Michael Keaton", reviewMessage: "Ethiopian Cuisine offers a vibrant journey through bold spices, rich stews, and the communal joy of injera. Every dish is crafted with authenticity, from the slow-simmered doro wat to the fragrant vegetarian platters. ", reviewImage: '/images/profile1.png'

    },
    {
        reviewName: "Jordan Peele", reviewMessage: "I didn’t expect to fall in love with injera, but here we are. The flavors are bold, the portions generous, and the vibe makes you feel like you’re part of something deliciously communal.", reviewImage: '/images/profile2.png'

    },

    {
        reviewName: "Dave Chapelle", reviewMessage: "This restaurant brings Ethiopia to life with every bite. From the rich spices to the warm hospitality, it’s more than a meal—it’s a cultural experience that leaves you full in every sense.", reviewImage: '/images/profile3.png'

    },

    {
        reviewName: "Katt Williams", reviewMessage: "The vegetarian platter is a standout—earthy lentils, fragrant greens, and perfectly tangy injera. Each dish is thoughtfully prepared, balancing spice and texture in a way that feels both refined and deeply comforting", reviewImage: '/images/profile4.png'

    },

    {
        reviewName: "Michael Scott", reviewMessage: "Dining here feels like stepping into a story told through spice and soul. The colors, aromas, and textures evoke warmth, nostalgia, and a quiet joy that lingers long after the last bite.", reviewImage: '/images/profile4.png'

    },

    {
        reviewName: "Tom Hanks", reviewMessage: "I came for the coffee ceremony and stayed for the sizzling tibs. Ethiopian food here isn’t just tasty—it’s a sensory adventure that rewires your palate and makes you rethink what comfort food means.", reviewImage: '/images/profile6.png'

    },

    ]

    return (


        <div className="bg-gray-900 text-gray-400 min-h-screen w-full overflow-x-hidden">

            <VerticalNavComponent />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 md:px-12 pt-24">




                {
                    Review.map((review) => (
                        <ReviewProfileComponent key={review.reviewMessage} reviewImage={review.reviewImage} reviewMessage={review.reviewMessage} reviewName={review.reviewName} />
                    ))
                }

            </div>


            <FooterComponent />


        </div>



    )
}