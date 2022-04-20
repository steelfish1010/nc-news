import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import CommentsList from './CommentsList';
import Expand from './Expand';

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
			});
	}, [article_id]);

	return (
		<Expand title={'comments'}>
			<CommentsList comments={comments} />
		</Expand>
	);
};

export default Comments;
