const CommentsList = ({ comments }) => {
	console.log(comments, '<< comments in CommentsList');
	return (
		<ul>
			{comments.map((comment) => {
				const { body, author, votes, comment_id, created_at } = comment;
				return (
					<li key={comment_id}>
						<p>
							Posted by {author} on {created_at}
						</p>
						<p>{body}</p>
						<p>{votes}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default CommentsList;
