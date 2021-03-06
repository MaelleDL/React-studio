import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

import GlobalStyle from './components/GlobalStyle';


const App = () => {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/React-studio/" exact>
            <AboutUs />
          </Route>
          <Route path="/React-studio/work" exact>
            <OurWork />
          </Route>
          <Route path="/React-studio/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/React-studio/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
