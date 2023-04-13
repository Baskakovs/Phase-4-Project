import {NavLink} from 'react-router-dom'
function Nav({handleLogout}){
    return (
        <>
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
        </>
    )
}
export default Nav