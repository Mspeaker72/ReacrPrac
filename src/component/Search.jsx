import { useState } from "react";

function Search({ onSearch }) {
    const [term, setTerm] = useState("");

    function handleSearch(event) {
        setTerm(event.target.value);
        if(term.length<5){
            onSearch("");
        }
    }

    function handleSubmission(event) {
        if (event.key === "Enter") {
            if (term.trim() !== "" && term.length >= 3) {
                console.log(term);
                onSearch(term); 
            } else {
                
                alert("Please Enter at least three characters for search")
                onSearch("");
            }
        }
    }
    
    return (
        <div className="search">
            <input placeholder="Enter Game" onChange={handleSearch} onKeyDown={handleSubmission} />
            <p>{term}</p>
        </div>
    );
}

export default Search;
