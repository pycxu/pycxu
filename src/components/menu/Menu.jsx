import React from 'react'
import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#home">Home</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#about">About</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#works">Works</a></li>
        </ul>
    </div>
  )
}
