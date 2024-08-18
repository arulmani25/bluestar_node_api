const Dotenv = require('dotenv');
Dotenv.config({ path: 'src/.env.production' });
const { isEmpty } = require('../helpers/Utils');
const { newEquipmentTags } = require('../models/index');
const NewEquipmentTagsModel = newEquipmentTags;

const NewEquipmentTagsQuery = {
    /***
     * create new_equipment
     * @param queryOptions
     * @returns {Promise<queryOptions>}
     */
    createNewEquipmentTags: async (queryOptions) => {
        let document = queryOptions ?? {};
        let options = queryOptions ?? {};
        let NewEquipment = await NewEquipmentTagsModel.create([document], options);
        return NewEquipment[0];
    },
    /**
     * find value
     * @param {*} condition
     * @param {*} projection
     * @param {*} useLean
     * @returns
     */
    findOneNewEquipmentTags: async (condition, projection) => {
        console.log('condition', condition);
        if (isEmpty(projection)) projection = {};
        // let NewEquipmentData = await NewEquipmentTagsModel.findOne(condition, projection);
        // console.log(123, NewEquipmentData);
        // return NewEquipmentData;
        return await NewEquipmentTagsModel.findOne(condition, projection);
    },
    /**
     * find new_equipment
     * @param {*} condition
     * @param {*} projection
     * @param {*} islean
     * @returns
     */
    findNewEquipmentTags: async (condition, projection, islean = true) => {
        let NewEquipment = await NewEquipmentTagsModel.find(condition, projection).lean(islean);
        console.log('NewEquipment', NewEquipment);
        return NewEquipment;
    },
    /**
     * update new_equipment
     * @param {*} condition
     * @param {*} projection
     * @returns
     */
    updateNewEquipmentTags: async (condition, projection) => {
        if (isEmpty(projection)) projection = { new: true };
        return await NewEquipmentTagsModel.findOneAndUpdate(condition, projection);
    },
    /**
     * delete value
     * @param {*} condition
     * @returns
     */
    deleteEquipmentTags: async (condition) => {
        let options = condition || {};
        return await NewEquipmentTagsModel.deleteOne(condition, options);
    }
};

module.exports = NewEquipmentTagsQuery;
