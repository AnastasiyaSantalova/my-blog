import pages from "../../mock/pages-mocked";

const AboutPage = () => {
    const aboutPage = pages.find(page => page.name === 'about');
	const pageContent = {__html: aboutPage.content};

    return (
        <>
            <h1>About me</h1>
            <div dangerouslySetInnerHTML={pageContent}></div>
        </>
    )
}

export default AboutPage;