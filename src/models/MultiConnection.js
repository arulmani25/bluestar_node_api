const mongoose = require('mongoose');
const Config = require('../config/Config');
const { seedRecordToDB } = require('../config/seeding');
const DB_URL = Config.DB_URL;

const MultiDBConnection = {
    establish: async (Express) => {
        return await new Promise(async (resolve) => {
            let productDBCheck = false;

            mongoose.set('strictQuery', true);
            try {
                mongoose.connect(DB_URL.PRODUCT_URL, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    connectTimeoutMS: 30000,
                    serverSelectionTimeoutMS: 30000
                });
                console.log(' database connection established');
                productDBCheck = true;
            } catch (error) {
                throw error;
            }
            mongoose.set('debug', true);

            let seedDBCheck = false;
            mongoose.set('strictQuery', true);
            try {
                await seedRecordToDB();
                console.log('seeding database connection established');
                seedDBCheck = true;
            } catch (error) {
                throw error;
            }
            mongoose.set('debug', true);

            resolve([productDBCheck, seedDBCheck]);
        })
            .then(() => {
                Express.listen('3000', () => {
                    console.log('server is running in 3000');
                });
            })
            .catch((error) => {
                throw error;
            });
    },
    getProductDBConnection: () => {
        return mongoose;
    }
};
module.exports = MultiDBConnection;
