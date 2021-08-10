import './Article.css';

const Article = ({id, title, author, description, publishedAt, sourceName, url, urlToImage}) => {
    return (
        <a key={id} className="article-div" href={url} target="_blank" rel="noreferrer" title="Click to read the full article" >
            <div className="article-image">
                <img src={urlToImage} alt={title} />
            </div>
            <div className="article-contents">
                <h1>{title}</h1>
                <h3>{author!=="" ? `By ${author}` : "Unknown author"}</h3>
                <p>{description}</p>
                <div className="source-datas">
                    <span>{`${sourceName} - ${publishedAt.slice(0, 10).replace(/-/g, "/")}`}</span>
                </div>
            </div>
        </a>
    )
}

export default Article
