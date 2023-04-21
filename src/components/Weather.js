import {Component} from "react";
// import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";


class Weather extends Component{

    render(){
    return(
        <>
        <ListGroup key='myToplist'>
        
          {this.props.allWeatherData.map((mapData)=>(
            <>
            <ListGroupItem key={`${mapData.description}+${mapData.date}`}>
                {mapData.description} on {mapData.date}
            </ListGroupItem>
            </>
          ))}

        </ListGroup>
        
        </>
    )
}
}

export default Weather;