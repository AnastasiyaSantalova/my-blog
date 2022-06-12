import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

import AboutPage from './pages/about/AboutPage';
import ArticlePage from './pages/article/ArticlePage';
import ArticlesListPage from './pages/articles-list/ArticlesListPage';
import ErrorPage from './pages/error/ErrorPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles' element={<ArticlesListPage />} />
            <Route path='/article' element={<ArticlePage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
