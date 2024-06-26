import { useState, useEffect } from "react";
import Card from "./component/Card.jsx"
import List from "./component/List.jsx"
import Button from "./component/button.jsx";
import Banner from "./component/Banner.jsx";
import { getGamesData } from './component/GameData.js';
import DisplayUser from "./component/DisplayUser.jsx";
import Search from "./component/Search.jsx";
import Filter from "./component/Filter.jsx";


const gamesData = getGamesData();




function App() {
  const [filter, setFilter] = useState("default");
  const [user, setuser] = useState("Guest");
  
  
  function soldOut(text) {
    alert(text+" is sold out!")
   
  }

  function switchFilter(selection) {
    setFilter(selection);
    console.log(filter)
  }

  const games =  gamesData.map((game)=>(<Card availability={game.stock>0}
  stock={game.stock} funct={()=>soldOut(game.name)} updateStock={updateStock}
  img_src={game.img_src} text={game.text}>


  </Card>));

  const [games_, setGames] = useState(games);
  const [originalGamesData,setoriginalGamesData]=useState(games)

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
        if (card.props.stock <= 5 && card.props.stock >1) {
          const updatedStock = card.props.stock - 1;
          const limited = "Card-button-limited"; // Change className if stock is less than 5
          // oranged for limited stock
          return { ...card, props: { ...card.props,className:limited ,stock: updatedStock } };
        } 

        if (card.props.stock > 1) {
          const updatedStock = card.props.stock - 1;
          // Return a new card object with the updated stock.
          return { ...card, props: { ...card.props, stock: updatedStock } };
        }
        else {
          // If the stock is 1 or less, set the availability to false (game is sold out).
          return { ...card, props: { ...card.props, availability: false } };
        }
      }
      // If the game title doesn't match, return the card unchanged.
      return card;
    });
  });
  
}


function searchTitle(gameTitle) {
  if (gameTitle.trim() === "") {
    setGames(originalGamesData);
    return;
  }

  setGames(prevGames => {
    const filteredGameCards = prevGames.filter(card => card.props.text === gameTitle);
    return filteredGameCards;
  });
}




  return (
    <>
      {<Button onClick={()=>setuser("Username")} hidden={user!=="Guest"} text={"Login"}></Button>}
      {user!=="Guest"&& <DisplayUser user={user}></DisplayUser>}
      {<Search onSearch={searchTitle}></Search>}
      <Filter filter={filter} onSelection={switchFilter}></Filter>
      {/* {games_.length > 0 && <Button text={"Filter"} onClick={switchFilter} ></Button>} */}
      {games_.length > 0 ? <List arr={games_} filter={filter}></List> 
      : <Banner className="maintenance-banner" img_src="src\assets\maintenanceBanner.jpeg"></Banner>}
      
      <footer className="footer"><p>&copy;Mspeaker Productions</p></footer>
    </>
  );
}

export default App;

