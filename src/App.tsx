import * as react from 'react'
import './assets/styles/base.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionLeftSide from "./components/SectionLeftSide";
import SectionCenterSide from "./components/SectionCenterSide";

const App = () => {
  return (
      <div className='base-container' data-testid='base-container' >
          <div className='base-bg' data-testid='base-bg'>
              <Navbar/>
              <Header/>
              <section>
                  <SectionLeftSide/>
                  <SectionCenterSide/>
              </section>
          </div>
      </div>
  )
}

export default App