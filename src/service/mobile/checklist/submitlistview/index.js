const mongoose = require('mongoose');
const model = require('../../../../models/index');
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require('../../../../utils/enum');
const moment = require('moment');

const submitListView = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, equipmentTagId, user_mobile_no } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.submitchecklistModel.aggregate([
        {
            $match: equipmentTagId
                ? {
                      equipment_tag_name: equipmentTagId
                  }
                : {}
        },
        {
            $match: searchKey
                ? {
                      $or: [{ activity_name: searchRegex }]
                  }
                : {}
        },
        {
            $project: {
                __v: 0
            }
        },
        {
            $sort: sort
        },
        {
            $facet: {
                pagination: [{ $count: 'totalCount' }],
                data: [{ $skip: Number(skip) || 0 }, { $limit: Number(limit) || 10 }]
            }
        }
    ]);
    return recordList;
};

module.exports = { submitListView };
