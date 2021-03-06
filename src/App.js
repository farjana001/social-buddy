import React from 'react';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home'>
          <Posts />
        </Route>
        <Route path='/post/:id'>
          <PostDetails />
        </Route>
        <Route path='/comment/:commentId'>
          <PostDetails />
        </Route>
        <Route exact path='/'>
          <Posts />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
