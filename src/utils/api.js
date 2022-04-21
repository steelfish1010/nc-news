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

export const getCommentsByArticleId = (article_id) => {
	return myApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const updateVotes = (article_id, vote) => {
	return myApi
		.patch(`/articles/${article_id}`, { inc_votes: vote })
		.then(({ data }) => {
			return data.article;
		});
};

export const postComment = (article_id, body, username) => {
	return myApi
		.post(`/articles/${article_id}/comments`, {
			body: body,
			username: username,
		})
		.then(({ data }) => {
			return data.comment;
		});
};

export const deleteComment = (comment_id) => {
	return myApi.delete(`/comments/${comment_id}`);
};
