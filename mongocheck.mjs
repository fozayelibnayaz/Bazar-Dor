import { MongoClient } from "mongodb";

try {
  const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  await client.db().command({ ping: 1 });
  console.log("✅ Mongo connected — DB OK");
  await client.close();
} catch (error) {
  console.log("❌ FAILED:", error.name);
  console.log("   ", String(error.message).split("\n")[0]);
}
