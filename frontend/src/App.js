import {BrowserRouter, Route, Routes} from 'react-router-dom'


//pages
import Home from './pages/Home'
import SignUp from './pages/SignUp';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
