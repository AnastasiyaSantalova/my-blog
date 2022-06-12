import { Link } from 'react-router-dom';
import articles from './../../mock/articles-mocked';

const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            {articles.map((article, key) => {
                return <Link key={key} to={`/articles/${article.url}`}><h3>{article.name}</h3></Link>
            })}
        </>
    )
}

export default ArticlesListPage;