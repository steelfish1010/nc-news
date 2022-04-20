import axios from 'axios';

const myApi = axios.create({
	baseURL: 'https://be-news-project-example.herokuapp.com/api',
});

export const getArticles = (sort_by, order, topic) => {
	return myApi
		.get('/articles', {
			params: {
				sort_by,
				order,
				topic,
			},
		})
		.then(({ data }) => {
			return data.articles;
		});
};

export const getArticleById = (article_id) => {
	return myApi.get(`/articles/${article_id}`).then(({ data }) => {
		return data.article;
	});
};

export const getTopics = () => {
	return myApi.get('/topics').then(({ data }) => {
		return data.topics;
	});
};

export const updateVotes = (article_id, vote) => {
	return myApi
		.patch(`/articles/${article_id}`, { inc_votes: vote })
		.then(({ data }) => {
			return data.article;
		});
};
