import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apisignup from './Apisignup';
import Apilogin from './Apilogin';
import Successlogin from './Successlogin';
import Student from './Student';
 
function App() {

  return (
   <div>
        <BrowserRouter>
       
         <Routes>
          <Route path='/apisignup'element={<Apisignup/>}/>
          <Route path='/apilogin' element={<Apilogin/>}/>
          <Route path='/success' element={<Successlogin/>}/>
          <Route path='/student' element={<Student/>}/>
         </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
