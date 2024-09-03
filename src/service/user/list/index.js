const mongoose = require('mongoose');
const userModel = require('../../../models/user.Model');
const ObjectId = mongoose.Types.ObjectId;

const listUser = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, user_type } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await userModel.aggregate([
        {
            $match: user_type ? { user_type: new ObjectId(user_type), delete_status: false } : { delete_status: false }
        },
        {
            $match: searchKey
                ? {
                      $or: [{ user_name: searchRegex }, { email_id: searchRegex }]
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

module.exports = { listUser };
