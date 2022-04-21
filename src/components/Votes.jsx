import { useEffect, useState } from 'react';
import { updateVotes } from '../utils/api';

const Votes = ({ article_id, setArticle }) => {
	const [upVote, setUpVote] = useState(false);
	const [downVote, setDownVote] = useState(false);
	const [vote, setVote] = useState(0);
	const [error, setError] = useState(null);
	let btnUp = document.querySelector('#upvote');
	let btnDown = document.querySelector('#downvote');

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
				id='upvote'
				className='Votes__vote-button'
				onClick={() => {
					if (upVote && downVote) {
						console.log('Error! up and down vote at same time');
					} else if (!upVote && !downVote) {
						setVote(1);
						setUpVote(true);
						btnUp.style.backgroundColor = '#008000';
						btnDown.style.backgroundColor = '#C0C0C0';
					} else if (upVote) {
						setVote(-1);
						setUpVote(false);
						btnUp.style.backgroundColor = '#C0C0C0';
					} else if (downVote) {
						setVote(2);
						setUpVote(true);
						setDownVote(false);
						btnUp.style.backgroundColor = '#008000';
						btnDown.style.backgroundColor = '#C0C0C0';
					}
				}}
			>
				Upvote
			</button>
			<button
				id='downvote'
				className='Votes__vote-button'
				onClick={() => {
					if (upVote && downVote) {
						console.log('Error! up and down vote at same time');
					} else if (!upVote && !downVote) {
						setVote(-1);
						setDownVote(true);
						btnDown.style.backgroundColor = '#800000';
						btnUp.style.backgroundColor = '#C0C0C0';
					} else if (downVote) {
						setVote(1);
						setDownVote(false);
						btnDown.style.backgroundColor = '#C0C0C0';
					} else if (upVote) {
						setVote(-2);
						setDownVote(true);
						setUpVote(false);
						btnDown.style.backgroundColor = '#800000';
						btnUp.style.backgroundColor = '#C0C0C0';
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
