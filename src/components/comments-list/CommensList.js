import Subheader from "../subheader/Subheader"

const CommentsList = ({ comments }) => {

	return (
		<>
			{comments.length === 0 ? <></> : <Subheader name={'Comments'} />}
			{comments.map((comment, key) => {
				return (
					<div className="comment-wrapper" key={key}>
						<hr />
						<h4>{comment.userName}</h4>
						<p>{comment.text}</p>
					</div>
				)
			})}
		</>
	)
}

export default CommentsList;