import { useContext, useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { AppContext } from "../App"
import Errors from "./Errors"

function BookEdit() {
  const history = useHistory()
  const { data, currentUser, handleEditBook, handleDeleteBook } = useContext(AppContext)
  const [errors, setErrors] = useState([])
  const params = useParams()
  const [book2, setBook] = useState(null)

  useEffect(() => {
    if (Array.isArray(data)) {
      const filteredBooks = data.filter((book) => {
        return book.id == params.id;
      });
      if (filteredBooks.length > 0) {
        setBook({
          title: filteredBooks[0].title,
          description: filteredBooks[0].description,
          author: filteredBooks[0].author,
          id: filteredBooks[0].id,
        });
      }
    }
  }, [data]);

  function handleChange(e) {
    const { name, value } = e.target
    setBook(prevBook => ({ ...prevBook, [name]: value }))
  }

  function addUserId() {
    if (currentUser && book2) {
      setBook(prevBook => ({ ...prevBook, user_id: currentUser.id }))
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    addUserId()
    fetch(`/books/${book2.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book2)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            handleEditBook(data)
            history.push("/my_books")
          })
        } else {
          r.json().then(errors => {
            setErrors(errors)
          })
        }
      })
  }

function handleDelete(e) {
    e.preventDefault(
        fetch(`/books/${book2.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.status === 204) {
                handleDeleteBook(book2)
                history.push("/my_books")
            } else {
                r.json().then(errors => {
                    setErrors(errors)
                })
            }
        })
    )
}

  if (!book2) {
    return <div>Loading...</div>
  }

  return (
    <>
      {!currentUser ? (
        history.push("/login")
      ) : (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="title"
              type="text"
              className="book-title"
              placeholder="Book Title"
              value={book2.title}
              onChange={handleChange}
              autoFocus
            />
            <div className="container justify-content-center">
              <div className="container one-col col-gap-7">
                <input
                  name="author"
                  type="text"
                  placeholder="Author"
                  value={book2.author}
                  onChange={handleChange}
                />
                <input
                  name="description"
                  type="text"
                  value={book2.description}
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn-purple">Add</button>
          </form>
          <button className="btn-underline" onClick=
          {handleDelete}>Delete</button>
          <Errors />
        </div>
      )}
    </>
    )
}
export default BookEdit