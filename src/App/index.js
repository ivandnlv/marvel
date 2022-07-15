import Header from '../components/Header';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Homepage from '../pages/Homepage';
import Vision from '../components/Vision';
import { Routes, Route } from 'react-router-dom';
import Character from '../pages/Character';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Vision />
      <ThemeSwitcher />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
