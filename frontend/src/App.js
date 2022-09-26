import {BrowserRouter, Route, Routes} from 'react-router-dom'


//pages
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
