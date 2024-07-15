import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
// import sequelize from "../connsection/db.js";

const order=sequelize.define('orders',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    customerid:{
        type:DataTypes.INTEGER,allowNull:false
    },orderDate:{
        type:DataTypes.DATE,defaultValue:DataTypes.NOW
    },
    totalAmount:{
        type:DataTypes.FLOAT,allowNull:false
    }
})
export default order;