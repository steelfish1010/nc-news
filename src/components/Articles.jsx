import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const { topic } = useParams();

	useEffect(() => {
		getArticles(topic)
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
			})
			.catch((err) => console.log(err));
	}, [topic]);

	if (articles.length === 0) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<section className='Articles'>
				<h2>Articles</h2>
				<ul>
					{articles.map((article) => {
						const { article_id, title, author, votes, comment_count } = article;
						return (
							<li key={article_id}>
								<h3>{title}</h3>

								<p>
									Written by: {author} Votes: {votes} Comments: {comment_count}
								</p>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}
};

export default Articles;
