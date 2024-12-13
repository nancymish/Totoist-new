import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Header from './components/Header/Header';
import Scrolling from './components/Scrolling/Scrolling';
import Youtube from './components/Youtube/Youtube';
import Cardss from './components/Cardss/Cardss'; 
import LastDiv from './components/LastDiv/LastDiv';
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <Navbar />
      <Header />
      
      <Youtube />
      <Cardss />
      <LastDiv/> 
      <Footer/>
    </div>
  );
}

export default App;
