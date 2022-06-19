import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import articles from './../../mock/articles-mocked';

import ArticlesList from './../../components/articles-list/ArticlesList'
import CommentsList from '../../components/comments-list/CommensList';
import UpvotesSection from '../../components/upvotes-section/UpvotesSection';
import CommentForm from '../../components/comment-form/CommentForm';
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';

import './ArticlePage.css';

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
		<div className='article-page'>
			<Header name={name} />
			<UpvotesSection articleName={article.url} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
			<div dangerouslySetInnerHTML={content}></div>
			<CommentsList comments={articleInfo.comments} />
			<CommentForm articleName={article.url} setArticleInfo={setArticleInfo} />
			<Subheader name={'read also:'} />
			<ArticlesList articles={articles} count={3} current={article.name} />
		</div>
	)
}

export default ArticlePage;