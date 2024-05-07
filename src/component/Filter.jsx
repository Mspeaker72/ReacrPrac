import { useState } from "react";

function Filter() {

    const [filterType,setFilter]=useState("")

    function handleFilterChange(event){
        setFilter(event.target.value)
    }

    return <div className="Filter">
    <select  value={filterType} onChange={handleFilterChange}>
        <option value={""}>Filters</option>
        <option value={"sales"}>sales</option>
        <option value={"new"}>new</option>
    </select>
    {/* <p>current filiter : {filterType}</p> */}
    </div>
}

export default Filter;