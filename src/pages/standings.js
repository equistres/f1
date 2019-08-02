import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationStandings from './containers/processInformationStandings';
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Standings(props) {
  const [state, setState] = useState({
    standings: null,
    fetched: false
  });

  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/current/driverStandings.json`)
      .then(res => {
        const standings = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setState({
          standings: standings,
          fetched: true
        });
      });
  }
  useEffect(() => {
    getData()
  }, [])
  let information = null;
  if (state.fetched) {
    information = <ProcessInformationStandings info={state.standings} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Standings</h1>
      <div>
        {information}
      </div>
    </div>
  )
}