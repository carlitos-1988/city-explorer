import { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {
    // constructor(props){
    //   super(props)
    // }
    render(){
        return(
            <Navbar bg="dark">
            <Container>
              <Navbar.Brand href="#home">
               My Sample Header
              </Navbar.Brand>
            </Container>
          </Navbar>
        )
    }
}

// export default Header