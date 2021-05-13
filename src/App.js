import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Worldhome from "./components/world/Worldhome";
import About from "./components/About";
import Worldmap from "./components/world/Worldmap";
import Footer from './components/Footer';
// import Indiamap from "./components/Indiamap";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Chat from "./components/chat/Chat";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/indiamap" exact>
          <Indiamap />
        </Route> */}
        <Route path="/world" exact>
          <Worldhome />
        </Route>
        <Route path="/worldmap" exact>
          <Worldmap />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/chat" exact>
          <Chat/>
        </Route>
      </main>
    </Router>
    <div className="row">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
