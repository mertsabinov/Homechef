import * as react from 'react'
import '../assets/styles/components/Navbar.css'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left-side'>
                <img src={logo} alt='logo' />
            </div>
            <div className='navbar-center-side' >
                <a href='#shop'>Shop</a>
                <a href='#features'>Features</a>
                <a href='#recipes'>Recipes</a>
                <a href='#hotline' >Hotline</a>
            </div>
            <div className='navbar-right-side' >
                <button id='btn-login'>
                    Login
                </button>
                <button id='btn-sign-up'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar