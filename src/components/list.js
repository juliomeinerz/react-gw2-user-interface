import React,{Component} from 'react';

export default class List extends Component {   
    listItems() {
      const props = this.props.character;
      if(props) {
        return(
          props.map((character) => {
            return (
              <div className="character-card" key={character.name}>
                <li className="list-group-item"> 
                  <small> <b> Name </b> </small> 
                  <p> {character.name} </p> 
                  <small> <b> Level </b> </small>
                  <p> {character.level} </p>
                  <small> <b> Profession </b> </small>
                  <p> {character.profession} </p>
                  <small> <b> Gender </b> </small>
                  <p> {character.gender} </p>              
                </li>                       
              </div>  
            )     
          })
       )
      }
        return <li> Loading... </li>         
    } 
    render() {
      return(
        <div> 
          <ul className="list-group"> {this.listItems()} </ul>
        </div>
      )
    }
}






