import Button from "./button";

function Card({img_src,text}){

    

    return (
        <>
        <div className="Card">
            <img className="Card-img"src={img_src}></img>
            <p className="Card-text">{text}</p>
            <Button className={"Card-button"} text={"Buy"}></Button>
           
        </div>
        
        
        
        </>
    );
}

export default Card;