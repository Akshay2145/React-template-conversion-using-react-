import React from 'react'
import {SingleCard} from './SingleCard'

export const Cards = ()=>{
    return(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
            <SingleCard title ="First" content = "this is first card" imgUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ></SingleCard>
            <SingleCard title ="Second" content = "this is second card" imgUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></SingleCard>
            <SingleCard title ="Third" content = "this is third card" imgUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></SingleCard>
        </div>
      </div>
    </section>
    )
}
