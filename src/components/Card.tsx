import * as react from 'react'
import '../assets/styles/components/Card.css'
import icon from '../assets/images/card-footer.svg'

interface IProps {
    FoodImg:string
}

const Card:react.FC<IProps> = ({FoodImg}) => {
    return(
        <div className='card-container' >
            <img src={FoodImg} alt='salad-card'/>
            <div className='card-right-side'>
                <h3>Avocado Salad</h3>
                <div className='card-footer'>
                    <div>
                        <p>Serving</p>
                        <img src={icon} alt='card-footer' />
                    </div>
                    <div>
                        <p>Cook Time</p>
                        <p>1h 55min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card