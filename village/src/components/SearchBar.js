import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>

      <div className='search-box'>
        <i className="fas fa-search"></i>
        <input
          onChange={props.searchPosts}
          className='search-input'
          placeholder='Search'
        />
      </div>

    </div>
  )
}

export default SearchBar;
