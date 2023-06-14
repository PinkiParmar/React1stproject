import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Edit(){
    const {FirstName}=useParams();
    const [values,setValues]=useState({
        FirstName:FirstName,
        LastName:'',
        role:'',
        active:''
    })
    useEffect(()=>{
        
       
    })
    return(
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
            <form>
                <div>
                    <label htmlFor="name" style={{float: "left"}}>First Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="name" style={{float: "left"}}>Last Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="name" style={{float: "left"}}>role:</label>
                    <input type="text" name="name" className="form-control" placeholder="role"/>
                </div>
                <div>
                    <label htmlFor="name" style={{float: "left"}}>Active:</label>
                    <input type="text" name="name" className="form-control" placeholder="Active"/>
                </div>
                <br></br>
                <button className="btn-btn-info">Update</button>
            </form>
        </div>
    </div>
    )
}