import './App.css';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'mdbreact/dist/css/mdb.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Redirect} from "react-router-dom";
import Choose from './Footer/Choose';
import {Route} from 'react-router-dom';
import Home from './Header/Home';

function App() {
  return (
    <BrowserRouter>
    <span className="App">
      <div className = "Body">
      <Body></Body>
      </div>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path='/home' component={Home} />
      <Choose></Choose>
    <Footer></Footer>  
    </span>
    </BrowserRouter>
  );
}

export default App;
