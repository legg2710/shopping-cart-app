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
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline">La Mia Carta</h4>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Carrello <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title'>Totale Articoli <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
                    <div className=''>
                      <table className="table table-light table-hover m0">
                        <tbody>
                            {items.map((item, index) => {
                              return(
                                  <tr key={index}>
                                      <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                      <td> {item.title}</td>
                                      <td>$ {item.price}</td>
                                      <td>Quantità: {item.quantity}</td>
                                      <td>
                                          <button className='btn btn-outline-dark ms-1'>-</button>
                                          <button className='btn btn-outline-dark ms-1'>+</button>
                                          <button className='btn btn-outline-danger ms-5'>Rimuovi Oggetto</button>
                                      </td>
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