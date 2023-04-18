function ReviewCard({review}){
    return(
        <>
        <div className="card-review">
            <div className="container-review">
                <h4><b>{review.title}</b></h4>
                {/* <p><i>{review.user.name}</i></p> */}
                <p>{review.text}</p>
            </div>
        </div>
        </>
    )
}
export default ReviewCard