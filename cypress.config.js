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
        userName: "sa",
        password: "home",
        server: "127.0.0.1",
        options: {
          database: "PortalDev",
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
          port: 56230,
          timeout:70000
          // Default Port
        },
      },
    },
  },
});
