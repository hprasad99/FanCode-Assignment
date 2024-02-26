const mysql = require("../lib/mysql");

const createNews = async (title, description, matchId, tourId) => {
  const statement =
    "INSERT INTO news (title, description, matchId, tourId) VALUES (?, ?, ?, ?)";
  const parameters = [title, description, matchId, tourId];
  return await mysql.query(statement, parameters);
};

const getAllNews = async () => {
  const statement = 'select * FROM news;';
  const parameters = [];
  return await mysql.query(statement, parameters);
};

const getNewsByMatchId = async (matchId) => {
  const statement =
    "SELECT news.title, news.description, matches.name AS matchName, matches.startTime AS matchStartTime, matches.format AS matchFormat, tours.name AS tourName, sports.name AS sportName FROM news INNER JOIN matches ON news.matchId = matches.id INNER JOIN tours ON matches.tourId = tours.id INNER JOIN sports ON tours.sportId = sports.id WHERE news.matchId = ?";
  const parameters = [matchId];
  return await mysql.query(statement, parameters);
};

const getNewsByTourId = async (tourId) => {
  const statement =
    "SELECT news.title, news.description, matches.name AS matchName, matches.startTime AS matchStartTime, matches.format AS matchFormat, tours.name AS tourName, sports.name AS sportName FROM news INNER JOIN matches ON news.matchId = matches.id INNER JOIN tours ON matches.tourId = tours.id INNER JOIN sports ON tours.sportId = sports.id WHERE news.tourId = ?";
  const parameters = [tourId];
  return await mysql.query(statement, parameters);
};

const getNewsBySportId = async (sportId) => {
  const statement =
    "SELECT news.title, news.description, matches.name AS matchName, matches.startTime AS matchStartTime, matches.format AS matchFormat, tours.name AS tourName, sports.name AS sportName FROM news INNER JOIN matches ON news.matchId = matches.id INNER JOIN tours ON matches.tourId = tours.id INNER JOIN sports ON tours.sportId = sports.id WHERE sports.id = ?";
  const parameters = [sportId];
  return await mysql.query(statement, parameters);
};

module.exports = {
  createNews: createNews,
  getNewsByTourId: getNewsByTourId,
  getNewsByMatchId: getNewsByMatchId,
  getNewsBySportId: getNewsBySportId,
  getAllNews: getAllNews
};
