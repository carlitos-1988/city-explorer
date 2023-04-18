import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header.js'
import Main from './components/Main';
import Footer from './components/Footer.js'

function App() {
  return (
    <Container className="mybody">
    <div className="App">
    
    <Header Fluid className="d-flex justify-content-center align-items-center vh-100" />
    <Main Fluid className="d-flex justify-content-center align-items-center vh-100"/>
    <Footer />
    
    </div>
    </Container>
  );
}

export default App;
