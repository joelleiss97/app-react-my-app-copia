import './CartWidget.css';


function CartWidget(props){ 
    return(
        <section>
            <div className='nav-logo'>
                <span>{props.widget}
                    <i className="bi bi-bag-heart"></i>
                </span>
            </div>

            
        </section>
         
      );
   
}
export default CartWidget;