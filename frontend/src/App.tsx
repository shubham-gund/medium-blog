
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/publish' element={<Publish/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
