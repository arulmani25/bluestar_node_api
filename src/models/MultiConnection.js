/* eslint-disable no-async-promise-executor */
/* eslint-disable no-useless-catch */
const mongoose = require('mongoose');
const Config = require('../config/Config');
const DB_URL = Config.DB_URL;

const MultiDBConnection = {
    establish: async (Express) => {
        return await new Promise(async (resolve) => {
            let productDBCheck = false;

            mongoose.set('strictQuery', true);
            try {
                mongoose.connect(DB_URL.PRODUCT_URL, {
                    // useNewUrlParser: true,
                    // useUnifiedTopology: true,
                    connectTimeoutMS: 30000,
                    serverSelectionTimeoutMS: 30000
                });
                console.log(' database connection established');
                productDBCheck = true;
            } catch (error) {
                throw error;
            }
            mongoose.set('debug', true);

            resolve([productDBCheck]);
        })
            .then(() => {
                Express.listen('3030', () => {
                    console.log('server is running in 3030');
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
