
import { useEffect, useState } from "react"


export default function Playground(): JSX.Element {
   const [numberOfDogs, setNumberOfDogs] = useState<number>(0)
   const [numberOfBirds, setNumberOfBirds] = useState<number>(10)
   function handleAddDogs ():void {
    setNumberOfDogs(numberOfDogs + 1)
   }
    function handleAddBirds ():void {
      setNumberOfBirds(numberOfBirds + 1)
  }
  useEffect(()=>{
    console.log("UseEffect 1 - только при первой отрисовке === mount") 
  }, [])
useEffect(()=>{
  console.log("UseEffect 2 - только при маунте  и при любых изменениях");
  
})
useEffect(()=>{
  console.log("UseEffect 3 - при первой отрисовке и при изменении переменной === mount");
  
},[numberOfDogs])

   return (
    <div>
      <h1>Playground</h1>
      <p>Number of dogs:{numberOfDogs}</p>
      <p>Number of birds:{numberOfBirds}</p>
      <button type="button" onClick={handleAddDogs}>Let the dog in</button>
      <button type="button" onClick={handleAddBirds}>New bird</button>
    </div>
  );
}
