import { useEffect, useState } from 'react';
import { updateVotes } from '../utils/api';

const Votes = ({ article_id, setArticle }) => {
	const [upVote, setUpVote] = useState(false);
	const [downVote, setDownVote] = useState(false);
	const [vote, setVote] = useState(0);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!vote) return;
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
				// setHasVoted(false);
				setVote(0);
			});
	}, [upVote, downVote]);

	return (
		<>
			<button
				className='Votes__vote-button'
				onClick={() => {
					if (upVote && downVote) {
						console.log('Error! up and down vote at same time');
					} else if (!upVote && !downVote) {
						setVote(1);
						setUpVote(true);
					} else if (upVote) {
						setVote(-1);
						setUpVote(false);
					} else if (downVote) {
						setVote(2);
						setUpVote(true);
						setDownVote(false);
					}
				}}
			>
				Upvote
			</button>
			<button
				className='Votes__vote-button'
				onClick={() => {
					if (upVote && downVote) {
						console.log('Error! up and down vote at same time');
					} else if (!upVote && !downVote) {
						setVote(-1);
						setDownVote(true);
					} else if (downVote) {
						setVote(1);
						setDownVote(false);
					} else if (upVote) {
						setVote(-2);
						setDownVote(true);
						setUpVote(false);
					}
				}}
			>
				Downvote
			</button>
			<>{error ? 'Sorry, vote not registered, please try again' : null}</>
		</>
	);
};

export default Votes;
