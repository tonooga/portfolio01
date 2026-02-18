import React from 'react'
// import logo from '../assets/react.svg'
// import logo from '../assets/foto_JO_2.jpeg'
import logo from '../assets/techquipu_icon2.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
//   const { id } = useParams()
  const linkClass = ({ isActive }) => isActive ? 'bg-white text-black hover:bg-gray-200 hover:text-black rounded-md px-3 py-2' : 'text-black hover:bg-gray-200 hover:text-black rounded-md px-3 py-2'   
  return (
    <nav className="z-20 bg-white border-b fixed top-0 right-0 left-0">
        {/* <div className="max-w-[1056px] mx-auto max-w-7xl px-2 sm:px-3 lg:px-3"> */}
        {/* <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-3"> */}
        <div className="max-w-5xl mx-auto px-6">
            <div className="py-4 flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4"
                to="/">
                <img className="h-10 w-auto"
                src={logo}
                alt="photo_thumb"
                />
                <span className="hidden md:block text-black text-2xl font-bold ml-2">J.Antonio OGA - Mech.Eng., MBA, MSc </span>
            </NavLink>
            <div className="md:ml-auto">
                <div className="flex space-x-2">
                <NavLink
                    to="/"
                    className= { linkClass }
                    >Home
                </NavLink >
                <NavLink
                    to="/projects"
                    className= { linkClass }
                    >Projects
                </NavLink>
                <NavLink
                    to="/articles"
                    className= { linkClass }
                    >Articles
                </NavLink>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar