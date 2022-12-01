import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes , Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Product from './Product';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
