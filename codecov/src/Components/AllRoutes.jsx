import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Features from "../Pages/Features";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Integration from "../Pages/Integration";
import Customers from "../Pages/Customers";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/features' element={<PrivateRoute><Features /></PrivateRoute>}></Route>
        <Route path='/integration' element={<PrivateRoute><Integration /></PrivateRoute>}></Route>
        <Route path='/customers' element={<PrivateRoute><Customers /></PrivateRoute>}></Route>
        <Route path='/pricing' element={<PrivateRoute><Pricing /></PrivateRoute>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    );
  }
  
  export default AllRoutes;
  