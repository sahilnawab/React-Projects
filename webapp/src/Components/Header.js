import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header(){

    return (
        <>
        <header className="sticky z-50 top-0 w-full bg-offwhite shadow-md p-4 ">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-purple-600 font-bold">
                 YOUR LOGO
                </div>
                <nav className="flex space-x-4">
                    <NavLink 
                        to="" 
                        className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-800"}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-800"}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/Project" 
                        className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-800"}
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-800"}
                    >
                        Contact
                    </NavLink>
                </nav>
               
                <div className="flex space-x-4">
                    <NavLink to="/login" className="px-4 py-2 ">
                        Log In
                    </NavLink>
                    <NavLink to="/register" className="bg-purple-600 text-white px-4 py-2 rounded-md">
                        Register
                    </NavLink>
                </div>
            </div>
        </header>
        
        </>
    )
} 