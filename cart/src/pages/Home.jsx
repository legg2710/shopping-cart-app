import Cards from '../components/Cards';
import data from '../backend/Data';
import './Home.css';
const Home = () => {
    return (
        <div className='container-fluid py-20px'>
           <h3 className= 'text-center mt-5'> Piatti </h3>
           <div className="container py-4">
            <div className="row">
                {data.products.map((item,index) => {
                    return ( 
                    <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} />
                    )
                })}
               

            </div>
           </div>
        </div>
    )
}

export default  Home