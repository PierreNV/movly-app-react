const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.DB);
const clientPromise = mongoClient.connect();

const handlerGenres = async (event) => {
  try {
    const database = await clientPromise.db(process.env.URI);
    const collection = database.collection(process.env.COLLECTION_GENRES);
    const genres = await collection.find({});
    return { statusCode: 200, body: JSON.stringify(genres) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.export = { handlerGenres };
