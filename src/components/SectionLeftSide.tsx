import * as react from 'react'
import '../assets/styles/components/SectionLeftSide.css'
import recipes from '../assets/images/recipes.svg'
import pizza from '../assets/images/pizza.svg'
import dessert from '../assets/images/dessert.svg'
import noodle from '../assets/images/noodle.svg'
import cocktails from '../assets/images/cocktails.svg'
import salad from '../assets/images/salad.svg'

const SectionLeftSide = () => {
    return(
        <div
            className='section-left-side'
        >
            <img src={recipes} alt='recipes'/>
            <ul>
                <li> <img src={pizza} alt='pizza' /> Pizza</li>
                <li> <img src={dessert} alt='dessert' /> Dessert</li>
                <li> <img src={noodle} alt='noodle' /> Noodle</li>
                <li> <img src={cocktails} alt='cocktails' />Cocktails</li>
                <li> <img src={salad} alt='salad' /> Salad</li>
            </ul>
        </div>
    )
}

export default SectionLeftSide