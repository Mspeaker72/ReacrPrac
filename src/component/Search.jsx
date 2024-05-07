import { useState } from "react";
import Filter from "./Filter";

function Search (){

    const [term,setTerm]= useState("")

    function handleSearch(event){
        setTerm(event.target.value)
    }
 
    return(<div className="search">
    <input placeholder="Enter Game" onChange={handleSearch}></input>
<p>{term}</p>
</div>);
}

export default Search;