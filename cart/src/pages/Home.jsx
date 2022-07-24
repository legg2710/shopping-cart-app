import './Home.css';
const Home = () => {
    return (
        <div className='container-fluid py-20px'>
           <h3 className= 'text-center mt-5'> Shop Page </h3>
           <div className="container py-4">
            <div className="row">
                <Cards />

            </div>
           </div>
        </div>
    )
}

export default  Home