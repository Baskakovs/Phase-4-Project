import { NavLink } from 'react-router-dom'
function MyBookCard({book}){
    return(
        <>
        <div className="card-book">
            <div className="container-book">
                <h4><b>{book.title}</b></h4>
                <p>{book.description}</p>
                <p>{book.author}</p>
            </div>
            <NavLink to={`/book_edit/${book.id}`}>
                <button className="btn-underline">Edit</button>
            </NavLink>
        </div>
        </>
    )
}
export default MyBookCard