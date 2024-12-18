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
                    Study Revison
                </NavLink>
                    <NavLink to="game" >Game</NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-black"
                    }
                >
                    About Me
                </NavLink>

                <NavLink to="/post">Posts</NavLink>
                <NavLink to="/pomodora">Pomodora</NavLink>
                <NavLink to="/c">Counter</NavLink>
                <NavLink to="/todo">Todos</NavLink>

            </ul>
            <Outlet />
            <hr />
        </>
    )
}

export default Navbar