require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  // environment variables
  APP_ID: process.env.APP_ID,
  API_KEY: process.env.API_KEY,
  BASE_URL: "https://api.adzuna.com/v1/api/jobs",  //API from https://api.adzuna.com/v1/api/
};