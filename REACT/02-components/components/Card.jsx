import React from 'react'

const Card = (props) => {

    console.log(props);
    
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card