import React from 'react'
import img from '../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";



const Navbar = () => {
  return (
    <>
    <div>
        <div>
            <img src={img} alt="Logo" />
        </div>
        <div>
            <div><IoLocationOutline /></div>
            <div>
                <ul>
                    <li>Delivere to</li>
                    <li>Pakistan</li>
                </ul>
            </div>
        </div>
        <div>
            <div>All<IoMdArrowDropdown /></div>
            <div><input type="text"  placeholder='Search Here'/></div>
            <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </>
  )
}

export default Navbar