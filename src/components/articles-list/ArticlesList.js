import './ArticlesList.css';
import ArticleCard from '../article-card/ArticleCard';

const ArticlesList = (props) => {
    const articles = props.articles;

    return (
        <div className='articles-list'>
            {articles.map((article, key) => {
                return <ArticleCard key={key} article={article} />
            })}
        </div>
    )
}

export default ArticlesList;