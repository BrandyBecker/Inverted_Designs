import './App.css';
import Nav from './components/nav/nav'
import Home from './components/home/home'
import { Route } from "react-router-dom"; 
import BottomNav from './components/bottomnav/bottomnav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' component={Home} />
      <BottomNav/>
    </div>
  );
}

export default App;
