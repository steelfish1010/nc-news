import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getArticles } from '../utils/api';
import '../css/Articles.css';
import ArticlesList from './ArticlesList';

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

	if (!articles.length) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<div>
				<h2>{pageTitle}</h2>
				<ArticlesList articles={articles} />
			</div>
		);
	}
};

export default Articles;
