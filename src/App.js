import './App.css';
import { SearchIcon } from '@heroicons/react/solid'
import Article from './components/Article/Article'
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
          articles!==undefined ?
          (areDataLoaded ? articles.map(article => ( <Article key={article.title} title={article.title} author={article.author} description={article.description} publishedAt={article.publishedAt} sourceName={article.source.name} url={article.url} urlToImage={article.urlToImage} /> )) : <h1 className="loading-text">Waiting for search...</h1>)
          : <h1 className="loading-text">No results found</h1>
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
          setArticles(data.articles);
          setAreDataLoaded(true);
        })
  }
}

export default App;
