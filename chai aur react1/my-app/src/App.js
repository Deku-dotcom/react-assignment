import './App.css';
import React,{useState} from 'react';

function App() {
  let [val,setVal]= useState(1)
  const [val, setval] = useState(1)
  return (
   <>
      <div>val : {val}</div>
   </>
  );
}

export default App;
