import axios from "axios";

const request = axios.create({
  baseURL: `https://rich-james-nc-news.herokuapp.com/api/`
});

export const getTopics = topic => {
  return request.get(`topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleSummaries = (topic, author) => {
  return request.get('/articles', {
    params: {
      topic: topic,
      author: author
    }
  }).then(({ data }) => {
    return data.articles;
  })
}

// {
//   params: {
//     topic: topic,
//       author: author,
//     //sort by etc
//     }
// })
//     .then(({ data }) => {
//   return data.articles;
// })