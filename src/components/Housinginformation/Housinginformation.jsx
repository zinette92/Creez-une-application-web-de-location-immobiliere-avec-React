import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../Slideshow/Slideshow';
import Data from '../../Data/logements.json'

export default function Housinginformation() {
    const { houseId } = useParams();
    console.log("ok", houseId);
  return (
<div className="card-container">
          {Data
            .filter((house) => house.id === houseId)
            .map((house, index) => (
              <div className="card-info" key={index}>
                {/* <h2>{house.title}</h2>
                <p>{house.description}</p> */}
                <Slideshow imageTitle = { house.title } imagesList={ house.pictures } />
              </div>
            ))}
        </div>  )
}
