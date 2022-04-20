import axios from 'axios';

const myApi = axios.create({
	baseURL: 'https://be-news-project-example.herokuapp.com/api',
});

export const getArticles = (topic) => {
	return myApi
		.get('/articles', {
			params: {
				topic: topic,
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
