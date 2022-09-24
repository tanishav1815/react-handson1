import './App.css';
import FunctionalComponent from './components/FunctionalComponents';
import ClassComponent from './components/ClassComponents';
import {useState} from 'react';

function App() {
  const[show1, set1]= useState(false);

  const[show2, set2] =useState(false);
  return(
    <div className='App'>
      <h1 className='head'>Styling using Functional and Class Component</h1>
      <button className='btn1' onClick={()=> set1(!show1)}>To see styling in Functional Component</button>
      {show1 ? <FunctionalComponent/>:null}
      <button className='btn2'onClick={()=> set2(!show2)}>To see styling in Class Component</button>
      {show2 ? <ClassComponent/>:null}
    </div>
  )
}

export default App;
