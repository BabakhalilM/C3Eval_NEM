import { Sequelize } from "sequelize";
import { } from 'dotenv/config.js';

const sequelize = new Sequelize(process.env.Sql_aiven_DB, process.env.Sql_aiven_user, process.env.Sql_aiven_password, {
    host: process.env.Sql_aiven_Host,
    dialect: 'mysql',
});

export default sequelize;




// sql_aiven_password=AVNS_82iqgZ92whrUtyO4JF2
// Sql_aiven_user=avnadmin

// Sql_aiven_Host= mysql-6ac7fe7-babakhalilmalyam2-fd25.h.aivencloud.com
// Sql_aiven_port=23372