import logo192 from '../logo192.png'


function WhyChooseUS() {
    return (
        <div className="text-center mt-4 mb-3">
            <h4 className="fw-bold text-body-primary ">
            Why Choose Us ?
            </h4>
            <hr className="border border-2 border-primary mx-auto opacity-100" style={{'width':'100px', 'margin-top':'-2px'}}/>

            <div className="d-flex justify-content-center w-100 flex-wrap px-3">
                <div className="card m-1" style={{'width': '18rem'}}>
                    <img src={logo192} className="card-img-top" alt="img" style={{'height':'180px'}}/>
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mt-2 text-primary-emphasis">We are Certified</h5>
                        <p className="card-text text-info-emphasis fw-semibold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>    
                </div>

                <div className="card m-1" style={{'width': '18rem'}}>
                    <img src={logo192} className="card-img-top" alt="img" style={{'height':'180px'}}/>
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mt-2 text-primary-emphasis">We have Good Allies</h5>
                        <p className="card-text text-info-emphasis fw-semibold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>    
                </div>

                <div className="card m-1" style={{'width': '18rem'}}>
                    <img src={logo192} className="card-img-top" alt="img" style={{'height':'180px'}}/>
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mt-2 text-primary-emphasis">Placement Guaranteed</h5>
                        <p className="card-text text-info-emphasis fw-semibold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUS