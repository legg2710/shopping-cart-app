import "./Cart.css";
import { useCart } from "react-use-cart";

const Cart = () => {

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h5 className='text-center py-5'> Il mio carrello è vuoto. </h5>
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            <h4 className='position-relative fw-folder text-title'> Cart <span className="position-absolute translate-middle rounded-pill badge bg-danger">{totalUniqueItems}</span></h4>
                <p>total Items ({totalItems})</p>
            </div>
          </div>
        </div>
    )
}

export default Cart