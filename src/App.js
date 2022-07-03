import './style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import item from './components/items'

function App() {

  return (

    <div className='div'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Shop item={item}/>
    </div>

  );
}

export default App;
