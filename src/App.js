import React,{useState} from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import User from "./User/User";
import { Modal } from "react-bootstrap";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    
                    <Route exact path="/user" element={<User />}></Route>
                    
                    
                </Routes>
            </BrowserRouter>
</div>

  );
}



export default App;
