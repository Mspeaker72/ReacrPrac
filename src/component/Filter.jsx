import { useState, useEffect } from "react";

function Filter({ onSelection, filter }) {
    const [filterType, setFilter] = useState(filter);

    useEffect(() => {
        // Call the onSelection callback whenever the filterType changes
        // onSelecttion doesn't change but i'd have to add it to array if it did
        onSelection(filterType);
    }, [filterType]);

    function handleFilterChange(event) {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
    }

    return (
        <div className="Filter">
            <select value={filterType} onChange={handleFilterChange}>
                <option value="default">Default</option>
                <option value="desc">Desc</option>
            </select>
        </div>
    );
}

export default Filter;
