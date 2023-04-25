import BookCard from "./BookCard"
import {useContext, useState, useEffect} from 'react'
import {AppContext} from '../App'
import MyReviewCard from './MyReviewCard'
function MyReviewsList(){
const {data, currentUser} = useContext(AppContext)

const [myReviews, setMyReviews] = useState([])

useEffect(() => {
    if(Array.isArray(data)){
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
        <h1>My Reviews</h1>
    {
    Array.isArray(myReviews) &&
    myReviews.map(review => {
        return <MyReviewCard review={review}/>
    })
    }
    </div>
    </>
)
}
export default  MyReviewsList
