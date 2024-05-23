import ApplyForm from "./ApplyForm";



export function ACCAPrep() {
    return(
        <div id="action4" className="p-5 mb-3 mt-1" style={{'backgroundColor':'#f3f8fe'}}>
        <div className="row d-lg-flex align-items-lg-center">
            <div className="col-sm-12 col-lg-6">
                <h4 className="fw-bold text-body-primary ">
                Kick Off your ACCA Prep journey with IndigoLearn
                </h4>
                <p className="fw-semibold fs-6">Sign up and get access to latest course content</p>
                <button type="button" className="btn btn-danger">Sign Up</button>
            </div>

            <div className="mt-5 col-sm-12 col-lg-6">
                <ApplyForm/>
            </div>
        </div>
        </div>
    )
}