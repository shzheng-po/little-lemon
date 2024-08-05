import image from '../images/restaurant.jpg'

const name = 'Little Lemon';
const city = 'Chicago';
const text = `We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.`;

function Chicago() {
    return (
    <article className='landing-section'>
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
        <img src={image} style={{height: "279px"}} alt="restaurnt" />
    </article>
    )
}

export default Chicago;