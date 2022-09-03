import {screen, render} from "@testing-library/react";
import Navbar from '../Navbar'
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    render(<Navbar/>)
})

test("navbar logo",() => {
    const imgElement = screen.getByAltText("logo")
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', 'logo.svg');
})

test("navbar item Shop",() => {
    const navbarItem = screen.getByText("Shop")
    expect(navbarItem).toBeInTheDocument()
    expect(navbarItem).toHaveAttribute('href','#shop')
})

test("navbar item Features",() => {
    const navbarItem = screen.getByText("Features")
    expect(navbarItem).toBeInTheDocument()
    expect(navbarItem).toHaveAttribute('href','#features')
})

test("navbar item Recipes",() => {
    const navbarItem = screen.getByText("Recipes")
    expect(navbarItem).toBeInTheDocument()
    expect(navbarItem).toHaveAttribute('href','#recipes')
})

test("navbar item Hotline",() => {
    const navbarItem = screen.getByText("Hotline")
    expect(navbarItem).toBeInTheDocument()
    expect(navbarItem).toHaveAttribute('href','#hotline')
})

test("navbar login button",() => {
    const loginElement = screen.getByText("Login")
    expect(loginElement).toBeInTheDocument()
    expect(loginElement).toHaveAttribute("id","btn-login")
})

test("navbar sign up button",() => {
    const loginElement = screen.getByText("Sign Up")
    expect(loginElement).toBeInTheDocument()
    expect(loginElement).toHaveAttribute("id","btn-sign-up")
})

test("navbar hamburger menu",() => {
    const hamburgerElement = screen.getByTestId('hamburger-menu')
    expect(hamburgerElement).toBeInTheDocument()
    expect(hamburgerElement).toHaveClass('hamburger-menu')
    userEvent.click(hamburgerElement)
    expect(hamburgerElement).toHaveClass('hamburger-menu-open')
    userEvent.click(hamburgerElement)
    expect(hamburgerElement).toHaveClass('hamburger-menu')
})

test("navbar hamburger menu (navbar open)",() => {
    const hamburgerElement = screen.getByTestId('hamburger-menu')
    expect(hamburgerElement).toBeInTheDocument()
    const navbarElement = screen.getByTestId('navbar')
    expect(navbarElement).toBeInTheDocument()
    userEvent.click(hamburgerElement)
    expect(navbarElement).toHaveClass('navbar-open')
    userEvent.click(hamburgerElement)
    expect(navbarElement).toHaveClass('navbar')
})

test("navbar hamburger menu (navbar open left side)",() => {
    const hamburgerElement = screen.getByTestId('hamburger-menu')
    expect(hamburgerElement).toBeInTheDocument()
    const navbarLeftSideEelement = screen.getByTestId('navbar-left-side')
    expect(navbarLeftSideEelement).toBeInTheDocument()
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-left-side-open')
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-left-side')
})

test('navbar hamburger menu (navbar center side)',() => {
    const hamburgerElement = screen.getByTestId('hamburger-menu')
    expect(hamburgerElement).toBeInTheDocument()
    const navbarLeftSideEelement = screen.getByTestId('navbar-center-side')
    expect(navbarLeftSideEelement).toBeInTheDocument()
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-center-side-open')
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-center-side')
})

test('navbar hamburger menu (navbar right side)',() => {
    const hamburgerElement = screen.getByTestId('hamburger-menu')
    expect(hamburgerElement).toBeInTheDocument()
    const navbarLeftSideEelement = screen.getByTestId('navbar-right-side')
    expect(navbarLeftSideEelement).toBeInTheDocument()
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-right-side-open')
    userEvent.click(hamburgerElement)
    expect(navbarLeftSideEelement).toHaveClass('navbar-right-side')
})