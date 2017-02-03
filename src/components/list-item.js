import React,{Component} from 'react';

export default class ListItem extends Component {
  ListItems() {
    const props = this.props;
    if (props) {
      return (
        <li className="list-group-item">
          <p> {props.prefix} </p> 
          <small> {props.data} </small> 
        </li>
      )
    }
    return <small> Loading... </small>
  }
  render() {
    return (
      <ul> {this.ListItems()} </ul>
    )
  }  
}