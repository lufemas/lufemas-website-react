import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainNav from './components/MainNav'
import LastArticlesNav from './components/LastArticlesNav'
import Article from './components/Article'
import TimeBuddy from './components/static/TimeBuddy';


import './css/App.css';
// import './css/skeleton.css'
import './css/jr-style.css'
import OtherGames from './components/static/OtherGames';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {

  return (
    <Router>

    <div className="App jr mt-15">
      <section className="jr flex-row">
       < MainNav/>

      <article className="jr col-8 pl-1 pr-1">

      <Switch>
          <Route path="/about">
          </Route>
          <Route path="/article/:number">
            <Article/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/timebuddy'>
            <TimeBuddy/>
          </Route>
          <Route path='/othergames'>
            <OtherGames/>
          </Route>

      </Switch>


      </article>
      <LastArticlesNav/>


      </section>

    </div>
    <Footer/>
    </Router>
  );
}

export default App;
