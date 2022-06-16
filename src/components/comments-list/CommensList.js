const CommentsList = ({ comments }) => {

	return (
		<>
			{comments.length === 0 ? <></> : <h3>Comments</h3>}
			{comments.map((comment, key) => {
				return (
					<div className="comment-wrapper" key={key}>
						<h4>{comment.userName}</h4>
						<p>{comment.text}</p>
					</div>
				)
			})}
		</>
	)
}

export default CommentsList;