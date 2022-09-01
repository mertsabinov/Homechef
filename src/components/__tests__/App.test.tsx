import {screen, render} from "@testing-library/react";
import App from "../../App";

beforeEach(()=>{
   render(<App/>)
})
test("base class container",() =>{
    const baseElement = screen.getByTestId("base-container")
    expect(baseElement).toBeInTheDocument()
    expect(baseElement).toHaveClass("base-container")
})

test("base class bg",() => {
    const baseElement = screen.getByTestId('base-bg')
    expect(baseElement).toBeInTheDocument()
    expect(baseElement).toHaveClass("base-bg")
})