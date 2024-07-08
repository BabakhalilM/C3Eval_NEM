import { Sequelize } from "sequelize";
import {} from 'dotenv/config.js';

const sequelize = new Sequelize(process.env.Sql_aiven_DB, process.env.Sql_aiven_user, process.env.Sql_aiven_password, {
    host: process.env.Sql_aiven_Host,
    dialect: 'mysql',
});

export default sequelize;
