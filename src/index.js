import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
 
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookDetails from './component/BookDetails/BookDetails';
import BookList from './component/BookList/BookList'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}>
            <Route path='about' element={<About/>} />
            <Route path='book' element={<BookList/>} />
            <Route path='/book/:id' element={<BookDetails/>} />

            </Route>
          </Routes>
  </BrowserRouter>
  </AppProvider>
  
);

