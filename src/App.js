
import './App.css';
import HomePage from './Pages/HomePage';

import {Routes, Route} from 'react-router-dom';
import SchdulesPage from './Pages/SchdulesPage';
import AboutusPages from './Pages/AboutusPages';

import SignInpage from './Pages/SignInpage';
import ServicesPages from './Pages/ServicesPages';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/schedules' element={<SchdulesPage/>}/>
        <Route path='/About' element={<AboutusPages/>}/>
        <Route path='/services' element={<ServicesPages/>}/>
        <Route path='/signin' element={<SignInpage/>}/>


      </Routes>
      

     
      
    </div>
  );
}

export default App;
