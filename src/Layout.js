import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Layout extends Component {
    //funcion que setea la solapa activa
    activeMenuHandler = (e) => {
      let id = e.target.parentElement.id;
      let element = document.getElementsByClassName("active");
      element[0].classList.remove('active');
      let newElement = document.getElementById(id);
      newElement.classList.add('active');
    }

  render() {
    return (
      <div>
        {/* Cuerpo */}
        <div className="container">
          <div>
            <div className="text-center">
              <img className="logo" src="https://seeklogo.com/images/F/formula-one-2017-logo-BCDDC2C9ED-seeklogo.com.png" alt="Formula 1" />
            </div>
          </div>
          {/* Menu */}
          <nav id='cssmenu'>
            <ul>
              <li id="home" className="active"><Link to="/" onClick={this.activeMenuHandler}>Home</Link></li>
              <li id="last"><Link to="/results" onClick={this.activeMenuHandler}>Last Results</Link></li>
              <li id="standings"><Link to="/standings" onClick={this.activeMenuHandler}>Standings</Link></li>
              <li id="teams"><Link to="/teams" onClick={this.activeMenuHandler}>Teams</Link></li>             
              <li id="drivers"><Link to="/drivers" onClick={this.activeMenuHandler}>Drivers</Link></li>
              <li id="circuits" className='last'><Link to="/circuits" onClick={this.activeMenuHandler}>Circuits</Link></li>
            </ul>
          </nav>
          {this.props.children}
          {/* Footer */}
          <footer id="sticky-footer" className="py-4 bg-dark text-white-50 rounded">
            <div className="container text-center">
              <span>Made By Alejandro Soto, based on Ergast Developer API</span> | <span><a href="https://github.com/equistres" target="_blank">Github</a> - <a href="http://ergast.com/mrd/" target="_blank">API</a></span>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}