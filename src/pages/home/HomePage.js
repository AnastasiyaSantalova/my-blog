import pages from "../../mock/pages-mocked";
import articles from "../../mock/articles-mocked";

import ArticlesList from "../../components/articles-list/ArticlesList";
import Header from "../../components/header/Header";
import WideCarousel from "../../components/carousel/Carousel";

import './HomePage.css';

const HomePage = () => {
	const homePage = pages.find(page => page.name === 'main');
	const pageContent = { __html: homePage.content };

	return (
		<div className="home-page">
			<WideCarousel articles={articles.slice(0, 3)} />
			<div className="home-page__content">
				<Header name={"Welcome to my blog"} />
				<div dangerouslySetInnerHTML={pageContent}></div>
				<ArticlesList articles={articles} count={3} />
			</div>
		</div>
	)
}

export default HomePage;