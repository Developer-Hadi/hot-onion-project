import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Choose from './components/Choose/Choose';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Banner></Banner>
     <Choose></Choose>
     <Footer></Footer>
    </div>
  );
}

export default App;
