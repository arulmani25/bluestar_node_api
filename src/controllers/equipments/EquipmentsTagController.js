/* eslint-disable no-unsafe-optional-chaining */
const {
    createEquipmentTags,
    findOneEquipmentTags,
    findEquipmentTags,
    deleteEquipmentTags
} = require('../../Repositary/EquementTageRepositary');
const { equipmentsModel } = require('../../models/index');
const EquipmentTagsModel = equipmentsModel;
const { getNanoId, isEmpty, dateFinder } = require('../../helpers/Utils');
const { ObjectId } = require('mongodb');
const qrcodeURL = require('qrcode');

const EquipmentTagsController = {
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
                    message: 'Fields is not empty',
                    data: {}
                };
            }
            const existingEquipmentTags = await findOneEquipmentTags({ cobie_tag: requestData?.cobie_tag });
            if (existingEquipmentTags) {
                return {
                    error: 'Failed',
                    message: 'Duplicate EquipmentTags found. Please choose a unique NewEquipment.',
                    data: {}
                };
            }
            const cobie_tag_code = await qrcodeURL.toDataURL(requestData?.cobie_tag);

            let requestObject = {
                new_equipments_id: uniqeID,
                equipment_tag: requestData?.equipment_tag ?? '',
                type: requestData?.type ?? '',
                location: requestData?.location ?? '',
                sub_location: requestData?.sub_location ?? '',
                cobie_tag: requestData?.cobie_tag ?? '',
                qrcode: cobie_tag_code ?? '',
                Jan: requestData?.Jan ?? 'M',
                Feb: requestData?.Feb ?? 'M',
                Mar: requestData?.Mar ?? 'M',
                Apr: requestData?.Apr ?? 'Q',
                May: requestData?.May ?? 'Q',
                Jun: requestData?.Jun ?? 'Q',
                Jul: requestData?.Jul ?? 'H',
                Aug: requestData?.Aug ?? 'H',
                Sep: requestData?.Sep ?? 'H',
                Oct: requestData?.Oct ?? 'Y',
                Nov: requestData?.Nov ?? 'Y',
                Dec: requestData?.Dec ?? 'Y'
            };
            const EquipmentTags = await createEquipmentTags(requestObject);
            if (isEmpty(EquipmentTags)) {
                return {
                    error: true,
                    message: 'Equipment data is not saved properly',
                    data: undefined
                };
            }
            return {
                error: false,
                message: 'Equipment created successfully',
                data: EquipmentTags
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
                    message: 'Input fields is not empty',
                    data: undefined
                };
            }
            let equipmentData = await findOneEquipmentTags({ _id: new ObjectId(requestData?.id) });
            if (isEmpty(equipmentData)) {
                return {
                    error: true,
                    message: 'EquipmentData is not available'
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
            equipmentData.Jan = requestData?.Jan ? requestData?.Jan : equipmentData.Jan;
            equipmentData.Feb = requestData?.Feb ? requestData?.Feb : equipmentData.Feb;
            equipmentData.Mar = requestData?.Mar ? requestData?.Mar : equipmentData.Mar;
            equipmentData.Apr = requestData?.Apr ? requestData?.Apr : equipmentData.Apr;
            equipmentData.May = requestData?.May ? requestData?.May : equipmentData.May;
            equipmentData.Jun = requestData?.Jun ? requestData?.Jun : equipmentData.Jun;
            equipmentData.Jul = requestData?.Jul ? requestData?.Jul : equipmentData.Jul;
            equipmentData.Aug = requestData?.Aug ? requestData?.Aug : equipmentData.Aug;
            equipmentData.Sep = requestData?.Sep ? requestData?.Sep : equipmentData.Sep;
            equipmentData.Oct = requestData?.Oct ? requestData?.Oct : equipmentData.Oct;
            equipmentData.Nov = requestData?.Nov ? requestData?.Nov : equipmentData.Nov;
            equipmentData.Dec = requestData?.Dec ? requestData?.Dec : equipmentData.Dec;

            // const cobie_tag_code = await qrcodeURL.toDataURL(equipmentData.equipment_tag);

            // Mark fields as modified if they were updated
            if (requestData?.equipment_tag) equipmentData.markModified('equipment_tag');
            if (requestData?.type) equipmentData.markModified('type');
            if (requestData?.location) equipmentData.markModified('location');
            if (requestData?.sub_location) equipmentData.markModified('sub_location');
            if (requestData?.cobie_tag) equipmentData.markModified('cobie_tag');
            if (requestData?.Jan) equipmentData.markModified('Jan');
            if (requestData?.Feb) equipmentData.markModified('Feb');
            if (requestData?.Mar) equipmentData.markModified('Mar');
            if (requestData?.Apr) equipmentData.markModified('Apr');
            if (requestData?.May) equipmentData.markModified('May');
            if (requestData?.Jun) equipmentData.markModified('Jun');
            if (requestData?.Jul) equipmentData.markModified('Jul');
            if (requestData?.Aug) equipmentData.markModified('Aug');
            if (requestData?.Sep) equipmentData.markModified('Sep');
            if (requestData?.Oct) equipmentData.markModified('Oct');
            if (requestData?.Nov) equipmentData.markModified('Nov');
            if (requestData?.Dec) equipmentData.markModified('Dec');

            // if ()

            let result = await equipmentData.save();

            return {
                error: false,
                message: 'Equipment update successfully!!',
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
     * equipments list
     * @param {*} query
     * @param {*} equipment_id
     * @returns
     */
    List: async (query) => {
        try {
            let queryObject = {};

            if (query?.id) {
                queryObject['_id'] = new ObjectId(query?.id);
            }

            if (query?.equipment_tag) queryObject['equipment_tag'] = query?.equipment_tag;
            if (query?.type) queryObject['type'] = query?.type;
            if (query?.location) queryObject['location'] = query?.location;
            if (query?.sub_location) queryObject['sub_location'] = query?.sub_location;
            if (query?.cobie_tag) queryObject['cobie_tag'] = query?.cobie_tag;
            if (query?.is_active) queryObject['is_active'] = query?.is_active;
            if (query?.from_date || query?.to_date || query.date_option) {
                queryObject['createdAt'] = dateFinder(query);
            }

            let equipmentsData = await EquipmentTagsModel.find(queryObject)
                // .limit(limit)
                // .skip((page - 1) * limit)
                // .sort({_id: -1})
                .lean();

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
    deleteEquipmentsTag: async (request) => {
        if (isEmpty(request?.params?.id)) {
            return { error: true, message: ' id must be provided' };
        } else {
            try {
                const id = request?.params?.id;

                let getEquipmentTags = await findOneEquipmentTags({ _id: new ObjectId(id) });
                if (isEmpty(getEquipmentTags)) {
                    return { error: false, message: '!EquipmentTags is empty' };
                }

                let EquipmentTags = await deleteEquipmentTags({ _id: new ObjectId(id) });

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
    },
    UpdateQR: async (requestData) => {
        try {
            let result;
            let equipmentData = await findEquipmentTags({});

            if (isEmpty(equipmentData)) {
                return {
                    error: true,
                    message: 'EquipmentData is not available'
                };
            }

            for (let value of equipmentData) {
                try {
                    // Generate QR code for equipment_tag
                    const cobie_tag_code = await qrcodeURL.toDataURL(value.cobie_tag);

                    // Update fields conditionally using optional chaining and nullish coalescing
                    value.equipment_tag = requestData?.equipment_tag ?? value.equipment_tag;
                    value.type = requestData?.type ?? value.type;
                    value.location = requestData?.location ?? value.location;
                    value.sub_location = requestData?.sub_location ?? value.sub_location;
                    value.cobie_tag = requestData?.cobie_tag ?? value.cobie_tag;
                    value.qrcode = cobie_tag_code; // Assign the generated QR code
                    value.Jan = requestData?.Jan ?? value.Jan;
                    value.Feb = requestData?.Feb ?? value.Feb;
                    value.Mar = requestData?.Mar ?? value.Mar;
                    value.Apr = requestData?.Apr ?? value.Apr;
                    value.May = requestData?.May ?? value.May;
                    value.Jun = requestData?.Jun ?? value.Jun;
                    value.Jul = requestData?.Jul ?? value.Jul;
                    value.Aug = requestData?.Aug ?? value.Aug;
                    value.Sep = requestData?.Sep ?? value.Sep;
                    value.Oct = requestData?.Oct ?? value.Oct;
                    value.Nov = requestData?.Nov ?? value.Nov;
                    value.Dec = requestData?.Dec ?? value.Dec;

                    // Mark fields as modified if necessary
                    if (requestData?.equipment_tag) value.markModified('equipment_tag');
                    if (requestData?.type) value.markModified('type');
                    if (requestData?.location) value.markModified('location');
                    if (requestData?.sub_location) value.markModified('sub_location');
                    if (requestData?.cobie_tag) value.markModified('cobie_tag');
                    if (requestData?.Jan) value.markModified('Jan');
                    if (requestData?.Feb) value.markModified('Feb');
                    if (requestData?.Mar) value.markModified('Mar');
                    if (requestData?.Apr) value.markModified('Apr');
                    if (requestData?.May) value.markModified('May');
                    if (requestData?.Jun) value.markModified('Jun');
                    if (requestData?.Jul) value.markModified('Jul');
                    if (requestData?.Aug) value.markModified('Aug');
                    if (requestData?.Sep) value.markModified('Sep');
                    if (requestData?.Oct) value.markModified('Oct');
                    if (requestData?.Nov) value.markModified('Nov');
                    if (requestData?.Dec) value.markModified('Dec');
                    value.markModified('qrcode'); // Always mark the qrcode as modified

                    // Save the updated record
                    const updatedResult = await value.save();
                    console.log('Record updated:', updatedResult);
                } catch (error) {
                    console.error('Error updating record:', error);
                }
            }

            return {
                error: false,
                message: 'QR code updated successfully!',
                data: result
            };
        } catch (error) {
            return {
                error: true,
                message: error,
                data: undefined
            };
        }
    }
};

module.exports = EquipmentTagsController;
