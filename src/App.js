import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Banner} from './components/Banner';
import {Product} from './components/ProductPage';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Announcement} from './components/Announcement'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Product/>
      <Announcement/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
