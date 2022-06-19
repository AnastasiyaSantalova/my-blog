import { Button } from "react-bootstrap";

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
			<Button onClick={upvoteArticle} variant="primary">Add Upvote</Button>
			<p>This post has been upvoted {upvotes} times</p>
		</div>
	)
}

export default UpvotesSection;