import { useState } from "react";
import { sculptureList } from "./state,jsx";
// import {}

export default function Gallery() {
  // let index = 0;
  const [index, setIndex] = useState (0)

  function handleClick() {
    setIndex  (index + 1);
    if (index === sculptureList.length -1){
      setIndex(0);}
  }
  function handleBack() {
    setIndex  (index - 1);
    if (index === 0){
      setIndex(sculptureList.length-1);}
  }



  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick }>Next</button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      
      />
      
      <p>
        {sculpture.description}
      </p>
      <button onClick = {handleBack}>
        Back
      </button>
    </>
  );
}
