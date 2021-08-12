import ImgCart from './Cart.png';

export const LogoCart = () =>{
    return (
        <div>
        <button><img src={ImgCart} style={{width: 60}}/></button>
        <span className="item_total">0</span>
        </div>
        
    );
    
}
