import React, { Component } from 'react'

export default class ProcessInformationResults extends Component {
    render() {
        const Results = this.props.info.Results
        const Circuit = this.props.info.Circuit
        return (
            <div>
                Circuit: {this.props.info.raceName} - {Circuit.circuitName}
                <ul>
                    <li>Location: {Circuit.Location.locality}, {Circuit.Location.country}</li>
                    <li>Additional Info: <a href="http://en.wikipedia.org/wiki/Red_Bull_Ring" target="_blank">{Circuit.url}</a></li>
                </ul>
                <br />
                {
                    Results.map((item, i) => {
                        return (
                            <div key={i}>
                                <b>{item.position}) <b>{item.Driver.givenName} {item.Driver.familyName}</b></b>
                                <ul>
                                    <li>Team: {item.Constructor.name}</li>
                                    <li>Number: {item.number}</li>
                                    <li>Points: {item.points}</li>
                                    <li>Laps: {item.laps}</li>
                                    <li>Status: {item.status}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
