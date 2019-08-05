import axios from "axios";
const request = axios.create({
  baseURL: "https://alansoup-nc-news.herokuapp.com/api"
});

export const getArticles = async query => {
  console.log(query, "IN API QUERY");
  const { data } = await request.get("/articles", { params: query });
  return data.articles;
};

export const getUsers = async query => {
  const { data } = await request.get(`/users/${query}`);
  return data.user;
};

export const getTopics = async query => {
  const { data } = await request.get("/topics");
  const topics = data.topics.map(topic => {
    const capitalised = `${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`;
    return { slug: capitalised, ...data.topics };
  });
  return topics;
};
