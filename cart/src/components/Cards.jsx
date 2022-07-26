const Cards = (props) => {
    return (
        <>
           <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4">
                <card className="h-100 shadow">
                    <img src={props.img} alt="" className="card img-top img-fluid" />
                    <card className="body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <button className="btn btn-success">Agregar al carrito</button>
                    </card>
                </card>
           </div>
        </>
    )
}

export default  Cards