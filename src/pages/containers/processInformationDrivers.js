import React, { Component } from 'react'

export default class ProcessInformationDrivers extends Component {
    render() {
        const Drivers = this.props.info;
        return (
            <div>
                {

                    Drivers.map((item, i) => {
                        return (
                            <div key={i}>
                                <b>{item.givenName} {item.familyName}</b>
                                <ul>
                                    <li>Nationality {item.nationality}</li>
                                    <li>Number: {item.permanentNumber}</li>
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
