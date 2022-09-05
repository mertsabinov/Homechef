import {screen,render} from "@testing-library/react";
import Card from "../Card";
import saladCard from '../../assets/images/salad-card.svg'

beforeEach(()=>{
    render(<Card FoodImg={saladCard}/>)
})

test("card (img)",()=>{
    const imgElement = screen.getByAltText('salad-card')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute("src","salad-card.svg")
})

test("Card (h3)",()=>{
    const h3Element = screen.getByText("Avocado Salad")
    expect(h3Element).toBeInTheDocument()
})

test("card footer left side (content)",()=>{
    const pElement = screen.getByText("Serving")
    expect(pElement).toBeInTheDocument()
})

test("card footer left side (img)",()=>{
    const imgElement = screen.getByAltText("card-footer")
    expect(imgElement).toHaveAttribute("src","card-footer.svg")
})

test("card footer right side (first content)",()=>{
    const pElement = screen.getByText("Cook Time")
    expect(pElement).toBeInTheDocument()
})

test("card footer right sided (two content)",()=>{
    const pElement = screen.getByText("1h 55min")
    expect(pElement).toBeInTheDocument()
})