import "dotenv/config";
import process from "node:process";

// We need to give Google a credentials object but don't want to expose our
// private key so we read the private bits from environment variables.
export default {
  type: "service_account",
  project_id: "web-origami",
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: "110799034395491179551",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/web-origami-service-account%40web-origami.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
