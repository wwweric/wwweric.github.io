import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/icons.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://www.facebook.com/nkmr.mmm/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Midori Nakamura portforio site.</strong>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
