const { defineConfig } = require("cypress");
const sqlServer = require("cypress-sql-server");
const dotenv =require("dotenv");
const mysql=require("mysql2");
const process=require('process');
dotenv.config({path:".env.local"});

/* connection=mysql.createConnection ({
  
  host: process.env.E2E_DB_HOST,
  port: process.env.E2E_DB_PORT ,
  user: process.env.E2E_DB_USER,
  password: process.env.E2E_DB_PASS,
  database: process.env.E2E_DB_NAME,
});

function queryTestDb(query){
  connection.connect();

  return new Promise((resolve,reject)=>{
    connection.query(query,(error,results)=>{
      if(error) reject(error)
      else{

        //connection.end()
        return resolve(results)
      }
    })
  })
}*/




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const tasks = sqlServer.loadDBPlugin(config.env.db);
      on("task",tasks)
      on('task',{queryDb:query=>{return queryTestDb(query)},});
      on('before:browser:launch',(browser={},launchOptions) => {
        if(browser.family== 'chromium'){
          launchOptions.args.push('--disable-gpu')
        } else if(browser.family== 'electron'){
          launchOptions.args.push('--disable-gpu')
        }
        return launchOptions;
      });
    
     


      // implement node event listeners here
    },
    env: {
      db: {
      userName: process.env.MSSQL_DB_USER,
        password: process.env.MSSQL_DB_PASS,
        server: process.env.MSSQL_DB_SERVER,
        options: {
          database: "REPORTING",
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
          port: '1433',
          timeout:70000
          // Default Port
        },
      },
    },
  },
});
