
import './App.css';
import HomePage from './Pages/HomePage';
import {Routes, Route} from 'react-router-dom'
import ServicesPages from './Pages/ServicesPages';
import SchdulesPage from './Pages/SchdulesPage';
import AboutusPages from './Pages/AboutusPages';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Services' element={<ServicesPages/>}/>
        <Route path='/Schedules' element={<SchdulesPage/>}/>
        <Route path='/About' element={<AboutusPages/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
      </Routes>
      

     
      
    </div>
  );
}

export default App;
