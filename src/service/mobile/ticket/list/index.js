const model = require('../../../../models/index');

const ticketList = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder, status } = payload;

    const sort = {
        [sortkey ? sortkey : 'createdAt']: !sortOrder || sortOrder === 'DESC' ? -1 : 1
    };
    console.log(sort, '>>>>>>>>>>>');
    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const recordList = await model.ticketModel.aggregate([
        {
            $group: {
                _id: '$ticket_no',
                record: {
                    $last: '$$ROOT'
                }
            }
        },
        {
            $match: {
                'record.status': status
            }
        },
        {
            $match: searchKey
                ? {
                      $or: [{}]
                  }
                : {}
        },
        {
            $sort: { 'record.createdAt': -1 }
        },
        {
            $project: {
                _id: 0
            }
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

module.exports = { ticketList };
