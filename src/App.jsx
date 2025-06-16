import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecentWork from './components/RecentWork'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <RecentWork></RecentWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
