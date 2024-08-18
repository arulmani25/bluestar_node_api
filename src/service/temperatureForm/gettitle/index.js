const model = require('../../../models/index');

const listTemeperaturelogsTitle = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.temperaturelogsTitle.aggregate([
        {
            $match: { isActive: true }
        },
        {
            $match: searchKey
                ? {
                      $or: []
                  }
                : {}
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

module.exports = { listTemeperaturelogsTitle };
