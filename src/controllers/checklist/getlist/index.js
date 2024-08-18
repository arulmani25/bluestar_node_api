const { checkListServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const getCheckList = async (req, res, next) => {
    try {
        const rec = [];
        const record = await checkListServiceController.getCheckList(req.query);
        const monthFilter = [];
        // record.monthAndFilter.forEach((element) => {
        //   for (const key in element) {
        //     if (element[key] === "M") {
        //       monthFilter.push({ [key]: "monthly" });
        //     } else if (element[key] === "Y") monthFilter.push({ [key]: "yearly" });
        //     else if (element[key] === "Q") {
        //       monthFilter.push({ [key]: "quarterly" });
        //     }
        //   }
        // });

        const recordAfterFlat = record[0].flat(2);

        if (record === 'checklist already checked') {
            return res.json({
                Status: 'Success',
                Message: 'checklist Already submitted',
                Data: [],
                Code: 200
            });
        } else {
            return res.json({
                Status: 'Success',
                Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
                Data: { checklist: recordAfterFlat, monthAndFilter: [record[1]] },
                Code: 200
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getCheckList };
