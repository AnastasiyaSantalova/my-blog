import { Button } from "react-bootstrap";

import './UpvotesSection.css';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		const result = await fetch(`/api/articles/${articleName}/upvote`, {
			method: 'POST'
		});

		const body = await result.json();
		setArticleInfo(body);
	}

	return (
		<div className="upvotes-section">
			<Button onClick={upvoteArticle} variant="primary">&#9829; {upvotes}</Button>
		</div>
	)
}

export default UpvotesSection;