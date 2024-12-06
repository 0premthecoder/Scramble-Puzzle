import React from 'react'
import { Outlet, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <ul style={{display: "flex",alignItems: "center", justifyContent: "center" ,gap: "24px"}}>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-black"
                    }
                >
                    Game
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-black"
                    }
                >
                    About Me
                </NavLink>

                <NavLink to="/post">Posts</NavLink>
            </ul>
            <Outlet />
        </>
    )
}

export default Navbar