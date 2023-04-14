function BookCard({book}){
    return(
        <>
        <div class="card-book">
            <div class="container-book">
                <h4><b>{book.title}</b></h4>
                <p>{book.description}</p>
                <p>{book.author}</p>
            </div>
        </div>
        </>
    )
}
export default BookCard