import React from 'react';

function Search({search}) {
       return (
           <form onSubmit={search} >
               <input  name={'input'} type="search" placeholder="Search" aria-label="Search"/>
               <button  type="submit">
               </button>
           </form>
        );
}

export default Search;