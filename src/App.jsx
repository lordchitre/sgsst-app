import { useEffect } from 'react';
import { useFirebase } from './hooks/useFirebase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home } from './pages/home';
import { Register } from './pages/Register';
import { Navbar } from './components/Navbar';

function App() {
  const { getCostumers } = useFirebase();

  useEffect(() => {
    getCostumers();

  },[])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
