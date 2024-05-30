import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import NotFound from './components/shared/notFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  );
}

export default App;
