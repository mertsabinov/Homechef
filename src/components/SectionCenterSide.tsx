import * as react from 'react'
import '../assets/styles/components/SectionCenterSide.css'
import food from '../assets/images/food.svg'
import cardFooter from '../assets/images/card-footer.svg'
const SectionCenterSide = () => {
    return(
        <div className='section-center-side'>
            <input
                placeholder='Search recipes and more...'
            />
            <div className='section-center-side-card' >
                    <img src={food} alt='food' />
                <div>
                    <h3>Citrus Salad with berries</h3>
                    <p>
                        In the season of fresh strawberries,
                        i suggest making a very tasty and
                        simple pie with wonderful berry.
                    </p>
                    <div className='section-center-side-card-footer' >
                        <div>
                            <p>Serving</p>
                            <img src={cardFooter} alt='card-footer' />
                        </div>
                        <div>
                            <p>Cook Time</p>
                            <p>1h 15min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCenterSide