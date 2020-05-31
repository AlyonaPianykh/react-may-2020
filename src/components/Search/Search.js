import React from 'react';

function Search({search, className, removeWarning}) {
       return (
           <form onSubmit={search} >
               <input className={className} name={'input'} type="search" placeholder="Search" aria-label="Search" onClick={removeWarning}/>
               <button  type="submit">
               </button>
           </form>
        );
}

export default Search;