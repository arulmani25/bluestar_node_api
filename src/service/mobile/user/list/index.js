const mongoose = require('mongoose');
const model = require('../../../../models/index');
const objectId = mongoose.Types.ObjectId;

const userListMobile = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, role } = query;

    const sort = {
        [sortkey ? sortkey : 'createdAt']: !sortOrder || sortOrder === 'DESC' ? -1 : 1
    };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.userModel.aggregate([
        {
            $match: role ? { role_type: role, is_active: true } : {}
        },
        {
            $match: searchKey
                ? {
                      $or: [{ user_name: searchRegex }]
                  }
                : {}
        },
        {
            $project: {
                user_password: 0,
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

module.exports = { userListMobile };
