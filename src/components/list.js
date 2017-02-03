import React,{Component} from 'react';

export default class List extends Component {   
    ListItems() {
      const props = this.props.data;
        if(props) {
          return(
            props.map((data) => {
              console.log(data)        
              return <li className="list-group-item" key={data}> {data} </li>
            })
         )
        }
        return <div> Loading... </div>  
        
    } 
    render() {
      return(
        <div> 
          <ul className="list-group"> {this.ListItems()} </ul>
        </div>
      )
    }
}






