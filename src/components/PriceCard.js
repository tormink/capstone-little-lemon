import { ReactComponent as DeliveryIcon } from '../assets/delivery.svg';
import './pricecard.css';
const PriceCard = ({ img, price, title, children }) => (
    <article className='card'>
        <img src={img} alt="dish" />
        <div>
            <h3>{title}</h3>
            <span className='card-price'>$ {price}</span>
            <p>{children}</p>
            <a href="#">Order a delivery <DeliveryIcon /></a>
        </div>
    </article>

);

export default PriceCard;