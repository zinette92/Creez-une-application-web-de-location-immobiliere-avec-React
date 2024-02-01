import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../Slideshow/Slideshow';

export default function Housinginformation( { data } ) {
    const { houseId }= useParams();
    console.log("ok", houseId);
  return (
<div className="card-container">
          {data
            .filter((house) => house.id === houseId)
            .map((house, index) => (
              <div className="card-info" key={index}>
                {/* <h2>{house.title}</h2>
                <p>{house.description}</p> */}
                <Slideshow imagesList={ house.pictures } />
              </div>
            ))}
        </div>  )
}
