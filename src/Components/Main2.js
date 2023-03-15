import React from 'react'
import doctor1 from '../img/doctor1.svg'
import doctor2 from '../img/doctor2.svg'
import ambulance from '../img/ambulance.svg'


const Main2 = () => {
    return (
        <div className='main2'>
            <div className="container text-center ">
                <div className="row">
                    <div className="col">
                       
                        <div className='main2c1 '>

                            <h2 className='clinic '>Clinic With Innovative</h2>
                            <h5 >We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</h5>
                        </div>
                    </div>
                    <div className="col">
                        
                        <div className="container text-center">
                            <div className="row">
                                <div className="col d-flex justify-content-around">
                                   
                                    <div>

                                        <div className="container py-5 my-5 px-1 d-flex align-items-center">
                                        <div>
                                            <div className="main2col1 shadow-lg width: 10rem">
                                                <img src={doctor1} className="card-img-top doctor1" alt="" />
                                                <div className="card-body">
                                                <h4>
                                                        <p className="card-text1">Qualified Doctors</p>
                                                        </h4>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container my-5 py-5 px-1  d-flex align-items-center">
                                        <div>
                                            <div className="main2col1 shadow-lg width: 10rem">
                                                <img src={ambulance} className="card-img-top doctor1 " alt="" />
                                                <div className="card-body ">
                                                <h4 className="card-text1  ">24 Hour Service</h4>
                                                </div>
                                            </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>


                                <div className="col d-flex justify-content-around d-flex align-items-center">
                                    <div>
                                          
                                    <div className=''>
                                            <div className="main2col2 shadow-lg width: 10rem ">
                                                <img src={doctor2} className="card-img-top doctor1" alt="" />
                                                    <h4>
                                                        <p className="card-text1">Emergency Care</p>
                                                        </h4>
                                                <div className="card-body">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Main2