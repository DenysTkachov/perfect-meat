import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import Header from './components/Shared/Header.js';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import StatisticsPage from './pages/StatisticsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {user ? (
              <>
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/statistics" element={<StatisticsPage/>} />
              </>
            ) : (
              <Route path="/" element={<LoginPage />} />
            )}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
