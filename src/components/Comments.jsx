import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import CommentsList from './CommentsList';

const Comments = ({ article_id }) => {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		getCommentsByArticleId(article_id)
			.then((response) => {
				setComments(response);
			})
			.catch((err) => {
				setError(err);
				console.log(err, '<< err in Comments');
			});
	}, [article_id]);

	console.log(comments, '<< comments in Comments');
	return (
		<>
			<CommentsList comments={comments} />
		</>
	);
};

export default Comments;
