import { useParams } from 'react-router-dom';
import articles from './../../mock/articles-mocked';

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
        </>
    )
}

export default ArticlePage;