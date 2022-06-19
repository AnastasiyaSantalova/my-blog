import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ArticleCard.css";

const ArticleCard = props => {
	const article = props.article;
	const content = {__html: article.content.substr(0,150)+'...'};

	return (
		<Card
			bg='dark'
			text='light'
			style={{ width: '18rem' }}
			className="mb-2 article-card"
		>
			<Card.Body>
				<Card.Title className="article-card__title">
					<Link to={`/articles/${article.url}`}>
						{article.name}
					</Link>
				</Card.Title>
				<Card.Text dangerouslySetInnerHTML={content}></Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ArticleCard;