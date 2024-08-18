const model = require('../../../models');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const roleTypeList = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder, role, user_type } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.role.aggregate([
        {
            $match: user_type ? { user_type: new ObjectId(user_type), is_active: true } : {}
        },
        {
            $match: searchKey
                ? {
                      $or: []
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

module.exports = { roleTypeList };
