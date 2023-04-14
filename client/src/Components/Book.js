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
        
    return(
        <>
        <div className="container-reviews">
            {!Array.isArray(book.reviews) ? null :
            book.reviews.map((review) =>
            <ReviewCard review={review} key={review.id}/>)
            }
            <div className='container one-col mt-7'>
                <input type="text" 
                placeholder="Title" 
                className="no-border text-bold text-large"
                autoFocus
                />
                <textarea 
                type="text" 
                placeholder="What did you think of this book?" 
                className="new-review-input"/>
                <button className="btn-purple mt-7">Add Review</button>
            </div>
        </div>

        </>
    )
}
export default Book;