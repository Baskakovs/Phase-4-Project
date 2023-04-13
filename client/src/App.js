import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import MyReviews from './Components/MyReviews';
import NewBook from './Components/NewBook';
import './App.css';
export const AppContext = createContext()

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

  const hi = 'hi'

  return (
    <>
    <Router>
    <Nav />
      <Switch>
        <Route exact path="/">
          <AppContext.Provider value={{data, hi}}>
            <BookListPage />
          </AppContext.Provider>
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
