import pages from "../../mock/pages-mocked";

import Header from "../../components/header/Header";

import './AboutPage.css';

const AboutPage = () => {
	const aboutPage = pages.find(page => page.name === 'about');
	const pageContent = { __html: aboutPage.content };

	return (
		<div className="about-page">
			<Header name={'About me'} />
			<div dangerouslySetInnerHTML={pageContent}></div>
		</div>
	)
}

export default AboutPage;