
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header'
import Sidebar from './components/loader/Loader'
import {Home , MealDetails,Error,Category} from './pages/index'


function App() {
  return (
    <div>
  <BrowserRouter>
    <Header />
    <Sidebar />
    <Routes>
   
<Route path='/' element={<Home />} />
<Route path ='/meal/:id' element={<MealDetails />} />
<Route path ='meal/category/:name' element={<Category />} />
<Route path ='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
