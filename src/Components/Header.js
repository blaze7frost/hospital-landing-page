import React from 'react'
import mlogo from '../img/mlogo.svg'

const Header = () => {
  return (
    <>
      <div className='container'>
        

        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#"><img src={mlogo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon-dark"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent ">
            <ul className="navbar-nav ml-auto d-flex justify-content-around">
              
              <li className="nav-item active ">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-primary Contactbtn">Contact</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header