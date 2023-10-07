import logo from './logo.svg';
import './App.css';
import Cricket from './Score/Cricket';

function App() {
  var count = 0;
  function zero() {
    count = 0;
    console.log(count)
  }
  function four() {
    count = 4;
    console.log(count)
  }
  function six() {
    count = 6;
    console.log(count)
  }
  function wicket() {
    count = count + 1;
    console.log(count)
  }
  return (
    <div>
      <h1>Score Board</h1>
      <button className='btn' onClick={zero}>0</button>
      <button className='btn' onClick={four}>4</button>
      <button className='btn' onClick={six}>6</button>
      <button className='btn' onClick={wicket}>W</button>

      <Cricket />
    </div>

  );
}

export default App;
