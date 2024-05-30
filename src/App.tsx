import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddPost from './components/pages/AddPost/AddPost';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/shared/Header';
import NotFound from './components/shared/notFound/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  );
}

export default App;
