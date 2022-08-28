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
    if(isEmpty) return <h5 className='text-center py-3'>Il mio carrello è vuoto. </h5>
    return (
        <div className='container-fluid py-5'>
            <div className="row">
                <h4 className="text-center py-3 text-decoration-underline">La Mia Carta</h4>
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <p className='position-relative fw-bolder text-title fs-5'>Carrello <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title fs-5'>Totale Articoli <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
              </div>
          </div>
        </div>
    )
}

export default Cart