import { useState } from "react";

function Search({ onSearch }) {
    const [term, setTerm] = useState("");

    function handleSearch(event) {
        setTerm(event.target.value);
    }

    function handleSubmission(event) {
        if (event.key === "Enter") {
            if (term.trim() !== "") {
                console.log(term);
                onSearch(term); // Call the onSearch function with the search term
            } else {
                // If the search term is empty, perform the reset action here
                alert("please enter a valid game name")
                onSearch(""); // Reset the list (pass an empty string as the search term)
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
