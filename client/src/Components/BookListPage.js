import { useContext } from "react"
import { AppContext } from "../App"
import BookCard from "./BookCard"
function BookListPage(){
    const {data} = useContext(AppContext)
    console.log(data, "data")
return (
    <>
    <div className="container-tabs">
        <BookCard />
    </div>

    </>
)
}
export default  BookListPage