// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Homepage from './pages/Homepage'
// import Analysis from './pages/Analysis'
// import Prediction from './pages/Prediction'
// import Record from './pages/Record'

// function App() {
//  return (
//     <>
//         <h1>test</h1>
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<h1>this is test</h1>}></Route>
//                 {/* <Route path='/record' element={<Record />}></Route>
//                 <Route path='/analysis' element={<Analysis />}></Route>
//                 <Route path='/prediction' element={<Prediction />}></Route> */}
//             </Routes>
//         </BrowserRouter>
//     </>
//  )
// };

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Record from './pages/Record'
import Prediction from './pages/Prediction'
import Analysis from './pages/Analysis'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/record" element={<Record />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App