import ArticlesList from '../../components/articles-list/ArticlesList';
import articles from './../../mock/articles-mocked';

const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} count={12} />
        </>
    )
}

export default ArticlesListPage;