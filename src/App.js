import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PagesCover from './Pages/PagesCover';
import PagesTwo from './Pages/PagesTwo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<PagesCover />} />
              <Route path='/Content' element={<PagesTwo />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
