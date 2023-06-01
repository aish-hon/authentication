//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Home from './Home';
import Login from './Login';
import Register from './Register';
import {ToastContainer} from 'react-toastify';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';


function App() {
  return (
    <div className="App">
      <ToastContainer>json</ToastContainer>
      <BrowserRouter>
        <Routes>
          {/*<Route path='/home' element={<Home/>}></Route>*/}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/emplisting' element={<EmpListing/>}></Route>
          <Route path='/empcreate' element={<EmpCreate/>}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
