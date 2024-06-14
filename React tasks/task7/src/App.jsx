import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("");

  function addInput(e){
    setCount(e.target.value);
}

function keyPress(){
  if (count.startsWith ("py") || count.startsWith ('PY'))
    {
      setCount(count);
    }

else if(count=== ""){
  setCount("please enter the data")
}
else( setCount("py" + count)
)

  }


  return (
    <>
      <input type="text"  onChange={addInput}/>
      <button onClick={keyPress}>Enter to add PY</button>

      <h1>{count}</h1>
    </>
  )
}

export default App
