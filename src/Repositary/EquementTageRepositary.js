const Dotenv = require('dotenv');
Dotenv.config({ path: 'src/.env.production' });
const { isEmpty } = require('../helpers/Utils');
const { equipmentsModel } = require('../models/index');
const EquipmentsModel = equipmentsModel;

const NewEquipmentTagsQuery = {
    /***
     * create quipment
     * @param queryOptions
     * @returns {Promise<queryOptions>}
     */
    createEquipmentTags: async (queryOptions) => {
        let document = queryOptions ?? {};
        let options = queryOptions ?? {};
        let NewEquipment = await EquipmentsModel.create([document], options);
        return NewEquipment[0];
    },
    /**
     * find value
     * @param {*} condition
     * @param {*} projection
     * @param {*} useLean
     * @returns
     */
    findOneEquipmentTags: async (condition, projection) => {
        console.log('condition', condition);
        if (isEmpty(projection)) projection = {};
        // let NewEquipmentData = await NewEquipmentTagsModel.findOne(condition, projection);
        // console.log(123, NewEquipmentData);
        // return NewEquipmentData;
        return await EquipmentsModel.findOne(condition, projection);
    },
    /**
     * find new_equipment
     * @param {*} condition
     * @param {*} projection
     * @param {*} islean
     * @returns
     */
    findEquipmentTags: async (condition, projection, islean = true) => {
        let NewEquipment = await EquipmentsModel.find(condition, projection).lean(islean);
        console.log('NewEquipment', NewEquipment);
        return NewEquipment;
    },
    /**
     * update new_equipment
     * @param {*} condition
     * @param {*} projection
     * @returns
     */
    updateEquipmentTags: async (condition, projection) => {
        if (isEmpty(projection)) projection = { new: true };
        return await EquipmentsModel.findOneAndUpdate(condition, projection);
    },
    /**
     * delete value
     * @param {*} condition
     * @returns
     */
    deleteEquipmentTags: async (condition) => {
        console.log('condition', condition);
        let options = condition || {};
        console.log('options', options);
        return await EquipmentsModel.deleteOne(condition, options);
    }
};

module.exports = NewEquipmentTagsQuery;
