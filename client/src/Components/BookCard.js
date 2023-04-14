import { NavLink } from 'react-router-dom'
function BookCard({book}){
    return(
        <>
        <div className="card-book">
            <div className="container-book">
                <h4><b>{book.title}</b></h4>
                <p>{book.description}</p>
                <p>{book.author}</p>
            </div>
            <NavLink to={`/books/${book.id}`}>
                <button className="btn-underline">Read Reviews</button>
            </NavLink>
        </div>
        </>
    )
}
export default BookCard