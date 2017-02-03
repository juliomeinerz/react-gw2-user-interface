import React,{Component} from 'react';
import NavigationBar from '../components/navbar';
import {getKey} from '../requests/api';
import '../styles/main.css';

const API = getKey();

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavigationBar accessKey={API} />
        <div className="container-fluid">
          {React.cloneElement(this.props.children, {accessKey:API})}
        </div>
      </div>
    )
  }
}