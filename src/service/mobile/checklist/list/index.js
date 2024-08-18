const mongoose = require('mongoose');
const model = require('../../../../models/index');
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require('../../../../utils/enum');
const moment = require('moment');

const checkListMobile = async (query) => {
    const { searchKey, skip, limit, sortkey, sortOrder, activityId, equipmentTagId, activityType, filterBy } = query;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    let filter;
    let filterByQuery;

    if (activityId && !equipmentTagId && !activityType) {
        filter = {
            $match: { activity_id: new objectId(activityId), delete_status: false }
        };
    } else if (!activityId && equipmentTagId && !activityType) {
        filter = {
            $match: {
                equipment_tag_name: equipmentTagId,
                delete_status: false
            }
        };
    } else if (!activityId && !equipmentTagId && activityType) {
        filter = {
            $match: {
                activity_type: new objectId(activityType),
                delete_status: false
            }
        };
    } else if (activityId && equipmentTagId && !activityType) {
        filter = {
            $match: {
                activity_id: new objectId(activityId),
                equipment_tag_name: equipmentTagId,
                delete_status: false
            }
        };
    } else if (!activityId && equipmentTagId && activityType) {
        filter = {
            $match: {
                equipment_tag_name: equipmentTagId,
                activity_type: new objectId(activityType),
                delete_status: false
            }
        };
    } else if (activityId && !equipmentTagId && activityType) {
        filter = {
            $match: {
                activity_id: new objectId(activityId),
                activity_type: new objectId(activityType),
                delete_status: false
            }
        };
    } else if (activityId && equipmentTagId && activityType) {
        filter = {
            $match: {
                activity_id: new objectId(activityId),
                equipment_tag_name: equipmentTagId,
                activity_type: new objectId(activityType),
                delete_status: false
            }
        };
    } else {
        filter = { $match: { delete_status: false } };
    }

    const currentDate = moment();

    if (filterBy === filterByOption.quarterly) {
        filterByQuery = {
            $match: {
                check_list_type: filterByOption.quarterly,
                date_of_create: { $lte: new Date(currentDate.toISOString()) }
            }
        };
    } else if (filterBy === filterByOption.monthly) {
        filterByQuery = {
            $match: {
                check_list_type: filterByOption.monthly,
                date_of_create: { $lte: new Date(currentDate.toISOString()) }
            }
        };
    } else if (filterBy === filterByOption.halfYearly) {
        filterByQuery = {
            $match: {
                check_list_type: filterByOption.halfYearly,
                date_of_create: { $lte: new Date(currentDate.toISOString()) }
            }
        };
    } else if (filterBy === filterByOption.yearly) {
        filterByQuery = {
            $match: {
                check_list_type: filterByOption.yearly,
                date_of_create: { $lte: new Date(currentDate.toISOString()) }
            }
        };
    } else {
        filterByQuery = {
            $match: { delete_status: false }
        };
    }

    const recordList = await model.checkListModel.aggregate([
        { ...filter },
        { ...filterByQuery },
        {
            $match: searchKey
                ? {
                      $or: [{ activity_name: searchRegex }]
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

module.exports = { checkListMobile };
