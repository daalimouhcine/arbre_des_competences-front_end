import {Route, Routes, useNavigate} from 'react-router-dom';
import useLocaleStorage from '../../common/hooks/useLocaleStorage';
import LoginPage from '../../pages/auth/login.page';
import NotFound from '../../pages/404/404.page';
import HomePage from '../../pages/home/home.page';

const App = () => {
  const [user] = useLocaleStorage('user');
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <>
        {user ? <Route path="/" element={<HomePage />} /> : navigate('/login') }
      </>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
