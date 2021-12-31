import React from 'react'

import {Navbar} from "./Nav/Navbar"
import {Jumbotron} from './Middle jumbotron part/Jumbotron'
import {Footer} from './Footer/Footer'
import {Features} from './Features/Features'
import {Cards} from './Card/Cards'

 export const App = ()=>{
     return(
         <div>
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <Features/>
            <Cards></Cards>
            <Footer></Footer>
            
         </div>
     )
 }