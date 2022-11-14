import './theme-css/theme.min.css';
import { Header, Home, Footer } from './components/common';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/common/body/Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
        <Footer />
      </div>  
    </Router>
    
  );
}

export default App;
