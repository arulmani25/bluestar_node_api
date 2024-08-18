const model = require('../../../../models/index');
const { errorMsg } = require('../../../../utils');

const attendanceList = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, user_mobile_no, attdDate } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const isExist = await model.attendanceModel.findOne({
        user_mobile_no: user_mobile_no
    });
    if (!isExist) throw new Error(errorMsg.USER_NOT_FOUND);
    const record = await model.attendanceModel.aggregate([
        {
            $match: attdDate
                ? { att_date: attdDate, user_mobile_no: Number(isExist.user_mobile_no) }
                : { user_mobile_no: Number(isExist.user_mobile_no) }
        },
        {
            $match: searchKey
                ? {
                      $or: [{}]
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
    return record;
};

module.exports = { attendanceList };
