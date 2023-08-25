import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Todo from './pages/Todo/Todo';
import AuthGuard from './components/AuthGuard/AuthGuard';

const Router = () => {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
};

export default Router;
