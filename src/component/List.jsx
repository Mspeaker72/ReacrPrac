import Proptypes from "prop-types"

function List ({arr , trigger}){

    if(!trigger){
        arr.sort((a,b)=>a.props.text.localeCompare(b.props.text))
    }else{
        arr.sort((a,b)=>b.props.text.localeCompare(a.props.text))
    }

     
    //  once price is implemented  arr.sort((a,b)=>a.props.price - b.props.price))
     //  once price is implemented  arr.sort((a,b)=>b.props.price - a.props.price))

    const me = arr.map((card,index)=><li key={index}>{card}</li>)

   
  

    return( <ul className="horizontal-list">{me}</ul>
        );
}


List.Proptypes ={
    arr: Proptypes.array,
    trigger: Proptypes.bool
}


export default List;