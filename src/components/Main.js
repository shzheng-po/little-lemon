import restaurantFood from '../images/restaurantfood.jpg'
import salad from '../images/greek_salad.jpg'
import LandingSection from './LandingSection';
import Reservation from './Reservation';
import Testimonials from './Testimonials';
import Specials from './Specials';

function Main() {
    return (
    <main>
        <Reservation />
        <Specials />
        <Testimonials />
        <LandingSection />
    </main>
    );
}

export default Main;