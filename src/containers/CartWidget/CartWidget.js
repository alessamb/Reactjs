import ImgCart from './Cart.png';
import { Link } from 'react-router-dom';

export const LogoCart = () => {
    return (

        <Link to="/Cart">
            <img src={ImgCart} style={{ width: 60 }} />
            <span className="item_total">0</span>
        </Link>

    );

}
