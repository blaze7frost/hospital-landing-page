import React, { useEffect, useState } from 'react'
import { InputGroup } from 'react-bootstrap';
import axios from 'axios';
import oval from '../img/Oval.svg'
import dabba from '../img/dabba.svg'

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <>
      <div>
        <div className='container comcard'>
          <div className="row">
            {
              Object.values(data).map((val) => {
                return (

                  <div className="container col-6 py-3 px-3">
                    <div className="card cardel shadow">
                      <div>
                        <img src={dabba} className="dabba float-right" />
                      </div>

                      <div className="card-body">
                        <div className="cardtext">{val.Reviews}
                        </div>
                        <div className='pl-4'>
                          <img src={oval} className="rounded float-left"/>
                        </div>
                        <div className="cardtitle">
                          {val.Name}

                          <div className='patient'>Patient</div>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <div className="container py-5 my-5 ">
          <div className="cardblue width: 18rem ;">

            <div className="card-body">
              <div className='subscribe  d-flex justify-content-center'>
                Subscribe to Newsletter
              </div>
              <div className='experience  d-flex justify-content-center'>
                <h5>We have a wide experience in experience design and strategy</h5>
              </div>
            </div>
            <div className='container d-flex justify-content-center p-5'>
              <InputGroup type="email" className=" searchbar form-control emailbox d-flex align-items-center d-flex justify-content-end " placeholder="Enter your email"  >
                <button type="button" className=" btnneeche btn btn-primary">Send Now</button>
                </InputGroup>
           


            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Card