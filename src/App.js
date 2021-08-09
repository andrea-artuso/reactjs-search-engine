import './App.css';
import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="App">
      <header className="website-header">
        <div className="input-container">
          <input type="text" onChange={e=>setSearchInput(e.target.value)} placeholder="Enter search keywords" aria-label="Enter your search words" />
          <button onClick={()=>console.log(searchInput)} className="search-button" aria-label="Search button">
            <SearchIcon 
              width="20px"
              height="20px"
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
