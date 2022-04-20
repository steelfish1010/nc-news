import { useEffect, useState } from 'react';
import { updateVotes } from '../utils/api';

const Votes = ({ article_id, setArticle }) => {
	const [hasVoted, setHasVoted] = useState(false);
	const [vote, setVote] = useState(0);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!hasVoted) return;
		setArticle((currArticle) => {
			return { ...currArticle, votes: currArticle.votes + vote };
		});
		updateVotes(article_id, vote)
			.then((response) => console.log(response.votes, '<< updated votes'))

			.catch((err) => {
				setArticle((currArticle) => {
					return { ...currArticle, votes: currArticle.votes - vote };
				});
				setError(err);
				setHasVoted(false);
				setVote(0);
			});
	}, [hasVoted]);

	return (
		<>
			<button
				onClick={() => {
					setHasVoted(true);
					setVote(1);
				}}
			>
				Upvote
			</button>
			<button
				onClick={() => {
					setHasVoted(true);
					setVote(-1);
				}}
			>
				Downvote
			</button>
			<>{error ? 'Sorry, vote not registered, please try again' : null}</>
		</>
	);
};

export default Votes;
