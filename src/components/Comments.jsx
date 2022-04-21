import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import AddComment from './AddComment';
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

	if (!comments.length) return <h3>Loading comments...</h3>;
	return (
		<>
			<AddComment setComments={setComments} article_id={article_id} />
			<Expand title={'comments'} startOpen={true}>
				<CommentsList comments={comments} />
			</Expand>
		</>
	);
};

export default Comments;
