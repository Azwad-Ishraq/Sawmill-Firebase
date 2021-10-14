
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Navbar from './components/Nabvar/Navbar';
import Notfound from './components/Notfound/Notfound';
import Pricing from './components/Pricing/Pricing';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider'
import initializeAuthentication from './Firebase/Firebase.initi';

initializeAuthentication()
function App() {
  
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>

<Navbar></Navbar>


 

<Switch>


  <Route exact path='/'>
  <Header></Header>
  </Route>


  <Route path='/home'>
  <Header></Header>
  </Route>

  <Route path='/about'>
  <About></About>
  </Route>

  <Route path='/pricing'>
  <Pricing></Pricing>
  </Route>


  <Route path='/login'>
 <Login></Login>
  </Route>


  <Route path='/faq'>
 <Faq></Faq>
  </Route>

  <PrivateRoute path='/contact'>
 <Contact></Contact>
  </PrivateRoute>

  <Route path='/register'>
<Register></Register>
  </Route>

  <PrivateRoute path='/profile'>
<Profile></Profile>
  </PrivateRoute>


  <Route path='*'>
<Notfound></Notfound>
  </Route>


</Switch>



</BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
