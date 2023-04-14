import {useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react'
import {AppContext} from '../App'

import ReviewCard from './ReviewCard';
function Book(){
    const params = useParams()
    const {data, currentUser} = useContext(AppContext)
    const [book, setBook] = useState("")
    useEffect(() => {
        if(Array.isArray(data)){
            const book = data.find((book) => 
            parseInt(book.id) === parseInt(params.id))
            setBook(book)
        }
    }, [data])

    //HANDLING NEW REVIEW
    //===================
    const [newReview, setNewReview] = useState(null)
    useEffect(() => {
        if(currentUser){
            const review = {
                title: "",
                text: "",
                user_id: currentUser.id,
                book_id: book.id
            }
            setNewReview(review)
        }else{
            return null
        }
    }, [currentUser, book])
    
    function handleNewReview(e){
        const {name, value} = e.target
        setNewReview({
            ...newReview, [name]: value
        })
    }

    console.log(newReview)

    function handleSubmit(e){
        e.preventDefault()
        fetch('/reviews',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        })
        .then(res => {
            if(res.ok){
                res.json().then( e => {
                    console.log(e)})
            }
        })
    }
            
     
    return(
        <>
        <div className="container-reviews">
            {!Array.isArray(book.reviews) ? null :
            book.reviews.map((review) =>
            <ReviewCard review={review} key={review.id}/>)
            }
            {
                !currentUser ? null :
                <form className='container one-col mt-7' 
                onSubmit={handleSubmit}>
                    <input type="text" 
                    name="title"
                    placeholder="Title" 
                    className="no-border text-bold text-large"
                    onChange={handleNewReview}
                    autoFocus
                    />
                    <textarea 
                    type="text" 
                    name="text"
                    placeholder="What did you think of this book?" 
                    onChange={handleNewReview}
                    className="new-review-input"/>
                    <button className="btn-purple mt-7">Add Review</button>
                </form>
            }

        </div>

        </>
    )
}
export default Book;