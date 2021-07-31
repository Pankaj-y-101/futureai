import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Navbar from './component/Navbar';
import OurTeam from './component/OurTeam';
import ContactUs from './component/ContactUs'; 
import Newsletter from './component/Newsletter'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Services}></Route>
        <Route exact path="/OurTeam" component={OurTeam}></Route>
        <Route exact path="/ContactUs" component={ContactUs}></Route>
        <Route exact path="/Newsletter" component={Newsletter}></Route>
        <Redirect to="/" />
      </Switch>
    </div>  
  );
}

export default App;
