import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProcessInformationFixture from './containers/processInformationFixture'
import './styles.css';
import Loading from '../../public/carloading.gif'

export default function Home(props) {
  const [state, setState] = useState({
    state: null,
    fetched: false
  });

  const getData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_PATH}/2019.json`)
      .then(res => {
        const season = res.data.MRData.RaceTable;
        setState({
          season: season,
          fetched: true
        })
      })
  }

  useEffect(() => {
    getData()
  }, [])

  let information = null;
  if (state.fetched) {
    information = <ProcessInformationFixture info={state.season} />
  } else {
    information = <img className="loading mx-auto d-block" src={Loading} alt="loading" />
  }
  return (
    <div id="container">
      <h1>Fixture</h1>
      <div>
        {information}
      </div>
    </div>
  )
}