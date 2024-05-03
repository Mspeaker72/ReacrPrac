import { useState, useEffect } from "react";
import Card from "./component/Card.jsx"
import List from "./component/List.jsx"
import Button from "./component/Button.jsx";

function App() {
  const [filter, setFilter] = useState(false);
  const [gameStock, setStock] = useState(10);

  function soldOut(text) {
    alert(text+" is sold out!")
   
  }

  function switchFilter() {
    setFilter(prevFilter => !prevFilter);
  }

  const games =  [
    <Card availability={8>0} stock={6}funct={()=>soldOut("SIMS4")} updateStock={updateStock} img_src={"src/assets/THS4.jpg"} text={"SIMS4"}></Card>,
    <Card availability={1>0} stock={1}funct={confirm} updateStock={updateStock}img_src={"src/assets/GTA.jpg"} text={"TEKKEN 7"}></Card>,
    <Card availability={19>0} stock={19} updateStock={updateStock} img_src={"src/assets/Island.jpg"} text={"TS4:Island living"}></Card>,
    <Card availability={gameStock>0} stock={gameStock} updateStock={updateStock} img_src={"src/assets/DOA.jpg"} text={"DOA"}></Card>
  ];

  const [games_, setGames] = useState(games);

// This function updates the stock of a specific game in the games list.
// It takes the game title as a parameter and decrements the stock for that game.
function updateStock(gameTitle) {
  // Update the games list using the setGames function and the functional form of setState.
  setGames(prevGames => {
    // Map over the previous games list.
    return prevGames.map(card => {
      // Check if the game title matches the title of the current card.
      if (card.props.text === gameTitle) {
        // If the stock for the game is greater than 1, decrement the stock by 1.
        if (card.props.stock > 1) {
          const updatedStock = card.props.stock - 1;
          // Return a new card object with the updated stock.
          return { ...card, props: { ...card.props, stock: updatedStock } };
        } else {
          // If the stock is 1 or less, set the availability to false (game is sold out).
          return { ...card, props: { ...card.props, availability: false } };
        }
      }
      // If the game title doesn't match, return the card unchanged.
      return card;
    });
  });
  
  // Decrement the overall stock count.
  setStock(prevStock => prevStock - 1);
}

  function updateStock(gameTitle) {
    setGames(prevGames => {
      return prevGames.map(card => {
        if (card.props.text === gameTitle) {
          if (card.props.stock > 1) {
            const updatedStock = card.props.stock - 1;
            return { ...card, props: { ...card.props, stock: updatedStock } };
          } else {
            return { ...card, props: { ...card.props, availability: false } };
          }
        }
        return card;
      });
    });
  
    setStock(prevStock => prevStock - 1);
  }
  
  

  return (
    <>
      <List arr={games_} trigger={filter}></List>
      <Button text={"Filter"} onClick={switchFilter}></Button>
    </>
  );
}

export default App;

