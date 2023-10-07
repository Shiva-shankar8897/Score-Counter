import logo from './logo.svg';
import './App.css';
import Cricket from './Score/Cricket';

function App() {
  var count=0;
  function zero(){
    count=0;
    console.log(count)
  }
  function four(){
    count=4;
    console.log(count)
  }
  function six(){
    count=6;
    console.log(count)
  }
  function wicket(){
    count=count+1;
    console.log(count)
  }
  return (
   <div>
    <h1>Score Board</h1>
    <button onClick={zero}>0</button>
    <button onClick={four}>4</button>
    <button onClick={six}>6</button>
    <button onClick={wicket}>W</button>

    <Cricket/>
   </div>
   
  );
}

export default App;
