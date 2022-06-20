import Carousel from 'react-bootstrap/Carousel';

const WideCarousel = ({ articles }) => {
	return (
		<Carousel>
			{articles.map((article, key) => {
				const content = {__html: `${article.content.substr(0,50)}...`};
				return (
					<Carousel.Item key={key}>
						<img
							className="d-block w-100"
							src={article.img}
							alt={`${key} slide`}
						/>
						<Carousel.Caption>
							<h3>{article.name}</h3>
							<p dangerouslySetInnerHTML={content}></p>
						</Carousel.Caption>
					</Carousel.Item>
				)
			})}
		</Carousel>
	)
}

export default WideCarousel;