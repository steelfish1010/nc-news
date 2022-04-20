import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getArticles } from '../utils/api';
import '../css/Articles.css';

const Articles = () => {
	const [articles, setArticles] = useState([]);

	const queries = new URLSearchParams(useLocation().search);
	const sortBy = queries.get('sort_by');
	const order = queries.get('order');
	const topic = queries.get('topic');
	useEffect(() => {
		getArticles(sortBy, order, topic)
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
			})
			.catch((err) => console.log(err));
	}, [sortBy, order, topic]);

	const pageTitle = topic ? `Articles on ${topic}` : 'All Articles';

	if (articles.length === 0) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<div>
				<h2>{pageTitle}</h2>
				<ul className='Articles__article-list'>
					{articles.map((article) => {
						const { article_id, title, author, votes, comment_count } = article;
						return (
							<li key={article_id}>
								<h3>
									<Link to={`/articles/${article_id}`}>{title}</Link>
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
	}
};

export default Articles;
