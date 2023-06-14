import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import EditModal from "./modal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function User(){
{ 
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(0);
  const [selectedUser, setSelectedUser] = useState(1);
  const handleClose=()=>setShow(false);
  const handleShow=() =>setShow(true);
  const handleShow1=() =>setShow1(true);
  const handleClose1=()=>setShow1(false);
    const arrayofUsers = [{FirstName:"Rohit",LastName:"Lalwani",role:"Admin",active:1},
    {FirstName:"Moin Ahmed",LastName:"Khan",role:"User",active:1},
    {FirstName:"Vinit",LastName:"Joshi",role:"Admin",active:1}, 
    {FirstName:"Kuldeep",LastName:"Patel",role:"User",active:1},
    {FirstName:"Hemant",LastName:"Uchchasare",role:"User",active:1},
    {FirstName:"Diksha",LastName:"Patidar",role:"User",active:1},
    {FirstName:"Aasif",LastName:"Umar",role:"User",active:1},
    {FirstName:"Abhishek",LastName:"Rathore",role:"User",active:1},
    {FirstName:"Akshay",LastName:"Chouhan",role:"User",active:1},
    {FirstName:"Rajat",LastName:"Gite",role:"User",active:1},
    {FirstName:"Praveen",LastName:"Patel",role:"user",active:1},
    {FirstName:"Rakesh",LastName:"Diwan",role:"User",active:1}];
    const [users, setUsers]=React.useState(JSON.parse(localStorage.getItem('userRecords')) || arrayofUsers);
                 useEffect(()=>{
                  console.log(users)
                 },[users])    
             const editDetails=(id)=>{
              setSelectedUser(id)
              console.log(id);
              handleShow();
              setFirstname(users[id].FirstName);
              setLastname(users[id].LastName);
              setRole(users[id].role);
              setActive(users[id].active);
             }
             const viewDetails=(id)=>{
              setSelectedUser(id)
              console.log(id);
              handleShow1();
              setFirstname(users[id].FirstName);
              setLastname(users[id].LastName);
              setRole(users[id].role);
              setActive(users[id].active);
             }
           const deleteDetails = (id)=>{
            var array = users
            array.splice(id,1);
            console.log(id);
            console.log(array);
          setUsers(array);
          localStorage.setItem('userRecords', JSON.stringify(array));
          window.location.reload();

            }
            
const saveRecord = () => {
   var allRecords = users;
   console.log("selected User",selectedUser);
   console.log(firstname);
   console.log(lastname);
   let updateRecord = {
    FirstName: firstname,
    LastName: lastname,
     role,
     active
    }
    allRecords[selectedUser]=updateRecord;
    console.log(allRecords[selectedUser]);
    setUsers(allRecords);
    localStorage.setItem('userRecords', JSON.stringify(allRecords));
   console.log(allRecords);
   alert("User Updated successfully.")
   window.location.reload();
}
const handleChange = (e) =>{
console.log(e.target.value, "added value")
if (e.target.name === "firstname") {
setFirstname(e.target.value)
} else if (e.target.name==="lastname") {
  setLastname(e.target.value)
} else if (e.target.name==="role") {
  setRole(e.target.value)
} else if (e.target.name==="active") {
  setActive(e.target.value)
}
}
 return(<div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div className="d-flex w-100 vh-50 justify-content-center align-items-center">
        <div className="w-70 border bg-secondary text-white p-5">
            <form>
                <div>
                    <label htmlFor="firstname" style={{float: "left"}}>First Name:</label>
                    <input type="text" defaultValue={firstname} onChange={(e)=>handleChange(e)} name="firstname" className="form-control" placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="lastname" style={{float: "left"}}>Last Name:</label>
                    <input type="text" defaultValue={lastname} onChange={(e)=>handleChange(e)} name="lastname" className="form-control" placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="role" style={{float: "left"}}>Role:</label>
                    <select name="role" defaultValue={role} className="form-select" onChange={(e)=>handleChange(e)} >
                      <option  value="User" >user</option>
                      <option value="Admin" >admin</option>
                    </select>                
                </div>
                <div>
                    <label htmlFor="active" style={{float: "left"}}>Active:</label>&nbsp;&nbsp;          
                    {/* <select name="active" className="form-select" defaultValue={active} onChange={(e)=>handleChange(e)} >
                      <option value="0" >0</option>
                      <option value="1">1</option> 
                    </select> */}
                    <div defaultValue={active} onChange={(e)=>handleChange(e)}>
                    <input className="form-check-input" type="radio"  name="active" value="0"/>&nbsp;&nbsp;
                    <label htmlFor="active">0</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-check-input" type="radio"  name="active" value="1"/>&nbsp;&nbsp;
                    <label htmlFor="active">1</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveRecord}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>View Detailes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div className="d-flex w-100 vh-50 justify-content-center align-items-center">
        <div className="w-70 border bg-primary text-white p-5">
            <form>
                <div>
                    <label htmlFor="firstname" style={{float: "left"}}>First Name:</label>
                    <input type="text" defaultValue={firstname} onChange={(e)=>handleChange(e)} name="firstname" className="form-control" placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="lastname" style={{float: "left"}}>Last Name:</label>
                    <input type="text" defaultValue={lastname} onChange={(e)=>handleChange(e)} name="lastname" className="form-control" placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="role" style={{float: "left"}}>Role:</label>
                    <select name="role" defaultValue={role} className="form-select" onChange={(e)=>handleChange(e)} >
                      <option  value="User" >user</option>
                      <option value="Admin" >admin</option>
                    </select>                
                </div>
                <div>
                    <label htmlFor="active" style={{float: "left"}}>Active:</label>&nbsp;&nbsp;          
                    <select name="active" className="form-select" defaultValue={active} onChange={(e)=>handleChange(e)} >
                      <option value="0" >0</option>
                      <option value="1">1</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="tableResponsive"> 
      {/* <div className="{-sm|-md|-lg|-xl|-xxl}"      */}
                 <table className="table table-striped" >
                  <thead>
                     <tr>
                         <th>Sno</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Role</th>
                         <th>Active</th>
                         <th>Operation</th>
                     </tr>
                  </thead>
         <tbody>
                  {users.map((data,index)=>{
                        return<tr key={index}>
                         <td>{index+1}</td>
                         <td>{data.FirstName}</td>
                         <td>{data.LastName}</td>
                         <td>{data.role}</td>
                         <td>{data.active}</td>
                         <td>{/* <button className="btn btn-success btn-floating mx-1" onClick={()=>viewDetails(index) }>Veiw</button>&nbsp; ||  &nbsp; */}
                          <button className="btn btn-success btn-floating mx-1" onClick={()=>viewDetails(index)}>View</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-primary btn-floating mx-1" onClick={()=>editDetails(index)}>Edit</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-danger btn-floating mx-1" onClick={()=>deleteDetails(index) }>Delete</button></td>
                        </tr>
                  })}
         </tbody>
                 </table>
                 </div>
            
             </div>)
           }
         }


        
    


