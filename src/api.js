import axios from "axios";
const request = axios.create({
  baseURL: "https://alansoup-nc-news.herokuapp.com/api"
});

export const getArticles = async query => {
  const { data } = await request.get("/articles");
  return data.articles;
};

export const getUsers = async query => {
  const { data } = await request.get(`/users/${query}`);
  return data.user;
};
