import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/common/Error/Error';
import GetId from './components/Found/BookCard/GetId';
import SearchResultWithHooks from './components/Found/SearchResultWithHooks';
import HeaderWithHooks from './components/Header/HeaderWithHooks';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderWithHooks />
      <Routes>
        <Route path='/results' element={<SearchResultWithHooks />} />
        <Route path='/bookCard/:id' element={<GetId />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>

  );
}

export default App;
