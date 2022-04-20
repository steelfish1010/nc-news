import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
	return (
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
	);
};

export default ArticlesList;
