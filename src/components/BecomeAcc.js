import { GiRamProfile } from "react-icons/gi";



function BecomeAcc() {
    return(
        <div className="p-4 lg-w-50">
           <h3 className="fw-bold text-primary-emphasis">
            Become ACCA
            <small className="text-body-secondary"> in 18 Months</small>
            </h3>
            <p className="lh-sm fw-semibold fs-6">This is a long paragraph written to show how the
             line-height of an element is affected by our utilities.</p>
            
            <div className="d-flex mt-2 flex-wrap justify-content-around">
            
                <div className=" card shadow m-1" style={{'width':'180px', 'height':'80px'}}>
                    <div className="card-body d-flex align-center ">
                        <div>
                        <GiRamProfile/>
                        </div>
                        <p className="p-1 fw-semibold">This is some random text</p>
                    </div>
                </div>

                <div className=" card shadow m-1" style={{'width':'180px', 'height':'80px'}}>
                    <div className="card-body d-flex align-center ">
                        <div>
                        <GiRamProfile/>
                        </div>
                        <p className="p-1 fw-semibold">This is some random text</p>
                    </div>
                </div>

                <div className="card shadow m-1" style={{'width':'180px', 'height':'80px'}}>
                    <div className="card-body d-flex align-center ">
                        <div>
                        <GiRamProfile/>
                        </div>
                        <p className="p-1 fw-semibold">This is some random text</p>
                    </div>
                </div>

                <div className="card shadow m-1" style={{'width':'180px', 'height':'80px'}}>
                    <div className="card-body d-flex align-center ">
                        <div>
                        <GiRamProfile/>
                        </div>
                        <p className="p-1 fw-semibold">This is some random text</p>
                    </div>
                </div>
            
            </div>

            <div className="d-flex mt-2">
                <button type="button" className="btn btn-primary m-1">Become ACCA</button>
                <button type="button" className="btn btn-danger m-1">Join Now</button>
            </div>
        </div>
    )
}


export default BecomeAcc 