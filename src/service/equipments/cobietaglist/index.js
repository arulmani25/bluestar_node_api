const model = require('../../../models/index');

const cobieList = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    console.log(searchKey, skip, limit, sortkey, sortOrder);
    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.equipmentsModel.aggregate([
        {
            $match: {}
        },
        {
            $match: searchKey
                ? {
                      $or: [{}]
                  }
                : {}
        },
        {
            $project: {
                cobie_tag: 1
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
    console.log('recordList', recordList);
    return recordList;
};

module.exports = { cobieList };
