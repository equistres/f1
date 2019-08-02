import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationResults from './containers/processInformationResults';
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Resultados(props) {
  const [state, setState] = useState({
    results: null,
    fetched: false
  });

  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/current/last/results.json`)
      .then(res => {
        const results = res.data.MRData.RaceTable.Races[0];
        setState({
          results: results,
          fetched: true
        });
      })
  }


  useEffect(() => {
    getData()
  }, [])


  let information = null;
  if (state.fetched) {
    information = <ProcessInformationResults info={state.results} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Last Race Positions</h1>
      <div>
        {information}
      </div>
    </div>
  )
}