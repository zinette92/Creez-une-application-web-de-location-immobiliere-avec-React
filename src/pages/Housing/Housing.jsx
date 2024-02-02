import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Housinginformation from '../../components/Housinginformation/Housinginformation'

export default function Housing() {
  return (
    
    <div className="housing">
      <Housinginformation />
    </div>
  )
}
