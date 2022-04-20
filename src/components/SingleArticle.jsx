import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getArticleById } from '../utils/api';

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const [error, setError] = useState(null);
	const { article_id } = useParams();

	useEffect(() => {
		getArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
			})
			.catch((err) => {
				setError(err);
			});
	}, [article_id]);
	const { title, body, topic, author, votes, created_at, comment_count } =
		article;

	if (error) {
		return (
			<p>
				Sorry, can't find that article number. Please try another article or go{' '}
				<Link to='/'>back to home</Link>
			</p>
		);
	}

	return (
		<div>
			<h2>{title}</h2>
			<h3>
				Written by: {author} on {created_at}
			</h3>
			<p>{body}</p>
			<p>
				Topic: <Link to={`/articles?topic=${topic}`}>{topic}</Link>
				Votes: {votes} Comments: {comment_count}
			</p>
		</div>
	);
};

export default SingleArticle;
