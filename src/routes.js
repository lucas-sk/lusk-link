import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

function RoutesApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* path = caminho, element = o elemento que será rederizado */}
        <Route path="/Links" element={<Links/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;