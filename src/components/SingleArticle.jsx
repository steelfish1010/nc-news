import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getArticleById } from '../utils/api';

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();

	useEffect(() => {
		getArticleById(article_id).then((articleFromApi) => {
			setArticle(articleFromApi);
		});
	}, [article_id]);

	const { title, body, topic, author, votes, created_at, comment_count } =
		article;
	return (
		<div>
			<h2>{title}</h2>
			<h3>
				Written by: {author} on {created_at}
			</h3>
			<p>{body}</p>
			<p>
				{/* <Link to={`/articles/${parseInt(article_id) - 1}`}>Previous</Link> */}
				Topic: <Link to={`/articles?topic=${topic}`}>{topic}</Link>
				Votes: {votes} Comments: {comment_count}
				{/* <Link to={`/articles/${parseInt(article_id) + 1}`}>Next</Link> */}
			</p>
		</div>
	);
};

export default SingleArticle;
