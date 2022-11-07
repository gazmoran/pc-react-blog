import './theme-css/theme.min.css';
import { Header, Body, Footer } from './components/common';
import {Button, Card, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
