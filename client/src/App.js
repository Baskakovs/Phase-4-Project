import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import MyReviews from './Components/MyReviews';
import NewBook from './Components/NewBook';
import './App.css';
import Login from './Components/Login'
import Book from './Components/Book'
export const AppContext = createContext()
export const LoginContext = createContext()

const App = () => {

  const history = useHistory()
  
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

  const [currentUser, setCurrentUer] = useState()

  function handleLogin(user){
    setCurrentUer(user)

  }

  //MANAGING LOGOUT
  //==============
  function logoutCurrentUser(){
    setCurrentUer(null)
    history.push("/")
  }

  //MANAGING NEW BOOKS
  //==================
  function handleNewBook(newBook){
    console.log(newBook, "new book")
    setData([...data, newBook])
  }

  //SETTING USER BOOKS
  //==================
  const [userBooks, setUserBooks] = useState([])
  useEffect(() => {
    if(currentUser){
      let newUserBooks = []
      data.filter(book => {
        if(book.user_id == currentUser.id){
          newUserBooks.push(book)
        }
      })
      setUserBooks(newUserBooks)
    }
  }, [data, currentUser])

  return (
    <>
    <Router>
    <AppContext.Provider 
    value={{data, handleLogin, logoutCurrentUser, currentUser, 
    handleNewBook, userBooks}}
    >
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
          value={{handleLogin}}>
            <Login/>
          </LoginContext.Provider>
        </Route>
        <Route path="/books/:id">
          <Book/>
        </Route>
      </Switch>
    </AppContext.Provider>
    </Router>
    </>
  );
};
export default App;
