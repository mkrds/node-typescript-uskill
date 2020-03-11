import envalid from "envalid";
const { str } = envalid;
const env = envalid.cleanEnv(process.env, {
  APP_PORT: str({ default: "3000" }),
  DB_HOST: str({ default: "localhost" }),
  DB_PORT: str({ default: "27017" }),
  DB_NAME: str({ default: "local" })
});

const config = {
  app: {
    port: env.APP_PORT
  },
  db: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    name: env.DB_NAME
  }
};

export default config;
