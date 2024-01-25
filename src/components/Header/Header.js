import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
    </nav>
  )
}
