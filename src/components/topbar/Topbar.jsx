import React from 'react'
import './topbar.scss'
import {Person, Mail} from '@mui/icons-material'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
        <div className='wrapper'>
            <div className='left'>
                <a href='#home'><span>YONGCHAO XU.</span></a>
                <div className='itemContainer'>
                  <Person className='icon'/>
                  <span>+61 424851147</span>
                </div>
                <div className='itemContainer'>
                  <Mail className='icon'/>
                  <span>pyc.xuu@gmail.com</span>
                </div>
            </div>
            <div className='right'>
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
            </div>
        </div>
    </div>
  )
}
