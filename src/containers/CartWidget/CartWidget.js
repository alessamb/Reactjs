import ImgCart from './Cart.png';

export const LogoCart = () =>{
    return (
       
        <button className="btn" >
            <img src={ImgCart} style={{width: 60}}/>
            <span className="item_total">0</span>
        </button>
        
        
    );
    
}
