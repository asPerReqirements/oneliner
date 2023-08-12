import { Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
