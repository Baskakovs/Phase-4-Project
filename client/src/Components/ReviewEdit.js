import { useContext, useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { AppContext } from "../App"
import Errors from "./Errors"

function ReviewEdit(){
    const history = useHistory()
    const { currentUser, data, handleEditReview, handleDeleteReview} = useContext(AppContext)
    const [errors, setErrors] = useState("")
    const params = useParams()

    const [form, setForm] = useState({
        title: "",
        text: "",
        id: "",
    })

    console.log(errors)

    useEffect(() => {
        if(currentUser && Array.isArray(data)){
            data.filter(book => {
                book.reviews.filter(review => {
                    if(review.id == params.id){
                        setForm({
                            title: review.title,
                            text: review.text,
                            id: review.id,
                            book_id: book.id,
                            user_id: currentUser.id
                        })
                    }
                })
            })
        }
    }, [data])

    function handleChange(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    function handleUpdate(e){
        e.preventDefault()
        fetch(`/reviews/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(r => {
            if(r.ok){
                r.json().then(review => {
                    handleEditReview(review) //Change here
                    history.push("/my_reviews")
                })
            }else{
                r.json().then(errors => {
                    setErrors(errors)
                })
            }
        })
    }

    function handleDelete(){
        fetch(`/reviews/${params.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if(r.ok){
                handleDeleteReview(form)
                history.push("/my_reviews")
            }
        })
    }

    return(
        <>
        {
            !currentUser ? (history.push("/login")) :
            (
                <div className="container">
                    <form className="form" onSubmit={handleUpdate}>
                        <div className="container justify-content-center">
                            <div className="container one-col col-gap-7">
                                <input
                                name="title"
                                type="text"
                                placeholder="Title"
                                value={form.title}
                                onChange={handleChange}
                                />
                                <input
                                name="text"
                                type="text"
                                value={form.text}
                                placeholder="Description"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className="btn-purple">Update</button>   
                    </form>
                    <button className="btn-split" onClick={handleDelete}>Delete</button>
                    <Errors errors={errors.errors}/>
                </div>
            )
        }
        </>
    )
}
export default ReviewEdit