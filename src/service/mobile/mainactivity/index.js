const model = require('../../../models/index');

const activityList = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.mainactivityModel.aggregate([
        { $match: { delete_status: false } },
        {
            $match: searchKey
                ? {
                      $or: [{}]
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

module.exports = { activityList };
