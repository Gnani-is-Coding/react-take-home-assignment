import { SiLevelsdotfyi } from "react-icons/si";
import { IoTimerSharp } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { SiCodeceptjs } from "react-icons/si";


export const AccEligibility = () => {
    return(
        <div className="d-flex justify-content-center px-3 flex-wrap mt-4">
            <div className="p-2 shadow m-1 text-center rounded border-top border-4 border-secondary" style={{'width':'260px', 'height':'90px'}}>
                <h5>Levels</h5>
                    <div className="d-flex justify-content-center align-center w-100 mt-2">
                        <div>
                        <SiLevelsdotfyi/>
                        </div>
                        <p className="p-1 fw-semibold">Three levels</p>
                        
                    </div>
            </div>

            <div className="p-2 shadow m-1 text-center rounded border-top border-4 border-secondary" style={{'width':'260px', 'height':'90px'}}>
                <h5>Duration</h5>
                    <div className="d-flex justify-content-center align-center w-100 mt-2">
                        <div>
                        <IoTimerSharp/>
                        </div>
                        <p className="p-1 fw-semibold">Three levels</p>
                        
                    </div>
            </div>

            <div className="p-2 shadow m-1 text-center rounded border-top border-4 border-secondary" style={{'width':'260px', 'height':'90px'}}>
                <h5>Exams</h5>
                    <div className="d-flex justify-content-center align-center w-100 mt-2">
                        <div>
                        <PiExamFill/>
                        </div>
                        <p className="p-1 fw-semibold">Three levels</p>
                        
                    </div>
            </div>

            <div className="p-2 shadow m-1 text-center rounded border-top border-4 border-secondary" style={{'width':'260px', 'height':'90px'}}>
                <h5>Exemptions</h5>
                    <div className="d-flex justify-content-center align-center w-100 mt-2">
                        <div>
                        <SiCodeceptjs/>
                        </div>
                        <p className="p-1 fw-semibold">Three levels</p>
                        
                    </div>
            </div>
        </div>
    )
}