import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationTeams from './containers/processInformationTeams';
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Equipos(props) {
  const [state, setState] = useState({
    teams: null,
    fetched: false
  })
  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/current/constructorStandings.json`)
      .then(res => {
        const teams = res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setState({
          teams: teams,
          fetched: true
        });
      })
  }
  useEffect(() => {
    getData()
  }, [])
  let information = null;
  if (state.fetched) {
    information = <ProcessInformationTeams info={state.teams} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Teams</h1>
      <div>
        {information}
      </div>
    </div>
  )
}