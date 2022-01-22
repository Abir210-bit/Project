import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"


const Header = (props) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)

    return (
        <div>
            {isAuth ? 
                (
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li ><Link to="/profile">Profile</Link></li>
                            <li><Link to="/register">ADD </Link></li>
                            <li><Link to="/Modify">Modify</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/affectation">Affectation</Link></li>
                            <form class="form-inline my-1 my-lg-0">
                             <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                            </form>
                             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </ul>
                     
                </nav>
            ) : (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                           </ul>
                    
                </nav>
            )
            }
        </div>
    )
}

export default Header
