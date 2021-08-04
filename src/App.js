import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Pizza from './components/page/Pizza';
import Burger from './components/page/Burger';
import Salad from './components/page/Salad';
import Dessert from './components/page/Dessert';
import Address from './components/page/Address';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/pizza' exact component={Pizza} />
          <Route path='/burger' exact component={Burger} />
          <Route path='/salad' exact component={Salad} />
          <Route path='/dessert' exact component={Dessert} />
          <Route path='/address' exact component={Address} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
