import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationCircuits from './containers/processInformationCircuits';
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Circuits(props) {
  const [state, setState] = useState({
    circuits: null,
    fetched: false
  })
  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/current/circuits.json`)
      .then(res => {
        const circuits = res.data.MRData.CircuitTable.Circuits;
        setState({
          circuits: circuits,
          fetched: true
        });
      })
  }

  useEffect(() => {
    getData()
  }, [])
  let information = null;
  if (state.fetched) {
    information = <ProcessInformationCircuits info={state.circuits} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Circuits</h1>
      <div>
        {information}
      </div>
    </div>
  )
}