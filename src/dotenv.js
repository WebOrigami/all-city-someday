import dotenv from "dotenv";
import process from "process";

dotenv.config({
  path: new URL("../.env", import.meta.url).pathname,
  quiet: true,
});

// Offer access to environment variables after loading .env file.
export default () => process.env;
