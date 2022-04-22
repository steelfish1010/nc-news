import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';

const ArticlesList = ({ topic, order, sortBy }) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);
		setError(null);
		getArticles(sortBy, order, topic)
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err);
				setIsLoading(false);
			});
	}, [sortBy, order, topic]);

	if (error) {
		return <h2>Sorry, no articles found on the topic of {topic}.</h2>;
	}
	return (
		<div className='Articles-list'>
			{isLoading && <h2>Loading articles...</h2>}

			<ul className='Articles-list__list'>
				{articles.map((article) => {
					const { article_id, title, author, votes, comment_count } = article;
					return (
						<li key={article_id} className='Articles-list__article-card'>
							<h3>
								<Link to={`/articles/${article_id}`} className='Link'>{title}</Link>
							</h3>
							<p>
								Written by: {author} Votes: {votes} Comments: {comment_count}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ArticlesList;
