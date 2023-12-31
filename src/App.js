import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Profile from './routes/Profile';
import Login from './routes/Login';
import NotMatch from './routes/NotMatch';
import Layout from './routes/Layout';

const TodoApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </>
);

export default TodoApp;
