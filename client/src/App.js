import Register from './component/page/auth/Register'
import Login from './component/page/auth/Login'
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/page/auth/Navbar'

function App() {
  return (
    <div className="App">
      {/*<Register />*/}
    <Navbar/>
    <Routes>
    <Route path='/'auth element={<Register />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
    
    </Routes>
    </div>

  );
}

export default App;
