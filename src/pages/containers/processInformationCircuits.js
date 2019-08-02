import React, { Component } from 'react'

export default class ProcessInformationCircuits extends Component {
    render() {
        const Circuits = this.props.info;
        return (
            <div>
                {

                    Circuits.map((item, i) => {
                        return (
                            <div key={i}>
                                <b>{item.circuitName}</b>
                                <ul>
                                    <li>City {item.Location.locality}</li>
                                    <li>Country: {item.Location.country}</li>
                                    <li>Additional Info: <a href={item.url} target="_blank" className="url">{item.url}</a></li>
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
