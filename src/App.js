import './App.css';
import Home from './Home';
import Place from './Components/Place';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/placetostay' element={<Place />}/>
      </Routes>
       
     {/* <Home/> */}
    </div>
  );
}

export default App;
