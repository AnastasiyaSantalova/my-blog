import ArticleCard from '../article-card/ArticleCard';

import './ArticlesList.css';

const ArticlesList = (props) => {
	const articles = props.articles;
	const articlesCount = props.count;
	const currentArticle = props.current;

	let outputArticles;

	if (currentArticle) {
		outputArticles = articles.filter(article => article.name !== currentArticle);
	} else {
		outputArticles = [...articles];
	}

	if (articlesCount) {
		outputArticles = outputArticles.slice(0, articlesCount);
	}

	return (
		<div className='articles-list'>
			{outputArticles.map((article, key) => {
				return <ArticleCard key={key} article={article} />
			})}
		</div>
	)
}

export default ArticlesList;