import {BrowserRouter, Route, Routes} from 'react-router-dom'


//pages
import Home from './pages/Home'
import Login from './pages/Login';
import ProfileEdit from './pages/ProfileEdit';
import SignUp from './pages/SignUp';
import Profile from './Components/Profile'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/editProfile' element={<ProfileEdit/>}/>
        <Route path='/profile' element={<Profile/>}/>



      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
