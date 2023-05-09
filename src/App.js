import { Route, Routes } from 'react-router-dom';
import './App.css';
import {home} from './screens';


function App() {
  return (
    <Routes>
      <Route path='/home' Component={home} />
    </Routes>
  );
}

export default App;
