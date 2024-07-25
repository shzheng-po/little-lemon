import CardReview from './CardReview';

const reviews = [
    {
        rating: "5",
        name:"name",
        text:'review',
        getImageSrc: () => require("../images/Mario_and_Adrian_A.jpg"),
    },
    {
        rating: "5",
        name:"name",
        text:'review',
        getImageSrc: () => require("../images/Mario_and_Adrian_A.jpg"),
    },
    {
        rating: "5",
        name:"name",
        review:'review',
        getImageSrc: () => require("../images/Mario_and_Adrian_A.jpg"),
    },
    {
        rating: "5",
        name:"name",
        text:'review',
        getImageSrc: () => require("../images/Mario_and_Adrian_A.jpg"),
    },
]

function Testimonials() {
    return <article className='testimonials'>
        <h3>Testimonials</h3>
        <div>
            {reviews.map((review) => (
                <CardReview
                key={review.name}
                name={review.name}
                rating={review.rating}
                text={review.text}
                imageSrc={review.getImageSrc()}
                />
            ))}
        </div>
    </article>
}

export default Testimonials;