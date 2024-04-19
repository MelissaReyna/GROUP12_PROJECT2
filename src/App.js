import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Program from "./components/sections/Program";
import Choose from "./components/sections/Choose";
import Pricing from "./components/sections/Pricing";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/program' component={Program} />
        <Route path='/choose' component={Choose} />
        <Route path='/pricing' component={Pricing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
