const News = require('../controllers/news');
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());

    app.route('/news').post(async (req, res, next) => {
        try {
            await News.createNews(req.body); // Pass the request body to createNews function
            return res.sendStatus(201); // Return status 201 for successful creation
        } catch (err) {
            next(err);
        }
    });

    app.route('/news').get(async (req, res, next) => {
        try {
            const allNews = await News.getAllNews(); // Await the getAllNews function
            return res.json(allNews);
        } catch (err) {
            next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
        try {
            const matchId = req.params.matchId;
            const news = await News.getNewsByMatchId(matchId); // Await the getNewsByMatchId function
            return res.json(news);
        } catch(err) {
            next(err);
        }
    });
    
    app.route('/news/tour/:tourId').get(async (req, res, next) => {
        try {
            const tourId = req.params.tourId;
            const news = await News.getNewsByTourId(tourId); // Await the getNewsByTourId function
            return res.json(news);
        } catch(err) {
            next(err);
        }
    });

    app.route('/news/sport/:sportId').get(async (req, res, next) => {
        try {
            const sportId = req.params.sportId;
            const news = await News.getNewsBySportId(sportId); // Await the getNewsBySportId function
            return res.json(news);
        } catch(err) {
            next(err);
        }
    });
};
