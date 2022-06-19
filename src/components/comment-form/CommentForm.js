import { useState } from 'react';

import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap'

const CommentForm = ({ articleName, setArticleInfo }) => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [commentText, setCommentText] = useState('');

	const addComment = async () => {
		const result = fetch(`/api/articles/${articleName}/add-comment`, {
			method: 'POST',
			body: JSON.stringify({ userName, text: commentText }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const body = await result.json();
		setArticleInfo(body);
	}

	return (
		<div>
			<h3>Add comment</h3>
			<Form onSubmit={addComment}>
				<Row className="mb-3">
					<Form.Group controlId="addCommentName" as={Col} xs={3}>
						<FloatingLabel label="Name*">
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={userName}
								onChange={(event) => setUserName(event.target.value)}
								required
							/>
						</FloatingLabel>
					</Form.Group>
					<Form.Group controlId="addCommentEmail" as={Col}>
						<FloatingLabel label="Email">
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={userEmail}
								onChange={(event) => setUserEmail(event.target.value)}
							/>
						</FloatingLabel>
						<Form.Text>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
				</Row>
				<Form.Group className="mb-3" controlId="addCommentText">
					<FloatingLabel label="Comment*">
						<Form.Control
							as="textarea"
							style={{ height: '100px' }}
							value={commentText}
							onChange={(event) => setCommentText(event.target.value)}
							required
						/>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="mb-3" controlId="addCommentAgreement">
					<Form.Check
						type="checkbox"
						label="Terms and conditions agreement*"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add
				</Button>
			</Form>
		</div>
	)
}

export default CommentForm;