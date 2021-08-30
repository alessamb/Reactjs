import ImgCart from './Cart.png';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
export const LogoCart = () => {
    const { getItemsCount} = useCartContext();
    return (

        <Link to="/Cart">
            <img src={ImgCart} style={{ width: 60 }} />
            <span className="item_total">{getItemsCount()}</span>
        </Link>

    );

}
