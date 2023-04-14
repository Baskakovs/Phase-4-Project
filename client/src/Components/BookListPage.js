import { useContext } from "react"
import { AppContext } from "../App"
import BookCard from "./BookCard"
function BookListPage(){
    const {data} = useContext(AppContext)
return (
    <>
    <div className="container-tabs">
        {!Array.isArray(data) ? null : data.map((book) => {
            return <BookCard book={book} key={book.id}/>
        })
        }
    </div>

    </>
)
}
export default  BookListPage