import React from 'react'
import "./home.scss"

export default function Home({menuOpen, setMenuOpen}) {
  return (
    <div className={'home ' + (menuOpen && 'active')} id="home">
      <a href="#about" onClick={()=>setMenuOpen(false)}><h1>About</h1></a>
      <a href="#works" onClick={()=>setMenuOpen(false)}><h1>Works</h1></a>
    </div>
  )
}
