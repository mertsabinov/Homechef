import {screen, render} from "@testing-library/react";
import SectionRightSide from "../SectionRightSide";

beforeEach(()=>{
    render(<SectionRightSide/>)
})

test("section right side (select)",()=>{
    const selectElement = screen.getByTestId("section-right-side-select")
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveAttribute("name","short by")
})