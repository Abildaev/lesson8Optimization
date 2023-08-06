import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthProvider";


function NavBar() {
    const navigate = useNavigate()

    const auth = useAuth()


    function logout () {

        auth.signOut(() => navigate("/login", {replace: true}))
    }

    return (
        <ul style={
            {listStyleType: "none",
                display: "flex",
                justifyContent: "space-around",
                background: 'gray',
                padding: "20px"
            }}>
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Main</NavLink>
            </li>
            <li>
                <NavLink
                    to="/characters"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Characters</NavLink>
            </li>
            <li>
                <NavLink
                    to="/episodes"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Episodes</NavLink>
            </li>
            <li>
                <NavLink
                    to="/locations"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Locations</NavLink>
            </li>


            <li>
                <button onClick={logout}>Logout</button>
            </li>

        </ul>
    );
}

export default NavBar;