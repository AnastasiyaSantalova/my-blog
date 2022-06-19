import articles from './../../mock/articles-mocked';

import ArticlesList from '../../components/articles-list/ArticlesList';
import Header from '../../components/header/Header';

import './ArticlesListPage.css';

const ArticlesListPage = () => {
	return (
		<div className='articles-list-page'>
			<Header name={'Articles'} />
			<ArticlesList articles={articles} count={12} />
		</div>
	)
}

export default ArticlesListPage;