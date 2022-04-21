import { useState } from 'react';
import { postComment } from '../utils/api';

const AddComment = ({ setComments, article_id }) => {
	const [newComment, setNewComment] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState(null);
	const [isBoxEmpty, setIsBoxEmpty] = useState(false);

	const handleChange = (e) => {
		setNewComment(e.target.value);
		setIsBoxEmpty(false);
		setError(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newComment) {
			setIsBoxEmpty(true);
			return;
		}
		setError(null);
		setIsPosting(true);
		setIsBoxEmpty(false);
		postComment(article_id, newComment)
			.then((comment) => {
				setComments((currComments) => [comment, ...currComments]);
				setIsPosting(false);
			})
			.catch((err) => {
				setError(err);
				setIsPosting(false);
			});

		setNewComment('');
	};

	return (
		<>
			<form>
				{isPosting ? (
					<p>Posting comment...</p>
				) : (
					<>
						<label name='post-comment'>Post comment</label>
						<textarea name='post-comment' onChange={handleChange}></textarea>
					</>
				)}

				<button onClick={handleSubmit}>Add comment</button>
			</form>
			{isBoxEmpty && <p>Please enter a comment and try again</p>}
			{error && <p>Sorry, that didnt work, please try again</p>}
		</>
	);
};

export default AddComment;
