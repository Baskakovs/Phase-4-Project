import {NavLink} from 'react-router-dom'
import BookCard from "./BookCard"
import {useContext} from 'react'
import {AppContext} from '../App'
import MyBookCard from './MyBookCard'
function MyBooksList(){
const {userBooks} = useContext(AppContext)
console.log(userBooks, "user books")
return (
    <>
    <div className="container-tabs">
        {
            Array.isArray(userBooks) && userBooks.length > 0 ?
            userBooks.map((book) => {
                return <MyBookCard book={book}/>
            }
            )
            :
            <div className="text-center">
                <h1 className="mt-7">You have no books</h1>
            </div>
        }
        <NavLink to={`/new_book`}>
            <div className="text-center">
                <button className="btn-purple m-a mt-7 m-a w-90">
                    +
                </button>
            </div>
        </NavLink>
    </div>

    </>
)
}
export default  MyBooksList