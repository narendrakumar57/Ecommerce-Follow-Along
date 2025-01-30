const mongoose = require("mongoose");
const connectDatabase = ()=>{
    mongoose
    .connect(process.env.db_URL)
    .then((data)=>{
        console.log(`MongoDB connected with server: ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(`Database connectio failed: ${err.message}`)
        process.exit(1)
    })
}

module.exports = connectDatabase;