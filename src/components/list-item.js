import React,{Component} from 'react';

export default class ListItem extends Component {
  listItems() {
    const props = this.props;
    if (props.data) {
      return (
        <li className="list-group-item">
          <p> <b> {props.prefix} </b> </p> 
          <small> {props.data} </small> 
        </li>
      )
    } 
    return (
      <li className="list-group-item">
        <p> <b> {props.prefix} </b> </p> 
        <small> Loading... </small> 
      </li>
    )
  }
  render() {
    return (
      <ul> {this.listItems()} </ul>
    )
  }  
}