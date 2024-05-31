import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import MapGamePage from './pages/MapGamePage/MapGamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/map-game" element={<MapGamePage />} />
      </Routes>
    </Router >
  );
}

export default App;
