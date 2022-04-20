import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import Votes from './Votes';

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const [error, setError] = useState(null);
	const { article_id } = useParams();
	const { title, body, topic, author, votes, created_at, comment_count } =
		article;

	useEffect(() => {
		getArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
			})
			.catch((err) => {
				setError(err);
			});
	}, [article_id]);

	if (error) {
		return (
			<p>
				Sorry, can't find that article number. Please try another article or go{' '}
				<Link to='/'>back to home</Link>
			</p>
		);
	}

	return (
		<>
			<h2>{title}</h2>
			<h3>
				Written by: {author} on {created_at}
			</h3>
			<p>{body}</p>
			<p>
				Topic: <Link to={`/articles?topic=${topic}`}>{topic}</Link>
				Votes: {votes}
				<Votes article_id={article_id} setArticle={setArticle} votes={votes} />
				Comments: {comment_count}
			</p>
		</>
	);
};

export default SingleArticle;
