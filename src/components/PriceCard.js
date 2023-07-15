import {ReactComponent as DeliveryIcon} from '../assets/delivery.svg';
const PriceCard = ({img, price, title, children}) =>(
    <article>
        <img src={img} alt="dish" />
        <h3>{title}</h3>
        <span className='card-price'>$ {price}</span>
        <p>{children}</p>
        <a href="#">Order a delivery <DeliveryIcon/></a>
    </article>

);

export default PriceCard;