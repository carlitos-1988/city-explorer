import {Component} from "react";
// import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";


class Weather extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         error : true,
    //         weatherData : []
    //     };
    // }

// getApiData = async(e)=>{
//     e.preventDefault();

//     try{
//         let newUrl = `http://localhost:3001/weather&city=${this.props.citySearch}`;
//         let newWeatherData = await axios.get(newUrl);
//         console.log(newWeatherData.data);
//         this.setState({
//             weatherData: newWeatherData.data,
//             error : true
//         })
//     }catch(error){
//         console.log(error.message)
//     }
// }

    render(){
    return(
        <>
            {/* <ListGroup>
            {this.state.weatherData.map((createWeatherData) => {
            const hasDate = createWeatherData.hasOwnProperty('date');
            const hasHighTemp = createWeatherData.hasOwnProperty('hightemp');
            const hasLowTemp = createWeatherData.hasOwnProperty('lowtemp');
            if (hasDate || hasHighTemp || hasLowTemp) {
              return (
                <ListGroup.Item key={createWeatherData.date}>
                  {hasDate && `Date: ${createWeatherData.date}`}
                  {hasHighTemp && ` High:${createWeatherData.hightemp}`}
                  {hasLowTemp && ` Low:${createWeatherData.lowtemp}`}
                </ListGroup.Item>
              );
            } else {
              return null;
            }
          })} */}
        <ListGroup>
        
          {this.props.allWeatherData.map((mapData)=>(
            <>
            <ListGroupItem>
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