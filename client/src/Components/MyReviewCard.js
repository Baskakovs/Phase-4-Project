import { Link } from 'react-router-dom'
function MyReviewCard({review}){
    function standardTime(){
        let time = review.created_at
        let date = time.slice(0,10)
        let timeOnly = time.slice(11,16)
        return `${date}`
    }

    return(
        <>

        <Link to={`/edit_review/${review.id}`}>
        <div className="card-review">
            <div className="container-review">
                <h4><b>{review.title}</b></h4>
                <p>{review.text}</p>
                <p><i>{`Created at: ${standardTime(review.created_at)}`}</i></p>
            </div>
        </div>
        </Link>
        </>
    )
}
export default MyReviewCard
