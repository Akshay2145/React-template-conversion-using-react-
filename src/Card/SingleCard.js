import React from 'react'

export const SingleCard = ({title , content ,imgUrl})=>{
    return(
          <div className="col-4">
            <div className="card" style={{width : "18 rem"}}>
              <img
                src={imgUrl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
    )
}