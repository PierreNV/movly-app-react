const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.DB);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = await clientPromise.db(process.env.URI);
    const collection = database.collection(process.env.COLLECTION_MOVIES);
    const movies = await collection.find({});
    return { statusCode: 200, body: JSON.stringify(movies) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.export = { handler };
