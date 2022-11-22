import Cards from "../components/Cards";
import data from "../backend/Data";
import "./Dishes.css";

export default function Menu() {
  return (
    <div className="body container-fluid py-20px">
      <h1 className="text">Menu</h1>

      <h3 className="text-second mt-5">Starters</h3>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <h3 className="text-second text-center mt-5">Dishes</h3>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <h3 className="text-second text-center mt-5">Desserts</h3>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
