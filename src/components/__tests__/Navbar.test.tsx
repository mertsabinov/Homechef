import {screen, render, getByText} from "@testing-library/react";
import Navbar from '../Navbar'


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