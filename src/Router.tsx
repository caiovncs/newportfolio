import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AllProjects } from './pages/AllProjects'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllProjects" element={<AllProjects />} />
    </Routes>
  )
}
