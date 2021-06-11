import logo from './logo.svg';
import './App.css';
//Data
import trips from "./trips"
//Components
import Home from "./component/Home"
import TripsList from "./component/TripsList"
import TripsDetail from "./component/TripsDetail"
import NavBar from "./component/NavBar"
import NotFound from "./component/NotFound"

import { Route , Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      
      <Switch>
      <Route exact path="/trips/:tripsSlug">
        <TripsDetail 
        trips={trips}/>
        </Route>
     <Route exact path="/trips">
     <TripsList trips={trips} />
     </Route>
     <Route exact path="/">
     <Home />
     </Route>
     
     <Route>
       <NotFound />
       </Route>
     </Switch>
     
    </div>
  );
}


export default App;
