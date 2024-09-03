/* eslint-disable no-unused-vars */
const model = require('../../../models');
const moment = require('moment');

const dashboardcount = async (query) => {
    const momentDate = moment();
    const currentDate = new Date().getDate();
    const startDayOfMonth = moment().startOf('month').date(); // This will be day 1  in current month
    const endDayOfMonth = moment().endOf('month').date(); // This will be day 31  in current month
    const cobieTagsTopreviousDate = [];
    const cobieTagsForCurrentDate = [];
    const previousSubmittedCobieTags = [];
    const todaySubmittedCobieTags = [];
    // const previousVerifiedCobieTags = [];
    const currentMonthEquipmentTage = [];
    const currentMonthSubmittedCobieTags = [];
    const MonthlyVerifiedCobieTags = [];
    const testequipmentag = [];

    const startingDate = moment()
        .month(Number(query.month) - 1)
        .startOf('month');

    const endingDate = moment()
        .month(Number(query.month) - 1)
        .endOf('month');

    const inputDate = moment();
    const year = inputDate.year();
    const month = inputDate.month() + 1;
    const day = inputDate.date();

    //** Count based on Today Date */

    const todayEquipemtTags = await model.checklistTracker.find({
        day_of_month: { $eq: currentDate } // get equipment tag by today date
    });
    // match the equipment tag and get cobie tag from another table
    for (const iterator of todayEquipemtTags) {
        const data = await model.equipmentsModel.findOne({
            equipment_tag: iterator.equipment_tag
        });
        if (data) cobieTagsForCurrentDate.push(data['_doc'].cobie_tag);
    }
    // ------------------------------------------------------//
    let getTodaySubmittedTagList = await model.submitchecklistModel.find(
        {
            $expr: {
                $and: [
                    { $eq: [{ $year: '$createdAt' }, year] },
                    { $eq: [{ $month: '$createdAt' }, month] },
                    { $eq: [{ $dayOfMonth: '$createdAt' }, day] }
                ]
            }
        },
        { equipment_tag_name: 1 }
    );
    // ------------------------------------------------------//

    // let getTodaySubmittedTagList = await model.submitchecklistModel.find(
    //     {
    //         createdAt: {
    //             $gte: new Date(startingDate),
    //             $lte: new Date(endingDate)
    //         }
    //     },
    //     { equipment_tag_name: 1 }
    // );
    // console.log('getTodaySubmittedTagList', getTodaySubmittedTagList);
    // -----------------------------------------------------------------------------------------------//
    const currentmonthEquipemtTags = await model.checklistTracker.find({
        day_of_month: {
            $gte: startDayOfMonth,
            $lte: endDayOfMonth
        }
    });

    for (const iterator of currentmonthEquipemtTags) {
        const data = await model.equipmentsModel.findOne({
            equipment_tag: iterator.equipment_tag
        });
        if (data) {
            currentMonthEquipmentTage.push(data['_doc'].cobie_tag);
        } else {
            testequipmentag.push(iterator.equipment_tag);
        }
    }
    const getMonthlySubmittedTagList = await model.submitchecklistModel.find(
        {
            createdAt: {
                $gte: startingDate,
                $lte: endingDate
            }
        },
        { equipment_tag_name: 1 }
    );

    if (getMonthlySubmittedTagList.length > 0) {
        for (const iterator of getMonthlySubmittedTagList) {
            currentMonthSubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
        }
    }
    const filteredMonthlyPendingTags = currentMonthEquipmentTage.filter(
        (item) => !currentMonthSubmittedCobieTags.includes(item)
    );

    const pendingcurrentMonthData = filteredMonthlyPendingTags.filter((e) => {
        return String(e).trim();
    });
    // const SubmittedCurrentMonthData = currentMonthSubmittedCobieTags.filter((e) => {
    //     return String(e).trim();
    // });

    const currentMonthPendingCount = Number(pendingcurrentMonthData.length);

    const currentMonthSubmittedTagList = await model.submitchecklistModel.find(
        {
            createdAt: {
                $gte: new Date(startingDate),
                $lte: new Date(endingDate)
            },
            $expr: {
                $gte: [{ $strLenCP: '$supervisor_sign' }, 1] // Ensure supervisor_sign is not empty
            }
        },
        { equipment_tag_name: 1 }
    );

    for (const iterator of currentMonthSubmittedTagList) {
        previousSubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
    }

    const getcurrentMonthVerifiedTagList = await model.submitchecklistModel.find(
        {
            createdAt: {
                $gte: new Date(startingDate), // added to get record for current month
                $lte: new Date(endingDate)
            },
            $expr: {
                $gt: [{ $strLenCP: '$bial_sign' }, 0]
            }
        },
        { equipment_tag_name: 1 }
    );

    for (const iterator of getcurrentMonthVerifiedTagList) {
        MonthlyVerifiedCobieTags.push(iterator['_doc'].equipment_tag_name);
    }

    const currentMonthVerifiedFinalData = MonthlyVerifiedCobieTags.filter((e) => {
        return String(e).trim();
    });
    const currentMonthVerifiedCount = Number(currentMonthVerifiedFinalData.length);
    // --------------------------------------------------------------------------------------------------//

    //push the cobie tag of submitted checklist
    if (getTodaySubmittedTagList.length > 0) {
        for (const iterator of getTodaySubmittedTagList) {
            todaySubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
        }
    }
    const filteredTodayPendingTags = cobieTagsForCurrentDate.filter((item) => !todaySubmittedCobieTags.includes(item));

    // remove empty string
    const pendingTodayData = filteredTodayPendingTags.filter((e) => {
        return String(e).trim();
    });
    const submittedTodayData = todaySubmittedCobieTags.filter((e) => {
        return String(e).trim();
    });

    const pendingTodayCount = Number(pendingTodayData.length);
    const todaySubmittedCount = Number(submittedTodayData.length);

    //>>>>>>>>>>>>>>>>>>>>> previous day record count

    const pendingRecordsEquipemtTags = await model.checklistTracker.find({
        day_of_month: { $lte: currentDate - 1 }
    });

    // get cobie tag until previous date

    for (const iterator of pendingRecordsEquipemtTags) {
        const data = await model.equipmentsModel.findOne({
            equipment_tag: iterator.equipment_tag
        });
        cobieTagsTopreviousDate.push(data ? data['_doc'].cobie_tag : '');
    }

    // get submitted tags until previous day signed by supervisor
    // const getPreviousSubmittedTagList = await model.submitchecklistModel.find(
    //     {
    //         createdAt: {
    //             $gte: new Date(startingDate), // added to get record for current month
    //             $lte: new Date(momentDate.subtract(1, 'day').endOf('day'))
    //         },
    //         $expr: {
    //             $gte: [{ $strLenCP: '$supervisor_sign' }, 1]
    //         }
    //     },
    //     { equipment_tag_name: 1 }
    // );

    // for (const iterator of getPreviousSubmittedTagList) {
    //     previousSubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
    // }
    // const filteredPendingTags = cobieTagsTopreviousDate.filter((item) => !previousSubmittedCobieTags.includes(item));

    // get verified tags until previous day signed by bial

    // const getPreviousVerifiedTagList = await model.submitchecklistModel.find(
    //     {
    //         createdAt: {
    //             $gte: new Date(startingDate) // added to get record for current month
    //             // $lte: new Date(momentDate.subtract(1, "day").endOf("day")),
    //         },
    //         $expr: {
    //             $gt: [{ $strLenCP: '$bial_sign' }, 0]
    //         }
    //     },
    //     { equipment_tag_name: 1 }
    // );
    // for (const iterator of getPreviousVerifiedTagList) {
    //     previousVerifiedCobieTags.push(iterator['_doc'].equipment_tag_name);
    // }

    // const previousPendingFinalData = filteredPendingTags.filter((e) => {
    //     return String(e).trim();
    // });
    // const previousSubmittedFinalData = previousSubmittedCobieTags.filter((e) => {
    //     return String(e).trim();
    // });
    // const previousVerifiedFinalData = previousVerifiedCobieTags.filter((e) => {
    //     return String(e).trim();
    // });
    // const previousPendingCount = Number(previousPendingFinalData.length);
    // const previousSubmittedCount = Number(previousSubmittedFinalData.length);
    // const previousVerifiedCount = Number(previousVerifiedFinalData.length);

    // pdf list
    const recordList = await model.documentModel.aggregate([
        {
            $match: {
                checklist_date: {
                    $gte: new Date(startingDate),
                    $lte: new Date(endingDate)
                }
            }
        }
    ]);

    return {
        previousPendingCount: currentMonthPendingCount,
        previousPendingRecord: pendingcurrentMonthData,
        previousCompletedCount: previousSubmittedCobieTags.length,
        previousCompletedRecord: previousSubmittedCobieTags,
        previousVerifiedCount: currentMonthVerifiedCount,
        previousVerifiedFinalData: currentMonthVerifiedFinalData,
        toDoCount: pendingTodayCount,
        todoRecord: pendingTodayData,

        todayCompletedCount: todaySubmittedCount,
        todayCompletedRecord: submittedTodayData,
        pdfUrl: recordList,

        TotalEquipmentTage: currentMonthEquipmentTage.length
    };
};

module.exports = { dashboardcount };
