import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Stories from './components/Stories';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

import { Routes, Route, Navigate } from 'react-router-dom';
import ModalSettings from './components/ModalSettings';
import Login from './Pages/Login';
import ProfileEdit from './Pages/ProfileEdit';
import Settings from './Pages/Settings';
import ChangePassword from './Pages/ChangePassword';
import Help from './Pages/Help';

library.add(fab, fas, far);

function App() {

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/accounts/login" exact element={<Login />}></Route>
        <Route path="/accounts"
          element={
            <>
              <Navbar />
              <Settings />
            </>
          }
        >
          <Route index element={<Navigate to="edit" replace />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route
          path="/"
          exact
          element={
            <>
              <Navbar />
              <Home />
            </>
          }>
        </Route>
        <Route
          path="/yuri_alec"
          exact
          element={
            <>
              <Navbar />
              <Profile
                setIsSettingsModalOpen={
                  setIsSettingsModalOpen
                }
              />
            </>
          }>
        </Route>
      </Routes>

      <ModalSettings
        open={isSettingsModalOpen}
        setOpen={setIsSettingsModalOpen}
      />

    </>
  );
}

export default App;
