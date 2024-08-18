/* eslint-disable no-unsafe-optional-chaining */
const {
    createNewEquipmentTags,
    findOneNewEquipmentTags,
    deleteEquipmentTags
} = require('../../Repositary/NewEquementTageRepositary');
const { newEquipmentTags } = require('../../models/index');
const NewEquipmentTagsModel = newEquipmentTags;
const { getNanoId, isEmpty, dateFinder } = require('../../helpers/Utils');
const { ObjectId } = require('mongodb');
const qrcodeURL = require('qrcode');

const NewEquipmentTagsController = {
    /**
     * create activity
     * @param {*} requestData
     * @returns
     */
    Create: async (requestData) => {
        try {
            let uniqeID = getNanoId();
            if (
                !requestData?.equipment_tag ||
                !requestData?.cobie_tag ||
                !requestData?.type ||
                !requestData?.location ||
                !requestData?.sub_location
            ) {
                return {
                    error: 'Failed',
                    message: 'fields is not empty',
                    data: {}
                };
            }
            const existingNewEquipmentTags = await findOneNewEquipmentTags({ cobie_tag: requestData?.cobie_tag });
            if (existingNewEquipmentTags) {
                return {
                    error: 'Failed',
                    message: 'duplicate NewEquipmentTags found. Please choose a unique NewEquipment.',
                    data: {}
                };
            }
            const cobie_tag_code = await qrcodeURL.toDataURL(requestData?.cobie_tag);

            let requestObject = {
                new_equipments_id: uniqeID,
                equipment_tag: requestData?.equipment_tag,
                type: requestData?.type,
                location: requestData?.location,
                sub_location: requestData?.sub_location,
                cobie_tag: requestData?.cobie_tag,
                qrcode : cobie_tag_code
            };
            const newEquipmentTags = await createNewEquipmentTags(requestObject);
            if (isEmpty(newEquipmentTags)) {
                return {
                    error: true,
                    message: 'newequipment data is not saved properly',
                    data: undefined
                };
            }
            return {
                error: false,
                message: 'newequipment created successfully',
                data: newEquipmentTags
            };
        } catch (error) {
            return {
                error: true,
                message: error,
                data: undefined
            };
        }
    },
    /**
     * update equipment
     * @param {*} requestData
     * @returns
     */
    Update: async (requestData) => {
        try {
            if (isEmpty(requestData)) {
                return {
                    error: true,
                    message: 'input fields is not empty',
                    data: undefined
                };
            }
            let equipmentData = await findOneNewEquipmentTags({
                $or: [{ _id: new ObjectId(requestData?.id) }, { new_equipments_id: requestData?.new_equipments_id }]
            });
            if (isEmpty(equipmentData)) {
                return {
                    error: true,
                    message: 'equipmentData is not available'
                };
            }

            // Update fields using ternary operators
            equipmentData.equipment_tag = requestData?.equipment_tag
                ? requestData.equipment_tag
                : equipmentData.equipment_tag;
            equipmentData.type = requestData?.type ? requestData.type : equipmentData.type;
            equipmentData.location = requestData?.location ? requestData.location : equipmentData.location;
            equipmentData.sub_location = requestData?.sub_location
                ? requestData.sub_location
                : equipmentData.sub_location;
            equipmentData.cobie_tag = requestData?.cobie_tag ? requestData.cobie_tag : equipmentData.cobie_tag;

            // Mark fields as modified if they were updated
            if (requestData?.equipment_tag) equipmentData.markModified('equipment_tag');
            if (requestData?.type) equipmentData.markModified('type');
            if (requestData?.location) equipmentData.markModified('location');
            if (requestData?.sub_location) equipmentData.markModified('sub_location');
            if (requestData?.cobie_tag) equipmentData.markModified('cobie_tag');

            let result = await equipmentData.save();
            return {
                error: false,
                message: 'equipment update successfully!!',
                data: result
            };
        } catch (error) {
            return {
                error: true,
                message: error,
                data: undefined
            };
        }
    },

    /**
     * product list
     * @param {*} query
     * @param {*} product_id
     * @returns
     */
    List: async (query, newEquipmentsId) => {
        try {
            let queryObject = {};
            // let limit = query?.limit ? Number.parseInt(query?.limit) : 20;
            // let page = query?.page ? Number.parseInt(query?.page) : 1;
            if (query?.id) {
                queryObject['_id'] = ObjectId(query?.id);
            }
            if (query?.new_equipments_id) queryObject['new_equipments_id'] = query?.new_equipments_id;
            if (query?.equipment_tag) queryObject['equipment_tag'] = query?.equipment_tag;
            if (query?.type) queryObject['type'] = query?.type;
            if (query?.location) queryObject['location'] = query?.location;
            if (query?.sub_location) queryObject['sub_location'] = query?.sub_location;
            if (query?.cobie_tag) queryObject['cobie_tag'] = query?.cobie_tag;
            if (query?.is_active) queryObject['is_active'] = query?.is_active;
            if (query?.from_date || query?.to_date || query.date_option) {
                queryObject['createdAt'] = dateFinder(query);
            }
            queryObject['cobie_tag'] = { $ne: null, $nin: [''] };
            if (newEquipmentsId) {
                queryObject['new_equipments_id'] = newEquipmentsId;
            }
            let equipmentsData = await NewEquipmentTagsModel.find(queryObject)
                // .limit(limit)
                // .skip((page - 1) * limit)
                // .sort({_id: -1})
                .lean();
            console.log(equipmentsData.length);
            if (isEmpty(equipmentsData)) {
                return {
                    error: true,
                    message: 'equipments list is not found',
                    data: undefined
                };
            }
            return {
                error: false,
                message: 'equipments list',
                data: equipmentsData
            };
        } catch (error) {
            return {
                error: error,
                message: 'equipments list is not available',
                data: undefined
            };
        }
    },
    /**
     *
     * @param {*} id
     * @param {*} new_equipments_id
     * @returns
     */
    deleteNewEquipmentsTag: async (request) => {
        if (isEmpty(request?.params?.id || request?.query?.new_equipments_id)) {
            return { error: true, message: 'At least one of _id or new_equipments_id must be provided' };
        } else {
            try {
                const id = request?.params?.id;
                const new_equipments_id = request?.query?.new_equipments_id;
                console.log('id', id);
                console.log('new_equipments_id', new_equipments_id);
                let queryArray = [];
                if (id) {
                    queryArray.push({ _id: new ObjectId(id) });
                }
                if (new_equipments_id) {
                    queryArray.push({ new_equipments_id: new_equipments_id });
                }
                let queryObject = {queryArray};

                let NewEquipmentTags = await findOneNewEquipmentTags(queryObject);
                console.log('NewEquipmentTags', NewEquipmentTags);
                if (isEmpty(NewEquipmentTags)) {
                    return { error: false, message: 'Invalid EquipmentTags!' };
                }
                
                let EquipmentTags = await deleteEquipmentTags(queryObject);
                console.log('EquipmentTags', EquipmentTags)
                if (EquipmentTags) {
                    return { error: false, data: {}, message: 'EquipmentTag deleted successfully!' };
                }
                return { error: false, data: {}, message: 'Something went wrong!' };
            } catch (error) {
                return {
                    error: true,
                    message: error?.message
                };
            }
        }
    }
};

module.exports = NewEquipmentTagsController;
