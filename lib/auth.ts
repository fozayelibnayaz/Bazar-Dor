import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("bazar-dor");

const vercelHosts = [
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  process.env.VERCEL_BRANCH_URL,
  process.env.VERCEL_URL,
].filter(Boolean) as string[];

const configuredUrl = process.env.BETTER_AUTH_URL ?? "";

const isLocal = configuredUrl.includes("localhost") || configuredUrl.includes("127.0.0.1");

const baseURL =
  vercelHosts.length > 0 && isLocal ? `https://${vercelHosts[0]}` : configuredUrl || undefined;

export const auth = betterAuth({
  baseURL,
  trustedOrigins: [
    "http://localhost:3000",
    "https://bazar-dor-ten-tau.vercel.app",
    "https://*.vercel.app",
    ...vercelHosts.map((host) => `https://${host.replace(/^https?:\/\//, "")}`),
  ],
  database: mongodbAdapter(db, { client, transaction: false }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
