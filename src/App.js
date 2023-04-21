import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header.js'
import Main from './components/Main';
import Footer from './components/Footer.js'

function App() {
  return (
    <Container className='App'>
    <div className="App">
    
    <Header  className="header"/>
    <Main />
    <Footer />
    </div>
    </Container>
  );
}

export default App;
