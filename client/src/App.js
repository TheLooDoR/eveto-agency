import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.scss';
import HomePage from './pages/HomePage';
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./shared/scrollToTop/ScrollToTop";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ScrollUpButton from "react-scroll-up-button";
import ScrollButton from "./shared/Buttons/ScrollButton/ScrollButton";

function App() {
  return (
      <ScrollToTop>
          <ScrollUpButton
              ContainerClassName='ScrollUpButton__container'
              TransitionClassName='ScrollUpButton__transition'
              EasingType="easeInQuad"
          >
              <ScrollButton/>
          </ScrollUpButton>
          <Switch>
              <Route
                  path='/'
                  exact
                  component={HomePage}
              />
              <Route
                  path='/projects'
                  component={ProjectsPage}
              />
          </Switch>
      </ScrollToTop>
  );
}

export default App;
