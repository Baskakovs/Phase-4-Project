import {useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react'
import {AppContext} from '../App'

import ReviewCard from './ReviewCard';
function Book(){
    const params = useParams()
    const {data} = useContext(AppContext)
    const [book, setBook] = useState("")
    useEffect(() => {
        if(Array.isArray(data)){
            const book = data.find((book) => 
            parseInt(book.id) === parseInt(params.id))
            setBook(book)
        }
    }, [data])
    console.log(data)
    return(
        <>
        {/* <div className="container-book text-center w-100">
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p><i>{book.author}</i></p>
        </div> */}
        <div className="container-reviews">
            <ReviewCard/>
        </div>

        </>
    )
}
export default Book;