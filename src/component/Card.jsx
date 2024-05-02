import { useState } from "react";
import Button from "./button";
import Proptypes from "prop-types"

function Card({img_src,text,funct}){

    const [availability,setAvaliablity]=useState(true);

    const canBuy = <Button onClick={setAvaliablity}  
    text={"Buy"}>
    </Button>

    const soldOut = <Button onClick={funct} text={"Sold out"} 
    className={"Card-button-sold"}></Button>
    

    return (
       
        <>
        
        <div className="Card">
            <img className="Card-img"src={img_src}></img>
            <p className="Card-text">{text}</p>
            {availability ? canBuy : soldOut}
        </div>
        
        
        
        </>
    );
}

Card.Proptypes= {
    text : Proptypes.string,
    img_src: Proptypes.string,
    funct: Proptypes.func

}

export default Card;