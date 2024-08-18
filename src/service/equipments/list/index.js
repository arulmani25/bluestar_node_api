const model = require('../../../models/index');

const equipmentList = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder, equipment_tag, location, sub_location, type } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    let filter;

    if (equipment_tag) {
        filter = { $match: { equipment_tag: equipment_tag, is_active: true } };
    } else if (location) {
        filter = { $match: { location: location, is_active: true } };
    } else if (sub_location) {
        filter = { $match: { sub_location: sub_location, is_active: true } };
    } else if (type) {
        filter = { $match: { type: type, is_active: true } };
    } else {
        filter = { $match: { is_active: true } };
    }

    const recordList = await model.equipmentsModel.aggregate([
        {
            ...filter
        },
        {
            $match: searchKey
                ? {
                      $or: [
                          { type: searchRegex },
                          { location: searchRegex },
                          { sub_location: searchRegex },
                          { equipement_tag: searchRegex }
                      ]
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

module.exports = { equipmentList };
