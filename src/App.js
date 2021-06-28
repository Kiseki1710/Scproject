import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Body from './components/Body.js'
import Body1 from './components/Body1.js'
import Body2 from './components/Body2.js'
import Body3 from './components/Body3.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
    <Header />
    <Navbar />
    <Switch>
		<Route path='/' exact component={Body} />
		<Route path='/body1' component={Body1} />
		<Route path='/body2' component={Body2} />
    <Route path='/body3' component={Body3} />
	</Switch>
  <Footer />
    </ Router>
    </div>
  );
}

export default App;
