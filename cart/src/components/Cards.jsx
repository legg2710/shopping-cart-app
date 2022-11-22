import "./Cards.css";
import { useCart } from "react-use-cart";

const Cards = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
        <card className="body card rounded">
          <img
            src={props.img}
            alt=""
            className="card img-top img-fluid img-fit"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="text card-title">{props.title}</h5>
              <span className="text-second fw-folder">${props.price}</span>
            </div>
            <div className="body-second">
              <p className="text-second card-text">{props.desc}</p>
            </div>
            <div className="d-grid justify-content-end mt-4">
              <button
                className="text-second btn btn-sm btn-outline-success"
                onClick={() => addItem(props.item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </card>
      </div>
    </>
  );
};

export default Cards;
