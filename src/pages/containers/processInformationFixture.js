import React, { Component } from 'react'

export default class ProcessInformationFixture extends Component {
    render() {
        const Races = this.props.info.Races
        return (
            <div>
                Season: {this.props.info.season}
                <br/>
                <ul>
                    {
                        Races.map((item, i) => {
                            var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12:'false' };
                            let horario = new Date(`${item.date} ${item.time}`).toLocaleDateString("es-AR", options);
                            return <li key={i}><div >Race {item.round} <b>{item.raceName}</b> Date: {horario} </div></li>                    
                        })
                    }
                </ul>
            </div>
        )
    }
}
