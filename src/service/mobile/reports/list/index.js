const mongoose = require('mongoose');
const model = require('../../../../models/index');
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require('../../../../utils/enum');

const reportList = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, filterBy, equipmentTagId } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    let filterByQuery;

    if (filterBy === filterByOption.quarterly) {
        filterByQuery = {
            $match: {
                equipment_tag: new objectId(equipmentTagId),
                delete_status: false
            }
        };
    } else if (filterBy === filterByOption.monthly) {
        filterByQuery = {
            $match: {
                equipment_tag: new objectId(equipmentTagId),
                delete_status: false
            }
        };
    } else if (filterBy === filterByOption.halfYearly) {
        filterByQuery = {
            $match: {
                equipment_tag: new objectId(equipmentTagId),
                delete_status: false
            }
        };
    } else if (filterBy === filterByOption.yearly) {
        filterByQuery = {
            $match: {
                equipment_tag: new objectId(equipmentTagId),
                delete_status: false
            }
        };
    } else {
        filterByQuery = {
            $match: {
                equipment_tag: new objectId(equipmentTagId),
                delete_status: false
            }
        };
    }

    const recordList = await model.submitchecklistModel.aggregate([
        {
            ...filterByQuery
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
    return recordList;
};

module.exports = { reportList };
