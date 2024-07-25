import image from '../images/restaurantfood.jpg'

const name = 'Little Lemon';
const city = 'Chicago';
const text = `We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.`;
const booking = "#booking";

function Reservation() {
    return (
    <article className='booking'>
        <div>
            <div>
                <h3>
                    {name}
                </h3>
                <h4>
                    {city}
                </h4>
                <p>
                    {text}
                </p>
            </div>
            <img src={image} style={{maxHeight: "279px"}} alt="restaurnt" />
        </div>
        <a href={booking}>Book a Table</a>
    </article>
    )
}

export default Reservation;