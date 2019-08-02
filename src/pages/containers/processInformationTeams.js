import React, { Component } from 'react'

export default class ProcessInformationTeams extends Component {
    render() {
        const Teams = this.props.info;
        return (
            <div>
                {
                    Teams.map((item, i) => {
                        return (
                            <div key={i}>
                                <b>{item.position}° Position</b>
                                <ul>
                                    <b>Team {item.Constructor.name}</b>
                                    <li>Races won this season: {item.wins}</li>
                                    <li>Points: {item.points}</li>
                                    <li>Country:  {item.Constructor.nationality}</li>
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
