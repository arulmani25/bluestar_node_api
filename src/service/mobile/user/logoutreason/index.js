const mongoose = require('mongoose');
const model = require('../../../../models/index');

const logoutListMobile = async () => {
    //   const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

    //   const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

    const recordList = await model.logoutReasonListModel.aggregate([
        {
            $match: {}
        },

        {
            $facet: {
                pagination: [{ $count: 'totalCount' }],
                data: []
            }
        }
    ]);
    return recordList;
};

module.exports = { logoutListMobile };
