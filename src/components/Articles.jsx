import { useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
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
	const paramsTopic = useParams().topic;
	const topic = paramsTopic ? paramsTopic : searchParams.get('topic');

	const pageTitle = topic ? `Articles on ${topic}` : 'All Articles';

	return (
		<div className='Articles'>
			<h2 className='Articles__title'>{pageTitle}</h2>
			<FilterSort
				sortBy={sortBy}
				setSortBy={setSortBy}
				order={order}
				setOrder={setOrder}
			/>
			<ArticlesList topic={topic} order={order} sortBy={sortBy} />
		</div>
	);
};

export default Articles;
