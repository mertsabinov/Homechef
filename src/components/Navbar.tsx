import * as react from 'react'
import '../assets/styles/components/Navbar.css'
import logo from '../assets/images/logo.svg'
import {useState} from 'react'
const Navbar = () => {
    const [active,setActive] = useState<boolean>(false)

    const activeHandler = (active:boolean) => {
        if (active){
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <div>
            <div
                data-testid='hamburger-menu'
                className={`${active ? "hamburger-menu-open":"hamburger-menu"}`}
                onClick={() => activeHandler(active)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={`${active ? "navbar-open":"navbar"}`}
                 data-testid='navbar'
            >
                <div
                    className={`${active ? "navbar-left-side-open":"navbar-left-side"}`}
                    data-testid='navbar-left-side'
                >
                    <img src={logo} alt='logo' />
                </div>
                <div
                    className={`${active ? "navbar-center-side-open":"navbar-center-side"}`}
                    data-testid='navbar-center-side'
                >
                    <a href='#shop'>Shop</a>
                    <a href='#features'>Features</a>
                    <a href='#recipes'>Recipes</a>
                    <a href='#hotline' >Hotline</a>
                </div>
                <div
                    className={`${active ? "navbar-right-side-open":"navbar-right-side"}`}
                    data-testid='navbar-right-side'
                >
                    <button id='btn-login'>
                        Login
                    </button>
                    <button id='btn-sign-up'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Navbar