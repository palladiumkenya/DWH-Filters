const { defineConfig } = require("cypress");
const sqlServer = require("cypress-sql-server");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      tasks = sqlServer.loadDBPlugin(config.env.db);
      on("task", tasks);

      // implement node event listeners here
    },
    env: {
      db: {
        userName: "",
        password: "",
        server: "",
        options: {
          database: "",
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
          port: 55557, // Default Port
        },
      },
    },
  },
});
