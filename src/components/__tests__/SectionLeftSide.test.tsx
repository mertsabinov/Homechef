import {screen,render} from "@testing-library/react";
import SectionLeftSide from "../SectionLeftSide";

beforeEach(() =>{
    render(<SectionLeftSide/>)
})

test("section left side img",()=>{
    const imgElement = screen.getByAltText('recipes')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src','recipes.svg')
})

test("section left side li (pizza)",()=>{
    const liContentElement = screen.getByText('Pizza')
    expect(liContentElement).toBeInTheDocument()
    const liImgElement = screen.getByAltText('pizza')
    expect(liImgElement).toBeInTheDocument()
    expect(liImgElement).toHaveAttribute('src','pizza.svg')
})

test("section left side li (dessert)",()=>{
    const liContentElement = screen.getByText('Dessert')
    expect(liContentElement).toBeInTheDocument()
    const liImgElement = screen.getByAltText('dessert')
    expect(liImgElement).toBeInTheDocument()
    expect(liImgElement).toHaveAttribute('src','dessert.svg')
})

test("section left side li (noodle)",()=>{
    const liContentElement = screen.getByText('Noodle')
    expect(liContentElement).toBeInTheDocument()
    const liImgElement = screen.getByAltText('noodle')
    expect(liImgElement).toBeInTheDocument()
    expect(liImgElement).toHaveAttribute('src','noodle.svg')
})

test("section left side li (cocktails)",()=>{
    const liContentElement = screen.getByText('Cocktails')
    expect(liContentElement).toBeInTheDocument()
    const liImgElement = screen.getByAltText('cocktails')
    expect(liImgElement).toBeInTheDocument()
    expect(liImgElement).toHaveAttribute('src','cocktails.svg')
})

test("section left side li (salad)",()=>{
    const liContentElement = screen.getByText('Salad')
    expect(liContentElement).toBeInTheDocument()
    const liImgElement = screen.getByAltText('salad')
    expect(liImgElement).toBeInTheDocument()
    expect(liImgElement).toHaveAttribute('src','salad.svg')
})
