import React from "react";

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search stocks</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Stock name or ticker"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;