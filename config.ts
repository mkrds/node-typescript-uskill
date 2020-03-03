const config = {
  app: {
    port: parseInt(process.env.APP_PORT) || 3000
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || "local"
  }
};

export default config;
