let{Sequelize, Model, DataTypes, Op}=require("sequelize");
let config=require("config");
let mysql=config.get("mysql");

let sequelizeCon=new Sequelize(mysql);
sequelizeCon.authenticate().then((data)=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log("db error",error)
});
module.exports={sequelizeCon, Model, DataTypes, Op}