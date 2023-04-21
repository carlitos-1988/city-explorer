import { Component } from "react";
import { Card } from "react-bootstrap";

class CityImage extends Component{

    myRandomKey=()=> Math.random(300);

    render(){
        return(
            <>
            {
                this.props.allmovieData.map((movies)=>(
                    
                    <>
                    <Card style={{ width: '30rem' }} key={this.myRandomKey()}>
                        <Card.Img variant="top" alt="did not Load" src={movies.image && movies.image.includes('null') ? "./public/placeHolder.png": movies.image}/>
                        <Card.Title>{movies.title}</Card.Title>
                        <Card.Text>
                            {movies.overview}
                        </Card.Text>
                    </Card>
                    </>
                ))
            }
    </>
        )
    }
}

export default CityImage;