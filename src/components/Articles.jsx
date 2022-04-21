import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../css/Articles.css';
import ArticlesList from './ArticlesList';
import FilterSort from './FilterSort';

const Articles = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortBy, setSortBy] = useState(
		searchParams.get('sort_by') ? searchParams.get('sort_by') : 'created_at'
	);
	const [order, setOrder] = useState(
		searchParams.get('order') ? searchParams.get('order') : 'DESC'
	);
	const topic = searchParams.get('topic');
	const pageTitle = topic ? `Articles on ${topic}` : 'All Articles';

	return (
		<div>
			<h2>{pageTitle}</h2>
			<FilterSort setSortBy={setSortBy} setOrder={setOrder} />
			<ArticlesList topic={topic} order={order} sortBy={sortBy} />
		</div>
	);
};

export default Articles;
