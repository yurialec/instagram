import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faRectangleList, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-solid-svg-icons';
import Stories from './components/Stories';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

import { Routes, Route } from 'react-router-dom';
import ModalSettings from './components/ModalSettings';

library.add(fas, faRectangleList)

function App() {

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
      <Routes>
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
