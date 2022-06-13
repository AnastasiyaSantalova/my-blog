import ArticlesList from "../../components/articles-list/ArticlesList";
import pages from "../../mock/pages-mocked";
import articles from "../../mock/articles-mocked";

const HomePage = () => {
	const homePage = pages.find(page => page.name === 'main');
	const pageContent = {__html: homePage.content};

	return (
		<>
			<h1>Hello, welcome to my blog!</h1>
			<div dangerouslySetInnerHTML={pageContent}></div>
			<ArticlesList articles={articles} count={3} />
		</>
	)
}

export default HomePage;