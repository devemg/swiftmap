
import './App.scss'
import { Map } from './components/Map/Map'

function App() {

  return (
    <>
    <nav> 
      <div className='logo'>
        <span className='icon'></span>SwiftMap
      </div>
      </nav>
    <Map/>
    <footer>
      <p> © 2025 SwiftMap by devemg - All rights reserved  </p>
      <p>This is a site with educational purposes only. Nothing that you can recognize belongs to me.</p>
    </footer>
    </>
  )
}

export default App
