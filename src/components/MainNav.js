import React from 'react'
import {Link} from 'react-router-dom'

import '../css/mainNav.css'

function MainNav(){

  return (
    <nav className="jr col-15 text-center">
        <img className="jr" src={require("../img/lufemas-website-logo.png")} alt="Lufemas Logo"/>
        <ul className="jr main-nav text-center pl-25 pr-25">
          <li className="jr pt-1"><a className="link-light-bg" href="/">Home</a></li>
          <li className="jr pt-1"><a className="link-light-bg" href="/">Posts</a></li>
          <li className="jr pt-1"><a className="link-light-bg" href="/">Tools</a></li>
          <li className="jr pt-1"><Link to='/timebuddy' className="link-light-bg">Time Budy</Link></li>
          <li className="jr pt-1"><Link to='/othergames' className="link-light-bg">Other Games</Link></li>
          <li className="jr pt-1"><a className="link-light-bg" href="/">Tutorials</a></li>
          <li className="jr pt-1"><a className="link-light-bg" href="/">Who's LuFeMas?</a></li>
          <li className="jr pt-1"><a className="link-light-bg" href="/">Contact Me</a></li>
        </ul>
    </nav>
  )
}

export default MainNav;