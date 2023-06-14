import React,{useState} from "react";
import User from "./User/User";
export const Login =(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
        if ((email=="admin@gmail.com") && (pass=="admin")){
            window.location.href = "./User";
        } else {
            console.log("Invalid Password");
            alert("Invalid Password.");
        }
    }
    return(
   
        <>
        <div className="container col-lg-4 mt-5">
   
       <form onSubmit={handleSubmit}>

       <div class="form-outline mb-4">
        
        <label htmlFor="email" class="form-label pull-left float-left" style={{float: "left"}}>Email</label>
        <input value={email}  class="form-control" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemain@gmail.com" id="email" name="email"/>
        </div>
        <div class="form-outline mb-4">
        <label htmlFor="password" class="form-label">Password</label>
        <input value={pass}  class="form-control" onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
        </div>
        <button class="btn btn-primary btn-floating mx-1">Log In</button>
       </form>
       </div>
       {/*<button onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button>*/}
       </>
    )
}