import Cards from "../components/Cards";
import data from "../backend/Data";
import "./Dishes.css";
const Dishes = () => {
  return (
    <div className="body container-fluid py-20px">
      <h3 className="text text-center mt-5">Dishes</h3>
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
};

export default Dishes;
