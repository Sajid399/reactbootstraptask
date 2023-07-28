import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-light bg-success d-flex justify-content-between">
    <ul style={{listStyle: 'none', display: 'inline-flex'}}>
      <li><img src="hero-img.png" height="30px" width="30px" style={{borderRadius: '50%'}} alt="error" />
      </li><li> <p style={{color: 'aliceblue'}} className="m-3">LIAM</p></li> 
    </ul>
    <div>
      <img src="hero-img.png" height="30px" width="30px" style={{borderRadius: '50%'}} alt />
    </div>
  </nav>
</div>

  )
}

export default Navbar
