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
    if(isEmpty) return <h5 className='body text-center text-second py-3'>The shopping cart is empty </h5>
    return (
        <div className='body container-fluid py-5'>
            <div className="body row justify-content-center">
                <h4 className="text text-center py-3 text-decoration-underline">La Mia Carta</h4>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='text-second position-relative fw-bolder text-title'>Shopping cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='text-second fw-bolder text-title'>Total items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
                    <div className="body">
                      <table className="table table-dark table-hover m0">
                        <tbody>
                            {items.map((item, index) => {
                              return(
                                  <tr key={index} className='body align-middle'>
                                      <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                      <td> {item.title}</td>
                                      <td>$ {item.price}</td>
                                      <td>Quantity: {item.quantity}</td>
                                      <td>
                                          <button onClick={() => updateItemQuantity(item.id, item.quantity-1)} className='btn btn-outline-dark ms-1'>-</button>
                                          <button onClick={() => updateItemQuantity(item.id, item.quantity+1)} className='btn btn-outline-dark ms-1'>+</button>
                                          <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-5'>Remove item</button>
                                      </td>
                                  </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-between py-5">
                        <button onClick={() => emptyCart()} className="btn btn-outline-danger">Empty cart</button>
                        <h3 className="text-second">Total: ${cartTotal}</h3>
                    </div>
              </div>
          </div>
        </div>
    )
}

export default Cart