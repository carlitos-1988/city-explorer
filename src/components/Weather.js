import {Component} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";


class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            error : false,
            weatherData : []
        };
    }



getApiData = async(e)=>{
    e.preventDefault();

    try{
        let newUrl = `http://localhost:3001/weather?lat=47.60621&lon=-122.33207&city=Seattle`;
        let newWeatherData = await axios.get(newUrl);
        console.log(Array.from(newWeatherData.data));
        this.setState({
            weatherData: newWeatherData.data,
            error : true
        })
    }catch(error){
        console.log(error.message)
    }
}

    render(){
    return(
        <>
        {
        <Button variant="primary" type="submit" onClick={this.getApiData}>
        Get Weather Data
        </Button>
        }
        {
            this.state.error?
            <ListGroup>
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
          })}


        </ListGroup>
            :
            <p>press the buttton</p>
        
        }
        </>
    )
}
}

export default Weather;