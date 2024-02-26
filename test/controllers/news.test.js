const News = require('../../src/models/news')
jest.mock('../../src/models/news')
const {
    createNews,
    getNewsByTourId,
    getNewsByMatchId,
    getNewsBySportId,
    getAllNews,
  } = require("../../src/controllers/news");

describe('News Functions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createNews', () => {
        it('should call News.createNews with correct parameters', async () => {
            const params = {
                title: 'Test Title',
                description: 'Test Description',
                matchId: 1,
                tourId: 1
            };

            await createNews(params);

            expect(News.createNews).toHaveBeenCalledWith(
                params.title,
                params.description,
                params.matchId,
                params.tourId
            );
        });
    });

    describe('getAllNews', () => {
        it('should call News.getAllNews', async () => {
            await getAllNews();
            expect(News.getAllNews).toHaveBeenCalledWith();
        });
    }); 

    describe('getNewsByMatchId', () => {
        it('should call News.getNewsByMatchId with correct parameters', async () => {
            const params = { matchId : 1};
            await getNewsByMatchId(params);
            expect(News.getNewsByMatchId).toHaveBeenCalledWith(params.matchId);
        });
    })

    describe('getNewsBySportId', () => {
        it('should call News.getNewsBySportId with correct parameters', async () => {
            const params = { sportId: 1};
            await getNewsBySportId(params);

            expect(News.getNewsBySportId).toHaveBeenCalledWith(params.sportId);
        });
    });

    describe('getNewsByTourId', () => {
        it('should call News.getNewsByTourId with correct parameters', async () => {
            const params = { tourId: 1 };
            await getNewsByTourId(params);
            expect(News.getNewsByTourId).toHaveBeenCalledWith(params.tourId);
        })
    })
})