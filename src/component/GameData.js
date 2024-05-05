// gameData.js

const gamesData = [
    {
      name: "SIMS4",
      availability: 8,
      stock: 6,
      img_src: "src/assets/THS4.jpg",
      text: "SIMS4"
    },
    {
      name: "Tekken:7",
      availability: 1,
      stock: 1,
      img_src: "src/assets/GTA.jpg",
      text: "TEKKEN 7"
    },
    
  ];
  
  export function getGamesData() {
    return gamesData;
  }
  