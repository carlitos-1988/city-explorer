import React from "react";
import  Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Container } from "react-bootstrap";
import Weather from "./Weather";
import CityImage from "./CityImage";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    };

    getCityData = async (e) => {
        e.preventDefault();
        try {


            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`;
            
            let cityData = await axios.get(url);
            let returnedCity= cityData.data[0].display_name.split(",")[0].toLowerCase();

            let lattitudeForCity = cityData.data[0].lat;
            let cityLongitude = cityData.data[0].lon;
            
            
            let tempImageUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${lattitudeForCity},${cityLongitude}&zoom=12&size=500x500`;

            console.log('made it here');
            let imageDataResponce = await axios.get(tempImageUrl);

            this.setState({
                cityData: cityData.data[0],
                error: false,
                simpleCityName: returnedCity, 
                imageUrl: imageDataResponce.config.url
            })

            this.getWeatherData(lattitudeForCity,cityLongitude);
            this.getMovieData(returnedCity)
        } catch (error) {
            this.setState({
                error: true,
                errorMsg: error.message
                
            })
        }
    };

    getWeatherData = async (lat,lon) => {
        try{

            let weatherAPI = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
            let weatherData = await axios.get(weatherAPI)
            
            this.setState({
                weatherData:weatherData.data
            })
        }catch(e){
            console.log(e)
        }
    }

    getMovieData = async(city)=>{
        try{
            let movieApi = `${process.env.REACT_APP_SERVER}/movies?city=${city}`;
            let movieData = await axios.get(movieApi);

            this.setState({
                movieData: movieData.data
            })

        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <>
            
            <Container fluid className="my-search">
                <Row>
                    <Col>
                <Form onSubmit={this.getCityData} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="text"
                            placeholder="Enter City Name"
                            onInput={this.handleCityInput}
                            style={{ width: "32rem"}}
                        />
                    </Form.Group>
                </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                    </Col>
                </Row>
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



