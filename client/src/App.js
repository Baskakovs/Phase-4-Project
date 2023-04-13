import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
    <Nav />
      <Switch>
        <Route exact path="/">
          <BookListPage />
        </Route>
        <Route path="/my_books">
          <MyBooksList />
        </Route>
      </Switch>
    </Router>
    </>
  );
};
export default App;
