import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  const [userBooks, setUserBooks] = useState([])
  function handleLogin(user){
    setCurrentUer(user)
    setUserBooks(user.books)
  }

  //MANAGING NEW BOOKS
  //==================
  function handleNewBook(newBook){
    setData([...data, newBook])
    setUserBooks([...userBooks, newBook])
  }

  //SETTING USER BOOKS AFTER DELETE
  //===============================

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
  //Updating userBooks after delete
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

  //MANAGING EDIT BOOKS
  //===================
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

  //MANAGING NEW REVIEWS
  //====================  

  function handleNewReveiwList(e){
    setData(data.map(book => {
      if(book.id == e.book.id){
        return {...book, reviews: [...book.reviews, e]}
      }else{
        return book
      }
    }))
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
    {
      errors.length > 0 ? <Errors errors={errors}/> : null
    }
    </>
  );
};
export default App;
