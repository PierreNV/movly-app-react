const db = require("./startup/db");
require(db);

const handler = async (event) => {
  try {
    const database = await clientPromise.db(process.env.URI);
    const collection = database.collection(process.env.COLLECTION_GENRES);
    const results = await database.find({});
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {}
};

module.export = { handler };
