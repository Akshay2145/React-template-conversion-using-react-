import React from 'react'
import {FootPara} from './FootPara'

export const Footer = ()=>{
    return(
        <div>
            <section className="footer  bg-dark text-white">
               <FootPara text = "contact us on insta"></FootPara>
               <FootPara text = "contact us on Email"></FootPara>
               <FootPara text = "No copyright claim"></FootPara>
            </section>
        </div>
    )
}