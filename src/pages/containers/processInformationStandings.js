import React, { Component } from 'react'

export default class ProcessInformationStandings extends Component {
    render() {
        const Standings = this.props.info;
        return (
            <div>
                {

                    Standings.map((item, i) => {
                        return (
                            <div key={i}>
                                <b>{item.position})° {item.Driver.givenName} {item.Driver.familyName} - {item.Constructors[0].name}</b>
                                <ul>
                                    <li>Races won this season: {item.wins}</li>
                                    <li>Points: {item.points}</li>
                                    {/* <li>Country:  {item.Constructor.nationality}</li> */}
                                    <br />
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
