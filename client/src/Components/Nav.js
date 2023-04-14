import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'
function Nav({handleLogout}){
    const {currentUser, logoutCurrentUser} = useContext(AppContext)

    function handleLogout(e){
        e.preventDefault()
        fetch('/logout', {
            method: "DELETE"
        })
        .then(res => {
            if(res.status == 204){
                logoutCurrentUser()
            }else{
                alert("Something went wrong")
            }
        })
    }
    return (
        <>
        {!currentUser ? 
        <ul className="ul-nav">
            <NavLink to="/login">
            <li className="nav-li">
            <button className={"btn-purple"}>
                Login
            </button>
            </li>
            </NavLink>
        </ul>
        :
        <ul className="ul-nav">
            <li className="nav-li">
            <button className={"btn-purple"} onClick=
            {handleLogout}>Logout</button>
            </li>
            <NavLink to="/my_books">
            <li className="nav-li">
                <button className={"btn-nav"} onClick=
                {handleLogout}>My Books</button>
            </li>
            </NavLink>
            <NavLink to="/my_reviews">
            <li className="nav-li">
                <button className={"btn-nav"} onClick=
                {handleLogout}>My Reviews</button>
            </li>
            </NavLink>
            <NavLink to="/">
            <li className="nav-li">
                <button className={"btn-nav"} onClick=
                {handleLogout}>Home</button>
            </li>
            </NavLink>
        </ul>
        }
        </>
    )
}
export default Nav