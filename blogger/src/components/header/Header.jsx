import React from 'react'
import {Container,Logo,LogoutBtn} from '../index.js'  
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Header() {
  
  const [open, setOpen] = useState(false);

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]
  return (
    

<header className="py-3 shadow bg-gray-500">
  <Container>
    <nav className="flex items-center justify-between">

      {/* Logo */}
      <div className="mr-4">
        <Link to="/">
          <Logo width="70px" />
        </Link>
      </div>

      {/* Hamburger Button (Mobile only) */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`
          flex flex-col sm:flex-row
          absolute sm:static
          top-16 left-0 w-full sm:w-auto
          bg-gray-500 sm:bg-transparent
          shadow sm:shadow-none
          items-center
          gap-2
          transition-all duration-300
          ${open ? "flex" : "hidden"} sm:flex
        `}
      >
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => {
                  navigate(item.slug);
                  setOpen(false);
                }}
                className="inline-block px-6 py-2 text-white
                           hover:bg-blue-100 hover:text-black
                           rounded-full whitespace-nowrap"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}

        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>

    </nav>
  </Container>
</header>

  )
}

export default Header;