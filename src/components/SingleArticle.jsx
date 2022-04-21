import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import AddComment from './AddComment';
import Comments from './Comments';
import Votes from './Votes';

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { article_id } = useParams();
	const { title, body, topic, author, votes, created_at, comment_count } =
		article;

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
			})
			.catch((err) => {
				setError(err);
			});
		setIsLoading(false);
	}, [article_id]);

	if (error) {
		return (
			<p>
				Sorry, can't find that article number. Please try another article or go{' '}
				<Link to='/'>back to home</Link>
			</p>
		);
	}
	if (!Object.keys(article).length) return <h3>Loading...</h3>;

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
			<Comments article_id={article_id} />
		</>
	);
};

export default SingleArticle;
