import * as react from 'react'
import './assets/styles/base.css'
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <div className='base-container' data-testid='base-container' >
          <div className='base-bg' data-testid='base-bg'>
              <Navbar/>
          </div>
      </div>
  )
}

export default App