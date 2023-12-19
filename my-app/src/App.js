import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import CustomButton from './Component/Button/Button';
// import BasicCard from './Component/Card/Card';
// import ListProduct from './Component/Product/List';
import Header from './Layout/HeaderPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import List from './Component/Product/List'
// import CardItem from './Component/Card/CardItem.jsx'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello !</h1>
      <BasicCard />
      <CustomButton /> */}
      {/* <ListProduct/> */}
      <Router>
        <Header />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/contact"><Contact/></Route>
            <Route exact path="/list"><List/></Route>
            {/* <Route exact path="/CardItem"><List/></Route> */}
           
        </Switch>
      </Router>
    </div>
  );
}
export default App;
