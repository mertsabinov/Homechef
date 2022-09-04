import {screen,render} from "@testing-library/react";
import SectionCenterSide from "../SectionCenterSide";
import {text} from "stream/consumers";

beforeEach(()=>{
    render(<SectionCenterSide/>)
})

test("section center side (input)",()=>{
    const inputElement = screen.getByPlaceholderText('Search recipes and more...')
    expect(inputElement).toBeInTheDocument()
})

test("section center side card (image)",()=>{
    const imgElement = screen.getByAltText('food')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute("src","food.svg")
})

test("section center side card (title)",()=>{
    const titleElement = screen.getByText("Citrus Salad with berries")
    expect(titleElement).toBeInTheDocument()
})

test("section center side card (content)",()=>{
    const pElement = screen.getByText("In the season of fresh strawberries, i suggest making a very tasty and simple pie with wonderful berry.")
    expect(pElement).toBeInTheDocument()
})

test("section center side card footer (left content)",()=>{
    const pElement = screen.getByText("Serving")
    expect(pElement).toBeInTheDocument()
})

test("section center side card footer (left img)",()=>{
    const imgElement = screen.getByAltText("card-footer")
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute("src","card-footer.svg")
})

test("section center side card footer (right content)",()=>{
    const pElement = screen.getByText("Cook Time")
    expect(pElement).toBeInTheDocument()
})

test("section center side card footer (right time)",()=>{
    const pElement = screen.getByText("1h 15min")
    expect(pElement).toBeInTheDocument()
})