import { useState } from 'react';
import { postComment } from '../utils/api';

const AddComment = ({ setComments, article_id }) => {
	const [newComment, setNewComment] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null);
		setIsPosting(true);
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
					<input
						type='text'
						required
						onChange={(e) => setNewComment(e.target.value)}
					></input>
				)}

				<button onClick={handleSubmit}>Add comment</button>
			</form>
			{error && <p>Sorry, that didnt work, please try again</p>}
		</>
	);
};

export default AddComment;
