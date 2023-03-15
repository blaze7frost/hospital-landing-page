import React from 'react'
import tooth from '../img/tooth.svg'
import brain from '../img/brain.svg'
import file from '../img/file.svg'
import lungs from '../img/lungs.svg'

const main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* 1 of 2 */}
            <div>
              <h3 className='pt-5 mt-5 Welcome d-flex justify-content-start'>Welcome to MediCare+ Clinic</h3>
              <h1 className='pt-3 best'>Best Specialists</h1>
              <h5 className='we'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</h5>
              <button type="button" className="btn btn-primary btn-lg btn1">Make an Appointment</button>
              <button type="button" className="btn btn-lg btn2">Departments</button>
            </div>
          </div>
          <div className="col">
            {/* 2 of 2 */}
            <div className="jumbotron my-5">
            </div>
          </div>
        </div>
      </div>
      <h1 className='services'>Our Services</h1>
      <h5 className='provide pt-5 pb-5'>We provide the most full medical services, so every person could <br /> have the oppurtunity to receive qualitative medical help.</h5>
      <div className="container d-flex justify-content-around ">
        <div className="row ">
          <div className="col-sm d-flex justify-content-around">
            <div>
              <div className="shadow-lg p-3 mb-5 card1 ">

                <img src={tooth} className="cardimg" alt="" />
                <div className="card-body">
                  <div className="card-text">
                    <h2>Dental Care</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex justify-content-around">
            <div >
              <div className="shadow-lg p-3 mb-5 card2 abc">
                <div >
                  <img src={lungs} className="cardimg" alt="" />
                  <div className="card-body">
                    <div className="card-text">
                      <h2>Pulmonary</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex justify-content-around">
            <div>
              <div className="shadow-lg p-3 mb-5 card1">
                <div>
                  <img src={brain} className="cardimg" alt="" />
                  <div className="card-body">
                    <div className="card-text">
                      <h2>Neurological</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex justify-content-around">
            <div>
              <div className="shadow-lg p-3 mb-5 card1 ">
                <div>
                  <img src={file} className="cardimg" alt="" />
                  <div className="card-body">
                    <div className="card-text">
                      <h2>Prediatrics</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default main