import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store ,perssistor} from './utiles/reduxConfig'
import Home from './pages/home'
import Profile from './pages/PrivatePage'
import Forum from './pages/fourm'
import UpdateForum from './pages/updatearticle'
import Login from './pages/login'
import Register from './pages/register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return <Provider store={store}>
    <PersistGate persistor={perssistor}>
    <Router>
        <Switch>
          <Route exact path="/">
          <Home />

          </Route>
          <Route  path="/profile">
            <Profile />
          </Route>
          <Route  path="/forum">
            <Forum />
          </Route>
          <Route  path="/update/forum">
            <UpdateForum />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          
          <Route  path="/register">
            <Register />
          </Route>
          
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
}

export default App;
