import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import BookListPage from './Components/BookListPage';
import Nav from './Components/Nav';
import MyBooksList from './Components/MyBooks';
import MyReviews from './Components/MyReviews';
import NewBook from './Components/NewBook';
import './App.css';
import Login from './Components/Login'
import Book from './Components/Book'
import BookEdit from './Components/BookEdit'
import Errors from './Components/Errors';
export const AppContext = createContext()
export const LoginContext = createContext()

const App = () => {

  const history = useHistory()
  const [errors, setErrors] = useState([])
  
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
        r.json().then((errors) => {setErrors(errors)})
      }
    })
  }, [])

  //MANAGING LOGIN
  //==============

  const [currentUser, setCurrentUer] = useState()

  function handleLogin(user){
    setCurrentUer(user)
  }

  //MANAGING NEW BOOKS
  //==================
  function handleNewBook(newBook){
    setData([...data, newBook])
  }

  //SETTING USER BOOKS
  //==================
  const [userBooks, setUserBooks] = useState([])
  useEffect(() => {
    if(currentUser && Array.isArray(data)){
      let newUserBooks = []
      data.filter(book => {
        if(book.user_id == currentUser.id){
          newUserBooks.push(book)
        }
      })
      setUserBooks(newUserBooks)
    }
  }, [data, currentUser])

  function handleNewReveiwList(e){
    setData(data.map(book => {
      if(book.id == e.book.id){
        return {...book, reviews: [...book.reviews, e]}
      }else{
        return book
      }
    }))
  }

function handleEditBook(book){
  let newBookList = data.map((b)=>{
    if(b.id === book.id){
      return book
    }else{
      return b
    }
  })
  setData(newBookList)
}

function handleDeleteBook(book){
  let newBookList = data.filter((b)=>{
    if(b.id == book.id){
      return null
    }else{
      return book
    }
  })
  setData(newBookList)
}

  return (
    <>
    <Router>
    <AppContext.Provider 
    value={{data, handleLogin, currentUser, setCurrentUer,
    handleNewBook, userBooks, handleNewReveiwList, handleEditBook, 
    handleDeleteBook}}
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
        <Route path="/book_edit/:id">
          <BookEdit/>
        </Route>
      </Switch>
    </AppContext.Provider>
    </Router>
    </>
  );
};
export default App;
