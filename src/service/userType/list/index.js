const model = require('../../../models');

const userTypeList = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder, role } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.userType.aggregate([
        {
            $match: {}
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
                data: [{ $skip: Number(skip) || 0 }, { $limit: Number(limit) || 100 }]
            }
        }
    ]);
    return recordList;
};

module.exports = { userTypeList };
