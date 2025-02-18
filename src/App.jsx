import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HiringForm from './components/HiringForm'
import About from './components/About'
import Hero from './components/Hero'
import Footer from './components/Footer'
import PreLoader from './components/PreLoader'

function App() {
  const[page , setPage] = useState('hero')
  const[loading, setLoading] = useState(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)

  return (
    <>
    {loading &&(<PreLoader/>)}
    {!loading &&(<section>
      <div className='bg-zinc-900'>
        <Router>
          <Navbar setPage={setPage} page={page} />
          <Routes>
            <Route exact path="/" element={<Hero setPage={setPage}/>} />
            <Route path="/about" element={<About setPage={setPage}/>} />
            <Route path="/hire" element={<HiringForm setPage={setPage}/>}/>
          </Routes>
          <Footer setPage={setPage} />
        </Router>
      </div>
    </section>)}
    </>
  )
}

export default App
