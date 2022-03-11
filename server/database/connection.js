const mongooes = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb conn string
        const con = await mongooes.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })

        console.log(`MongoDB connected: ${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;