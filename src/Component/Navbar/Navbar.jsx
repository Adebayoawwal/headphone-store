import React from 'react'
const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"#",
    },
    {
        id:2,
        title:"About",
        link:"#",
    },
    {
        id:3,
        title:"Categories",
        link:"#",
    },
    {
        id:4,
        title:"Blog",
        link:"#",
    },
    {
        id:5,
        title:"Contact",
        link:"#",
    },


]

const Navbar = () => {
  
  return (
    <nav >
        <div>
            <a href="#">
                Playing / <span>Market</span>
            </a>
        </div>
        <div>
            <ul>
                {
                    NavbarMenu.map((item) = (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar