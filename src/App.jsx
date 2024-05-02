import { useState } from "react";
import Card from "./component/Card.jsx"
import List from "./component/List.jsx"
import Button from "./component/button.jsx";

function App() {

  function confirm(){
    alert("The product is sold out")
}

const[filter,setFilter]=useState(false);

function switchFilter(){
  if(filter===true){
    setFilter(false)
  }else{
    setFilter(true)
  }
 
}


const games =  [<Card funct={confirm}img_src={"src/assets/THS4.jpg"} text={"SIMS4"}></Card>,
<Card img_src={"src/assets/GTA.jpg"} text={"TEKKEN 7"}></Card>,
<Card img_src={"src/assets/Island.jpg"} text={"TS4:Island living"}></Card>,
<Card img_src={"src/assets/DOA.jpg"} text={"DOA"}></Card>]

  

  return (
    <>
    
    <List arr={games} trigger={filter}></List>
    <Button text={"Filter"} onClick={switchFilter}></Button>
    </>
  
 );
    
}
export default App
