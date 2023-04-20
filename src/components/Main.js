import React from "react";
import  Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Container } from "react-bootstrap";
import Weather from "./Weather";
import CityImage from "./CityImage";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            cityData: [],
            error: false,
            errorMsg: "",
            simpleCityName:"",
            imageUrl:"",
            weatherData : [],
            movieData: []
            
        };
    }

    handleCityInput = (e) => {
        e.preventDefault();
        this.setState({
            city: e.target.value,
        });
        // console.log(this.city);
        
    };

    getAllData = (e) =>{
        this.getCityData(e);
        //this.getLocalApiData(e);
    }

    getCityData = async (e) => {
        // console.log("made it here");
        e.preventDefault();
        try {
            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`;

            // let newUrl = `http://localhost:3001/weather?lat=47.60621&lon=-122.33207&city=Seattle`
            let cityData = await axios.get(url);
            //console.log(cityData.data);
            let returnedCity= cityData.data[0].display_name.split(",")[0];

            let lattitudeForCity = cityData.data[0].lat;
            let cityLongitude = cityData.data[0].lon;
            
            let tempImageUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${lattitudeForCity},${cityLongitude}&zoom=12&size=500x500`;
            // console.log(tempImageUrl);
            // let newImgURL = `https://maps.locationiq.com/v3/staticmap?key={process/env.REACT_APP_LOCATION_IQ_API_KEY}=47.6062,122.3321&zoom=13`;

            let imageDataResponce = await axios.get(tempImageUrl);
            //console.log(imageDataResponce.config.url);

            let newUrl = `http://localhost:3001/weather?city=${returnedCity}`;
            let newWeatherData = await axios.get(newUrl);

            console.log(newWeatherData);


            let movieURL = `http://localhost:3001/movies?city=${returnedCity}`;
            let returnedMovieData = await axios.get(movieURL);
            console.log(returnedMovieData.data);


            this.setState({
                cityData: cityData.data[0],
                error: false,
                simpleCityName: returnedCity, 
                imageUrl: imageDataResponce.config.url,
                weatherData : newWeatherData.data,
                movieData: returnedMovieData.data
            })
        } catch (error) {
            //console.log("error retrieving info");
            this.setState({
                error: true,
                errorMsg: error.message
                
            })
        }
    };

    render() {
        return (
            <>
            
            <Container >
                <Form onSubmit={this.getAllData} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Enter City</Form.Label> */}
                        <Form.Control
                            // type="string"
                            type="text"
                            placeholder="Enter City Name"
                            onInput={this.handleCityInput}
                            style={{ width: "32rem"}}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                </Form>
            </Container>
                
                {
                    this.state.error ?
                     <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                            <ListGroup.Item>{this.state.errorMsg}</ListGroup.Item>
                            </ListGroup>
                    </Card>
                    :
                        <Container>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={this.state.imageUrl}/>
                            <Card.Body>
                                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                                <Card.Text>
                                {`${this.state.simpleCityName} has a lattitude of: ${this.state.cityData.lat} and a longitude of ${this.state.cityData.lon} `}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Weather citySearch={this.state.simpleCityName} allWeatherData={this.state.weatherData}/>
                        <CityImage allmovieData={this.state.movieData}/>
                        
                        </Container> 
                }
            </>
        );
    }
}

export default Main;



