import BookCard from "./BookCard"
import {useContext, useState, useEffect} from 'react'
import {AppContext} from '../App'
import MyReviewCard from './MyReviewCard'
function MyReviewsList(){
const {data, currentUser} = useContext(AppContext)

const [myReviews, setMyReviews] = useState([])

useEffect(() => {
    if(currentUser && Array.isArray(data)){
        let reviews = []
        data.filter(book => {
            book.reviews.filter(review => {
                if(review.user.id == currentUser.id){
                    return reviews.push(review)
                }
            })
        })
        setMyReviews(reviews)
    }
}, [data])

return (
    <>
    <div className="container-reviews">
        {currentUser ? <h1>My Reviews</h1> : <h1>Please login!</h1>}
    {
    Array.isArray(myReviews) &&
    myReviews.map((review, index) => {
        return <MyReviewCard key={index} review={review}/>
    })
    }
    </div>
    </>
)
}
export default  MyReviewsList
