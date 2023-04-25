import {useState, useContext, useEffect} from 'react'
import {AppContext} from '../App'
import { useHistory } from 'react-router-dom'
import Login from './Login'
import Errors from './Errors'
function NewBook(){
    const history = useHistory()
    const {currentUser, handleNewBook} = useContext(AppContext)
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        title: "",
        description: "",
        author: "",
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    useEffect(() => {
        if(currentUser){
            setForm({...form, user_id: currentUser.id})
        }
    }, [currentUser])


    function handleSubmit(e){
        e.preventDefault()
        addUserId()
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    handleNewBook(data)
                    history.push("/")
                })
            }else{
                r.json().then(errors => {
                    setErrors(errors)
                })
            }
        })
    }

    function addUserId(){
        if(currentUser){
            setForm({...form, user_id: currentUser.id})
        }
    }
    
    return(
        <>
        {
        !currentUser ? (
            history.push("/login")
        )
        :
        (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input 
            name="title"
            type="text" 
            className="book-title" 
            placeholder="Book Title" 
            value={form.title}
            onChange={handleChange}
            autoFocus/>
            <div className="container justify-content-center">
                <div className="container one-col col-gap-7">        
                    <input 
                    name="author"
                    type="text" 
                    placeholder="Author"
                    value={form.author}
                    onChange={handleChange}
                    />
                    <input 
                    name="description"
                    type="text" 
                    value={form.description}
                    placeholder="Description"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <button className="btn-purple">Add</button>
        </form>
        <Errors />
        </>
        )
        }
        </>
    )
}
export default NewBook