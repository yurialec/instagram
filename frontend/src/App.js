import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faRectangleList, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-solid-svg-icons';
import Stories from './components/Stories';
import Home from './Pages/Home';

library.add(fas, faRectangleList)

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
