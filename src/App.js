import { Route, Routes } from 'react-router-dom';
import {Header, Footer, Main, Blog, Setting, BaseHome, Profile} from './components/index';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './components/context/ThemeProvider';

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/basehome' element={<BaseHome/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
