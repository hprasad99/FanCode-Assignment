const News = require("../models/news");

const createNews = async (params) => {
  const { title, description, matchId, tourId } = params;
  await News.createNews(title, description, matchId, tourId);
};

const getAllNews = async () => {
  return await News.getAllNews();
}


const getNewsByMatchId = async (params) => {
  const matchId = params.matchId;
  const news = await News.getNewsByMatchId(matchId);
  return news;
};

const getNewsBySportId = async (params) => {
  const sportId = params.matchId;
  const news = await News.getNewsBySportId(sportId);
  return news;
};

const getNewsByTourId = async (params) => {
  const tourId = params.tourId;
  const news = await News.getNewsByTourId(tourId);
  return news;
};

module.exports = {
  getNewsByMatchId: getNewsByMatchId,
  getNewsBySportId: getNewsBySportId,
  createNews: createNews,
  getNewsByTourId: getNewsByTourId,
  getAllNews: getAllNews
};
