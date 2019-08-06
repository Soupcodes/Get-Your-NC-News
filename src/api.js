import axios from "axios";
const request = axios.create({
  baseURL: "https://alansoup-nc-news.herokuapp.com/api"
});

export const getArticles = async query => {
  const { data } = await request.get("/articles", { params: query });
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

export const getCommentsByArticleId = async id => {
  const { data } = await request.get(`/articles/${id}/comments`);
  return data.comments;
};

export const postCommentToArticle = async (id, comment) => {
  const { data } = await request.post(`/articles/${id}/comments`, comment);
  console.log(data, "Your post is here");
  return data.comment;
};

export const deleteCommentById = async comment_id => {
  console.log(comment_id, "deleting from back-end");
  const { status } = await request.delete(`/comments/${comment_id}`);
  return status;
};
