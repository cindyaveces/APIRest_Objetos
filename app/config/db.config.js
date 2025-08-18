module.exports = {
  HOST: "ep-still-truth-a82xgbss-pooler.eastus2.azure.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_UhyG0YWV1nBv",
  DB: "neondb",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};