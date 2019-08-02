import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationDrivers from './containers/processInformationDrivers';
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Drivers(props) {
  const [state, setState] = useState({
    drivers: null,
    fetched: false
  })
  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/current/drivers.json`)
      .then(res => {
        const drivers = res.data.MRData.DriverTable.Drivers;
        setState({
          drivers: drivers,
          fetched: true
        });
      })
  }
  useEffect(() => {
    getData()
  }, [])
  let information = null;
  if (state.fetched) {
    information = <ProcessInformationDrivers info={state.drivers} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Drivers</h1>
      <div>
        {information}
      </div>
    </div>
  )
}