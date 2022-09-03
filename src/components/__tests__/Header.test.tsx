import {screen,render} from "@testing-library/react";
import Header from "../Header";

beforeEach(() =>{
    render(<Header/>)
})

test('header title',() =>{
    const p1Element = screen.getByText('Chefs')
    expect(p1Element).toBeInTheDocument()
    const p2Element = screen.getByText('Academy')
    expect(p2Element).toBeInTheDocument()
    const p3Element = screen.getByText('Secrets')
    expect(p3Element).toBeInTheDocument()
})