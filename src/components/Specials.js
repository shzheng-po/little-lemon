import CardDish from './CardDish';
import bruchetta from '../images/bruchetta.svg';
import { Link } from "react-router-dom";

const dishes = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: `The famous greek salad of crispy lettuce, peppers, olives and
                        our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. `,
        getImageSrc: () => require("../images/greek_salad.jpg"),
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: `Our Bruschetta is made from grilled bread that has been smeared with garlic
                        and seasoned with salt and olive oil. `,
        getImageSrc: () => bruchetta,
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: `This comes straight from grandma’s recipe book,
                        every last ingredient has been sourced and is as authentic as can be imagined.`,
        getImageSrc: () => require("../images/lemon_dessert.jpg"),
    }
]

function Specials() {
    return <article className='specials'>
        <div>
            <h3>Specials</h3>
            <Link to="/menu">Online Menu</Link>
        </div>
        <div className='dish'>
            {dishes.map((dish) => (
            <CardDish
                key={dish.name}
                name={dish.name}
                price={dish.price}
                description={dish.description}
                imageSrc={dish.getImageSrc()}
            />
            ))}
        </div>
    </article>
}

export default Specials;