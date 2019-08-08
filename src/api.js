import axios from "axios";
const request = axios.create({
  baseURL: "https://alansoup-nc-news.herokuapp.com/api"
});

export const getArticles = async query => {
  // console.log(query, "querying");
  const { data } = await request.get("/articles", { params: query });
  // console.log(data, "data in api");
  return data.articles;
};

export const getArticleById = async id => {
  const { data } = await request.get(`/articles/${id}`);
  return data.article;
};

export const getUser = async username => {
  const { data } = await request.get(`/users/${username}`);
  return data.user;
};

export const getTopics = async query => {
  const { data } = await request.get("/topics");
  const topics = data.topics.map(topic => {
    return topic;
  });
  return topics;
};

export const getCommentsByArticleId = async (id, query) => {
  const { data } = await request.get(`/articles/${id}/comments`, {
    params: query
  });
  return data.comments;
};

export const postCommentToArticle = async (id, comment) => {
  const { data } = await request.post(`/articles/${id}/comments`, comment);
  return data.comment;
};

export const deleteCommentById = async comment_id => {
  const { status } = await request.delete(`/comments/${comment_id}`);
  return status;
};

export const patchArticleById = async (article_id, inc_votes) => {
  const { data } = await request.patch(`/articles/${article_id}`, inc_votes);
  return data.article;
};

export const patchCommentById = async (comment_id, inc_votes) => {
  const { data } = await request.patch(`/comments/${comment_id}`, inc_votes);
  return data.comment;
};
