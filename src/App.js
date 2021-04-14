import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Nav from "./components/nav"

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
