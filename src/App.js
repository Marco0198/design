import './App.css';
import NavigationBar from './components/NavigationBar';
import Catalogue from './pages/Catalogue';
//import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
  <>
      <Router>
      <section className="container">
       
        {routes}
      </section>
     
    </Router>
 {/* <HomePage/> */}



  </>

  );
}

export default App;
