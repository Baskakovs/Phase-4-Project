import {NavLink} from 'react-router-dom'
import BookCard from "./BookCard"
function MyBooksList(){
return (
    <>
    <div className="container-tabs">
        <BookCard />
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