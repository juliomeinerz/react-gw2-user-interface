import React, {Component} from 'react';
import '../styles/navbar.css';

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top">        
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Guild Wars 2
            </a>            
          </div>
          <div className="navbar-inner">
          <ul className="nav navbar-nav nav-pills">
            <li> <a href="/gw2/"> Home </a> </li>
            <li> <a href="/gw2/characters"> Characters </a> </li>
            <li> <a href="/gw2/tradingpost"> Trading Post </a> </li>
            <li> <a href="/gw2/guilds"> Guilds </a> </li>  
                       
          </ul>
          <p className="navbar-key"> Key: {this.props.accessKey} </p> 
          </div>            
      </nav>      
    )
  }
}
