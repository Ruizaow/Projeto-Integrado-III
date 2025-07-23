import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from '../pages/FeedPage/FeedPage.jsx';
import OpenMap from '../pages/OpenMap.jsx';
import CreatePostForm from '../pages/CreatePostForm.jsx';
import About from '../pages/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/createPost/:tag" element={<CreatePostForm />} />
        <Route path="/openMap" element={<OpenMap />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;