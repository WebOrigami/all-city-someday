import "dotenv/config";
import process from "node:process";

// Offer access to environment variables after loading .env file.
export default () => process.env;
