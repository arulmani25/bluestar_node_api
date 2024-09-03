const Dotenv = require('dotenv');
Dotenv.config({ path: 'src/.env.production' });
const { mainactivityModel } = require('../models/index');
const MainactivityModel = mainactivityModel;

const MainactivityQuery = {
    /***
     *
     */
    findMainactivity: async (condition, projection, islean = true) => {
        let Mainactivity = await MainactivityModel.find(condition, projection).lean(islean);
        console.log('Mainactivity', Mainactivity);
        return Mainactivity;
    }
};

module.exports = MainactivityQuery;
