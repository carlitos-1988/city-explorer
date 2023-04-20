import { Component } from "react";
import { Card } from "react-bootstrap";

class CityImage extends Component{

    render(){
        return(
            <>
            
            
            {
                this.props.allmovieData.map((movies)=>(
                    
                    <>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={movies.image} />
                        <Card.Title>{movies.title}</Card.Title>
                        <Card.Text>
                            {movies.overview}
                        </Card.Text>
                    </Card>


                        {/* <Carousel.Item key={movies.id}>
                            <img
                            className="d-block w-100"
                            src={movies.image}
                            alt={movies.title}
                        />
                            <Carousel.Caption>
                            <h3>{movies.title}</h3>
                            <p>{movies.overview}</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </>
                ))
            }
        {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={this.props.movieData.imageUrl}
                    alt={this.props.movieData.title}
                    />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
    </Carousel> */}
    </>
        )
    }
}

export default CityImage;