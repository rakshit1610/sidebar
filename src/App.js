import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  return (
    <Router>
    <Switch>
    <Projects path="/viewprojects" />
      <Sidebar>
      <Switch>
      <Home exact path="/" />
    </Switch>
    </Sidebar>

    </Switch>
    </Router>
  );
}

export default App;
