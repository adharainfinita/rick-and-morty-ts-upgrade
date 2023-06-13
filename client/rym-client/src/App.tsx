// import { useState } from 'react'
import { Cards } from "./components/Cards";
import {Routes, Route,useLocation} from "react-router-dom";
import { Nav } from "./components/Nav";
import './App.css';
import Title from "./components/Title";
import {SignOn} from "./components/SignOn"
import { Favorites } from "./components/Favorites";
import { About } from "./components/About";
import { Detail } from "./components/Detail";
import { SignUp } from "./components/SignUp";




function App() {
  const location = useLocation();



   
  return (
   
   <main>
     {location.pathname !== "/" 
     && location.pathname !== "/title" 
     && location.pathname !== "/new"
     && <Nav/>}
         <Routes>
            <Route path="/title" element= {<Title />} />
            <Route path='/' element={<SignOn />}/>
            <Route path="/home" element={
               <Cards/>
               }/>
               <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About/>}/>
            <Route path= "/detail/:id" element={<Detail/>}/>
            <Route path= "/new" element={<SignUp/>}/>

            {/* 
            
            
            <Route path= "/:others" element={<Error/>}/> */}
         </Routes>
   </main>
  )
}

export default App
