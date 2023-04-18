import {useState, useContext, useEffect} from 'react'
import {AppContext} from '../App'
import { useHistory } from 'react-router-dom'
function NewBook(){
    const history = useHistory()
    const {currentUser, handleNewBook} = useContext(AppContext)
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
        setForm({...form, user_id: currentUser.id})
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
            console.log("0")
            if(r.ok){
                r.json().then(data => {
                    handleNewBook(data)
                    history.push("/")
                })
            }else{
                console.log("Error")
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
        </>
    )
}
export default NewBook