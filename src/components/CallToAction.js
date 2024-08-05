import React from "react";
import image from '../images/restaurantfood.jpg';
import {Link} from "react-router-dom";

const name = 'Little Lemon';
const city = 'Chicago';
const text = `We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.`;

function CallToAction() {
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
        <Link to='/reservation' className="nav-item">Book a Table</Link>
    </article>
    )
}

export default CallToAction;