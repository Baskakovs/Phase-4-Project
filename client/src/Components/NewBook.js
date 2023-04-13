import {useState} from 'react'
function NewBook(){
    const [form, setForm] = useState({
        title: "",
        author: "",
        description: ""
    })
    function handleChange(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
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