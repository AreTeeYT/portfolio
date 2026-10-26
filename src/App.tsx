import './App.css'
import './Home.css'
import './Navbar.css'
import './Projects.css'
import './ProjectTile.css'
import Projects from './Projects'
import Navbar from './Navbar'
import Home from './Home'
import { useState } from 'react'
import ContactMe from './Contact'

function App() {

  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <>
      <Navbar selectedTab={(tab: string) => {setSelectedTab(tab)}}></Navbar>
      <main id="main">
        {selectedTab === "home" ? <Home></Home> : <></>}
        {selectedTab === "projects" ? <Projects></Projects> : <></>}
        {selectedTab === "contact" ? <ContactMe></ContactMe> : <></>}
      </main>
      <footer id="footer">
        <span>
          <p>&copy;Robert Mound 2026</p>
        </span>
        <span>
          <p>All rights reserved.</p>
        </span>
      </footer>
    </>
  )
}

export default App
