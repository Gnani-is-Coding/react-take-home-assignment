import React, { useState } from 'react'


function ApplyForm() {
    const [details, setDetails] = useState({name:'', email: '', number:''})

    const inputName = (e) => {
        setDetails(prevState => {
            return {...prevState, name: e.target.value}
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(details, "details Object")
    }

    
    return(
        <div className="mx-auto p-4 text-center rounded border-top border-4 border-primary  shadow" style={{'width':'95%'}}>
            <h1 className="w-100 text-primary-emphasis fs-6">Apply to be  an ACCA! Get in touch</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" id="inputPassword5" className="form-control my-1" placeholder="Name" aria-describedby="passwordHelpBlock" value={details.name} onChange={(e) => inputName(e)}/>
                <input type="email" id="inputPassword5" className="form-control my-1" placeholder="Email" aria-describedby="passwordHelpBlock" value={details.email} onChange={(e) => setDetails(prevState=> { return {...prevState, email: e.target.value}})}/>
                <input type="number" id="inputPassword5" className="form-control my-1" placeholder="Phone Number" aria-describedby="passwordHelpBlock"  value={details.number} onChange={(e) => setDetails(prevState=> { return {...prevState, number: e.target.value}})}/>
                
                <button type="submit" className="btn btn-primary w-100 mt-4">Request a Callback</button>
            </form>
        </div>
    )
}

export default ApplyForm