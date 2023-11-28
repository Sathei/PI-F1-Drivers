import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Route, Routes } from 'react-router-dom';

//* Components *//
import Landingpage from './views/landingpage/Landingpage';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Create from './views/create/Create';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App
