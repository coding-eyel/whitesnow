import React, { useEffect, useState } from "react";
import "../styles/siteToolbar.css"
import SearchButton from "./SearchButton";
import SearchPageResults from "./SearchPageResults";
import SearchResults from "./SearchResults";
import { get } from "react-hook-form";

function SearchInputSwap({ page, searchedTerm, searchedTermTransfer, currentSearch, posts, dummyPosts, showResults, getUpdatesFromChild }) {

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    getUpdatesFromChild(searchedTermTransfer)
  }, [searchedTermTransfer])

  const searchPageSearch = (e) => {
    const term = e.target.value;
    getUpdatesFromChild(term)
  }


  return (
    <div>
      {page === "home"
        ?
        <div className="search-bar-wrapper">
          <input className="search-input"
            type="text"
            placeholder="Search..."
            value={searchedTerm}
            onChange={currentSearch}
          />
          <SearchButton searchedTerm={searchedTerm} />
          {showResults && <SearchResults posts={posts} dummyPosts={dummyPosts} />}
        </div>
        :
        <div className="search-page-search">
          <input className="search-page-input"
            type="text"
            placeholder="Search..."
            value={searchedTerm}
            onChange={searchPageSearch}
          />
          {showResults && <SearchPageResults posts={posts} dummyPosts={dummyPosts} />}
        </div>
      }
    </div>

  )

}

export default SearchInputSwap