import {Route, Routes} from 'react-router-dom';
import LoginPage from '../../pages/auth/login.page';
import NotFound from '../../pages/404/404.page';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
