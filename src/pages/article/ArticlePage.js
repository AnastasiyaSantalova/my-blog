import { useParams } from 'react-router-dom';
import articles from './../../mock/articles-mocked';
import ArticlesList from './../../components/articles-list/ArticlesList'

const ArticlePage = () => {
    const url = useParams();
    const article = articles.find(article => {
        return article.url === url.name;
    });
    const name = article.name;
    const content = {__html: article.content};

    return (
        <>
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={content}></div>
            <ArticlesList articles={articles} count={3} current={article.name} />
        </>
    )
}

export default ArticlePage;