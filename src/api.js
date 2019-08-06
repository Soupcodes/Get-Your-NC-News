import axios from "axios";
const request = axios.create({
  baseURL: "https://alansoup-nc-news.herokuapp.com/api"
});

export const getArticles = async query => {
  console.log(query, "IN API QUERY");
  const { data } = await request.get("/articles", { params: query });
  return data.articles;
};

export const getArticleById = async id => {
  const { data } = await request.get(`/articles/${id}`);
  return data.article;
};

export const getUsers = async username => {
  const { data } = await request.get(`/users/${username}`);
  return data.user;
};

export const getTopics = async query => {
  const { data } = await request.get("/topics");
  const topics = data.topics.map(topic => {
    // console.log(query, "QUERYING TOPIC");
    // if (query === topic) {
    //   console.log(topic.slug, "in map");
    //   return topic;
    // } else {
    return topic;
    // }
  });
  return topics;
};
