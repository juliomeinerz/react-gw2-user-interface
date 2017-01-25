import React, {Component} from 'react';
import '../styles/navbar.css';

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">        
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Guild Wars 2
            </a>            
          </div>
          <div className="navbar-inner">
          <ul className="nav navbar-nav nav-pills">
            <li> <a href="/home"> Home </a> </li>
            <li> <a href="/characters"> Characters </a> </li>
            <li> <a href="/tradingpost"> Trading Post </a> </li>
            <li> <a href="/guilds"> Guilds </a> </li>  
            <span className="navbar-text navbar-right"> Key: {this.props.apiKey} </span>            
          </ul>
          </div>            
      </nav>      
    )
  }
}
