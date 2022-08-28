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
                <div className="col-12 py-4 shadow">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Carrello <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title'>Totale Articoli <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
                    <div>
                      <table className="table table-primary table-hover m0">
                        <tbody>
                            {items.map((item, index) => {
                              return(
                                  <tr key={index}>
                                      <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                      <td> {item.title}</td>
                                      <td>$ {item.price}</td>
                                      <td>Quantità: {item.quantity}</td>
                                  </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>
              </div>
          </div>
        </div>
    )
}

export default Cart