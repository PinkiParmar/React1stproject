import React,{useState} from "react";
export const Register =(props)=>{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,seName]=useState('');
   
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(

        <><form onSubmit={handleSubmit}>
         <label htmlFor="name">Full name</label>
         <input value={name} type="text" placeholder="full name" id="name" name="name"/>   
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemain@gmail.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
        <button>Log In</button>
       </form>
       <button onClick={()=> props.onFormSwitch('login')}>Already have an account?Login here</button></>
    )
}