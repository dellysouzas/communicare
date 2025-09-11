import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SitePage from './SitePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/site" element={<SitePage />} />
      </Routes>
    </Router>
  )
}

export default App
