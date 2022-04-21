import { useEffect, useState } from 'react';
import { getCommentsByArticleId, deleteComment } from '../utils/api';
import AddComment from './AddComment';
import Expand from './Expand';

const Comments = ({ article_id, user }) => {
	const [comments, setComments] = useState([]);
	const [deleting, setDeleting] = useState(false);
	const [getError, setGetError] = useState(null);
	const [deleteError, setDeleteError] = useState(0);

	useEffect(() => {
		getCommentsByArticleId(article_id)
			.then((response) => {
				setComments(response);
			})
			.catch((err) => {
				setGetError(err);
			});
	}, [article_id]);

	const handleDelete = (comment_id) => {
		setDeleting(true);
		setDeleteError(0);
		deleteComment(comment_id)
			.then(() => {
				setComments((currComments) =>
					currComments.filter((comment) => comment.comment_id !== comment_id)
				);
				setDeleting(false);
			})
			.catch(() => setDeleteError(comment_id));
	};

	if (!comments.length) return <h3>Loading comments...</h3>;
	return (
		<>
			<AddComment
				setComments={setComments}
				article_id={article_id}
				user={user}
			/>
			{deleting && <p>Deleting comment...</p>}
			{deleteError && (
				<p>Sorry, couldn't delete that comment. Please try again</p>
			)}
			<Expand title={'comments'} startOpen={false}>
				<ul>
					{comments.map((comment) => {
						const { body, author, votes, comment_id, created_at } = comment;
						return (
							<li key={comment_id}>
								<p>
									Posted by {author} on {created_at}
								</p>
								<p>{body}</p>
								<p>Votes: {votes}</p>
								{author === user && (
									<button
										onClick={() => {
											handleDelete(comment_id);
										}}
									>
										Delete comment
									</button>
								)}
							</li>
						);
					})}
				</ul>
			</Expand>
		</>
	);
};

export default Comments;
