import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import MyReviews from './Components/MyReviews';
import NewBook from './Components/NewBook';
import './App.css';
import Login from './Components/Login'
export const AppContext = createContext()
export const LoginContext = createContext()

const App = () => {

  //FETCHING DATA FROM BACK-END
  //===========================
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

  //MANAGING LOGIN
  //==============

  const [currentUser, setCurrentUer] = useState(null)
  function handleSetCurrentUser(user){
    setCurrentUer(user)
  }

  useEffect(() => {
    console.log("1")
    console.log(currentUser)
  }, [currentUser])


  return (
    <>
    <Router>
    <AppContext.Provider value={{data, currentUser, handleSetCurrentUser}}>
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
        <Route exact path="/login">
          <LoginContext.Provider 
          value={{handleSetCurrentUser}}>
            <Login/>
          </LoginContext.Provider>
        </Route>
      </Switch>
    </AppContext.Provider>
    </Router>
    </>
  );
};
export default App;
