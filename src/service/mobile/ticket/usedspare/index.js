const model = require('../../../../models/index');
const moment = require('moment');

const getUsedSpare = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    let fromDate;
    let toDate;
    if (query.fromDate && query.toDate) {
        fromDate = moment(query.fromDate);
        toDate = moment(query.toDate);
    } else {
        fromDate = moment();
        toDate = moment();
    }
    const startDate = fromDate.startOf('day').toDate();
    const endDate = toDate.endOf('day').toDate();

    const recordList = await model.ticketModel.aggregate([
        { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
        {
            $match: searchKey
                ? {
                      $or: [{}]
                  }
                : {}
        },
        {
            $project: {
                spare: 1
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
    return recordList[0].data;
};
module.exports = { getUsedSpare };
