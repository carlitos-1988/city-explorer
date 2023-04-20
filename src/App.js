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
    
    <Header  className="App-header"/>
    <Main className="flex-items"/>
    {/* <Weather className="flex-items"/> */}
    <Footer className="flex-items"/>
    
    </div>
    </Container>
  );
}

export default App;
