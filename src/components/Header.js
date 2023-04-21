import { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {
    // constructor(props){
    //   super(props)
    // }
    render(){
        return(
            <Navbar className='mybody'>
            <Container>
              <Navbar.Brand href="#home">
               Welcome
              </Navbar.Brand>
            </Container>
          </Navbar>
        )
    }
}