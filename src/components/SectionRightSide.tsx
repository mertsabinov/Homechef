import * as react from 'react'
import '../assets/styles/components/SectionRightSide.css'
import Card from "./Card";
import saladCard from '../assets/images/salad-card.svg'
import pasta from '../assets/images/pasta.svg'

const SectionRightSide = () => {
    return(
        <div className='section-right-side' >
            <select name='short by' value=''>
                <option value="newest">Sort by:Newest</option>
            </select>
            <Card FoodImg={saladCard} />
            <Card FoodImg={pasta} />
        </div>
    )
}

export default SectionRightSide
