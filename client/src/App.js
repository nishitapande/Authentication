import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import Main from './component/main/Main';


function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path='/' exact element={<Main />} />}
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/' exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
