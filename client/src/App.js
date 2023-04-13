import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import MyReviews from './Components/MyReviews';
import NewBook from './Components/NewBook';
import './App.css';

const App = () => {
  const [data, setData] = useState("null")
  useEffect(() => {
    fetch('/books', 
    {
      method: 'GET',
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {setData(data)})
      }else{
        console.log("Error")
      }
    })
  }, [])
  console.log(data)

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
        <Route path="/my_reviews">
          <MyReviews />
        </Route>
        <Route path="/new_book">
          <NewBook />
        </Route>
      </Switch>
    </Router>
    </>
  );
};
export default App;
