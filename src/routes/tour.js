const Tour = require('../controllers/tour');
const NodeCache = require('node-cache');
const tourCache = new NodeCache({stdTTL: 300});

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            const cacheKey = JSON.stringify(params);

            let cachedResult = tourCache.get(cacheKey);
            if(cachedResult) {
                console.log("Here!");
                return res.json(cachedResult);
            }

            let result = await Tour.getMatchesByTourName(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}