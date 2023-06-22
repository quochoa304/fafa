const mongoose = require('mongoose')


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:admin123@cluster0.skquvbc.mongodb.net/admin?retryWrites=true&w=majority';


module.exports = {
    connectToDB: (cd) => {
        MongoClient.connect(url)
            .then((client) => {
                dbConnection = client.db()
                return connectDB()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDB: () => dbConnection
}

const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URL, {
            //  useCreateIndex: true,
            //useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection open');

        // Tăng thời gian timeout cho hoạt động chèn dữ liệu
        mongoose.set('bufferTimeoutMS', 60000);
    }) // timeout lớn hơn là 60 giây

module.exports = connectDB;