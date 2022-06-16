import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from './../../mock/articles-mocked';
import ArticlesList from './../../components/articles-list/ArticlesList'
import CommentsList from '../../components/comments-list/CommensList';

const ArticlePage = () => {
	const url = useParams();
	const article = articles.find(article => {
		return article.url === url.name;
	});
	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
	const name = article.name;
	const content = { __html: article.content };

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${article.url}`);
			const body = await result.json();

			setArticleInfo(body);
		}

		fetchData();
	}, [name])

	return (
		<>
			<h1>{name}</h1>
			<p>This post has been upvoted {articleInfo.upvotes} times</p>
			<div dangerouslySetInnerHTML={content}></div>
			<CommentsList comments={articleInfo.comments} />
			<h3>Other articles:</h3>
			<ArticlesList articles={articles} count={3} current={article.name} />
		</>
	)
}

export default ArticlePage;