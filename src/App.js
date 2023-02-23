import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from './Constants/routes';
import Home from './Pages/Home/home';
import Error from './Pages/Error';
import PageNotFound from './Pages/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
