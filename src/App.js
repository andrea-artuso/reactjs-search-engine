import './App.css';
import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { configData } from './privateConfig'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [articles, setArticles] = useState([]);
  const [areDataLoaded, setAreDataLoaded] = useState(false);


  return (
    <div className="App">
      <header className="website-header">
        <div className="input-container">
          <input type="text" onChange={e=>setSearchInput(e.target.value)} placeholder="Search for recent articles" aria-label="Search for articles" />
          <button onClick={()=> fetchData(searchInput, setArticles, setAreDataLoaded)} className="search-button" aria-label="Search button" >
            <SearchIcon 
              width="20px"
              height="20px"
            />
          </button>
        </div>
      </header>

      <div className="data-container">
        {
          areDataLoaded ? articles.map(article => ( <h1 key={article.url}>{article.author}</h1> )) : <h1 className="loading-text">Waiting for search...</h1>
        }
      </div>
    </div>
  );
}


function fetchData(input, setArticles, setAreDataLoaded){
  if (input !== ""){
    var url = 'https://newsapi.org/v2/everything?' +
    'q='+input +
    '&from=2021-08-10&' +
    'sortBy=popularity&' +
    'apiKey='+configData.API_KEY;

    var req = new Request(url);
    fetch(req)
      .then(response => response.json())
      .then(data => 
        {
          setArticles(data.articles)
        })
    setAreDataLoaded(true);
  }
}

export default App;
