import * as react from 'react'
import './assets/styles/base.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionLeftSide from "./components/SectionLeftSide";
import SectionCenterSide from "./components/SectionCenterSide";
import SectionRightSide from "./components/SectionRightSide";

const App = () => {
  return (
      <div className='base-container' data-testid='base-container' >
          <div className='base-bg' data-testid='base-bg'>
              <Navbar/>
              <Header/>
              <section>
                  <SectionLeftSide/>
                  <SectionCenterSide/>
                  <SectionRightSide/>
              </section>
              <footer></footer>
          </div>
      </div>
  )
}

export default App