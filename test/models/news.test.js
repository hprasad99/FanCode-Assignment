const mysql = require("../../src/lib/mysql");
const {
  createNews,
  getNewsByTourId,
  getNewsByMatchId,
  getNewsBySportId,
  getAllNews,
} = require("../../src/models/news");

jest.mock("../../src/lib/mysql");

describe("News Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createNews", () => {
    it("should call mysql.query with correct parameters", async () => {
      const title = "Test Title";
      const description = "Test Description";
      const matchId = 1;
      const tourId = 1;

      await createNews(title, description, matchId, tourId);

      expect(mysql.query).toHaveBeenCalledWith(
        expect.stringContaining("INSERT INTO news"),
        [title, description, matchId, tourId]
      );
    });
  });

  describe("getNewsByMatchId", () => {
    it("should call mysql.query with correct parameters", async () => {
      const matchId = 1;

      await getNewsByMatchId(matchId);

      expect(mysql.query).toHaveBeenCalledWith(
        expect.stringContaining("SELECT news.title"),
        [matchId]
      );
    });
  });

  describe("getNewsByTourId", () => {
    it("should call mysql.query with correct parameters", async () => {
      const tourId = 1;

      await getNewsByTourId(tourId);

      expect(mysql.query).toHaveBeenCalledWith(
        expect.stringContaining("SELECT news.title"),
        [tourId]
      );
    });
  });

  describe("getNewsBySportId", () => {
    it("should call mysql.query with correct parameters", async () => {
      const sportId = 1;

      await getNewsBySportId(sportId);

      expect(mysql.query).toHaveBeenCalledWith(
        expect.stringContaining("SELECT news.title"),
        [sportId]
      );
    });
  });

  describe("getAllNews", () => {
    it("should call mysql.query with correct parameters", async () => {
      await getAllNews();

      expect(mysql.query).toHaveBeenCalledWith(expect.stringContaining("select * FROM news"), []);
    });
  });
});
