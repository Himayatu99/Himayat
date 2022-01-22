
import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
      {/* <h1 className="text-center text-success">Testing</h1> */}
    </>
  )
}
export default App