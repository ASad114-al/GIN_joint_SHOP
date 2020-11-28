import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
  import Navigtion from './Components/Navigation';
 import Home from './Components/Home_page'
 import Contact from './Components/Contact'
 import Shop from './Components/Shop'


function App() {
  return (

    <Router>
     <Navigtion />
      <Switch>
      
      <Route path="/" exact  > <Home/>  </Route>
      <Route path = "/Entertainment" > </Route>
      <Route path = "/Shop"  > <Shop/> </Route>
      <Route path = "/Events"  >   </Route>
      <Route path = "/Contact"   >  <Contact/></Route>
      </Switch>
      
      
    

      

      
     
   
   
 
    
    



      
    </Router>
  
  );
}

export default App;