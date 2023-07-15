import PriceCard from './PriceCard';
import heroImg from './../assets/restauranfood.jpg';
import './main.css';
import greekSalad from './../assets/greek salad.jpg';
import bruschetta from './../assets/bruchetta.svg';
import lemonDessert from './../assets/lemon dessert.jpg';

const mainPadding = { padding: '0 70px' };
const Main = () => (
    <main style={mainPadding}>
        <section className='hero'>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <aside>
                <img src={heroImg} alt="" />
            </aside>
        </section>
        <section className='specials'>
            <PriceCard title='Greek Salad' img={greekSalad} price='12.99'>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </PriceCard>
            <PriceCard title='Bruschetta' img={bruschetta} price='5.99'>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
            </PriceCard>
            <PriceCard title='Lemon Dessert' img={lemonDessert} price='5.00'>
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </PriceCard>
        </section>
    </main>
)

export default Main;