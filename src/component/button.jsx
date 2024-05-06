import Proptypes from "prop-types"
function Button({className="Card-button",text,onClick = ()=> console.log("click me"),hidden=false}){

    return (<button hidden={hidden} onClick={()=>onClick()} className={className} value={text}>{text}</button>);

}

Button.propTypes ={
    className:Proptypes.string,
    text:Proptypes.string,
    onClick: Proptypes.func
}




export default Button;