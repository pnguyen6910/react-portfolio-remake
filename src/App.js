import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Nav from "./components/nav"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Portfolio from "./pages/portfolio"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
