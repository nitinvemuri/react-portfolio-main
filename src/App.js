import React from 'react'
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Head from './components/Header';
import Footer from './components/Footer'


function App() {
  return (
    <div>
    
    <main>
      <div className = "About">
      <About></About>
      </div>
      <div className = "Work">

      </div>
      <div className='Contact'>
        <ContactForm></ContactForm>

      </div>
      <div className = "Footer">
        <Footer></Footer>
      </div>
    </main>
    </div>
  );
}

export default App;
