import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HiringForm from './components/HiringForm'
import About from './components/About'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Socials from './components/Socials'

function App() {
  const[page , setPage] = useState('hero')
  return (
    <section className=''>
      <div className='bg-zinc-900'>
        <Router>
          <Navbar setPage={setPage} page={page} />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire" element={<HiringForm />}/>
          </Routes>
          <Footer setPage={setPage} />
        </Router>
      </div>
    </section>
  )
}

export default App
