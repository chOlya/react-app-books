import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/common/Error/Error';
import GetId from './components/Found/BookCard/GetId';
import SearchResultContainer from './components/Found/SearchResultContainer';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Routes>
        <Route path='/results' element={<SearchResultContainer />} />
        <Route path='/bookCard/:id' element={<GetId />} />
        <Route path='/error' element={<Error />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </div>

  );
}

export default App;
