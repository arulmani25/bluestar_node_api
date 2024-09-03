const {
    submitchecklistModel,
    checklistTracker,
    equipmentsModel,
    documentModel,
    checkListModel
} = require('../../models/index');
const { isEmpty } = require('../../helpers/Utils');
const currentDate = new Date();

const moment = require('moment');

const SubmitchecklistController = {
    /**
     * check Submitchecklist details
     * @param {*} query
     * @param {*} SubmitchecklistId
     * @returns
     */
    List: async (SubmitchecklistId) => {
        try {
            let queryObject = {};
            queryObject['equipment_tag_name'] = { $ne: null, $nin: [''] };

            if (SubmitchecklistId) {
                queryObject['equipment_tag_name'] = SubmitchecklistId;
            }
            let SubmitchecklistData = await submitchecklistModel.find(queryObject).lean();

            let isSameMonthAndYear;
            SubmitchecklistData.forEach((data) => {
                const createdAtDate = data.createdAt;

                isSameMonthAndYear =
                    createdAtDate.getFullYear() === currentDate.getFullYear() &&
                    createdAtDate.getMonth() === currentDate.getMonth();
            });
            if (isEmpty(isSameMonthAndYear)) {
                return {
                    error: true,
                    message: 'equipment_tag does NOT have a created in the current month.',
                    data: {}
                };
            }
            return {
                error: false,
                message: 'An equipment tag has already been created this month.',
                data: {}
            };
        } catch (error) {
            return {
                error: error,
                message: 'something wrong',
                data: undefined
            };
        }
    },
    /**
     * login dashboard count
     * @param {*} query
     * @returns
     */
    logindashboardcount: async (query) => {
        try {
            // const momentDate = moment();

            // const currentDate = new Date().getDate();
            // const cobieTagsTopreviousDate = [];
            // const cobieTagsForCurrentDate = [];
            // const previousSubmittedCobieTags = [];
            // const todaySubmittedCobieTags = [];
            // const previousVerifiedCobieTags = [];

            // //** Count based on Today Date */

            // const todayEquipemtTags = await checklistTracker.find({
            //     day_of_month: { $eq: currentDate } // get equipment tag by today date
            // });

            // // match the equipment tag and get cobie tag from another table

            // for (const iterator of todayEquipemtTags) {
            //     const data = await equipmentsModel.findOne({
            //         equipment_tag: iterator.equipment_tag
            //     });
            //     cobieTagsForCurrentDate.push(data ? data['_doc'].cobie_tag : '');
            // }

            // const getTodaySubmittedTagList = await submitchecklistModel.find(
            //     {
            //         createdAt: {
            //             $gte: new Date(momentDate.startOf('day')),
            //             $lte: new Date(momentDate.endOf('day'))
            //         }
            //     },
            //     { equipment_tag_name: 1 }
            // );

            // //push the cobie tag of submitted checklist
            // if (getTodaySubmittedTagList.length > 0) {
            //     for (const iterator of getTodaySubmittedTagList) {
            //         todaySubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
            //     }
            // }

            // const filteredTodayPendingTags = cobieTagsForCurrentDate.filter(
            //     (item) => !todaySubmittedCobieTags.includes(item)
            // );

            // // remove empty string

            // const pendingTodayData = filteredTodayPendingTags.filter((e) => {
            //     return String(e).trim();
            // });
            // const submittedTodayData = todaySubmittedCobieTags.filter((e) => {
            //     return String(e).trim();
            // });

            // const pendingTodayCount = Number(pendingTodayData.length);
            // const todaySubmittedCount = Number(submittedTodayData.length);

            // //>>>>>>>>>>>>>>>>>>>>> previous day record count

            // const pendingRecordsEquipemtTags = await checklistTracker.find({
            //     day_of_month: { $lte: currentDate - 1 }
            // });

            // // get cobie tag until previous date

            // for (const iterator of pendingRecordsEquipemtTags) {
            //     const data = await equipmentsModel.findOne({
            //         equipment_tag: iterator.equipment_tag
            //     });
            //     cobieTagsTopreviousDate.push(data ? data['_doc'].cobie_tag : '');
            // }

            // // get submitted tags until previous day signed by supervisor

            // const startingDate = moment()
            //     .month(Number(query.month) - 1)
            //     .startOf('month');

            // const getPreviousSubmittedTagList = await submitchecklistModel.find(
            //     {
            //         createdAt: {
            //             $gte: new Date(startingDate),
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
            // const filteredPendingTags = cobieTagsTopreviousDate.filter(
            //     (item) => !previousSubmittedCobieTags.includes(item)
            // );

            // // get verified tags until previous day signed by bial

            // const getPreviousVerifiedTagList = await submitchecklistModel.find(
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

            // // pdf list

            // const endingDate = moment()
            //     .month(Number(query.month) - 1)
            //     .endOf('month');

            // const recordList = await documentModel.aggregate([
            //     {
            //         $match: {
            //             checklist_date: {
            //                 $gte: new Date(startingDate),
            //                 $lte: new Date(endingDate)
            //             }
            //         }
            //     }
            // ]);

            const currentDate = new Date().getDate();
            const startDayOfMonth = moment().startOf('month').date(); // This will be day 1  in current month
            const endDayOfMonth = moment().endOf('month').date(); // This will be day 31  in current month
            const cobieTagsTopreviousDate = [];
            const cobieTagsForCurrentDate = [];
            const previousSubmittedCobieTags = [];
            const todaySubmittedCobieTags = [];
            const todayCompleteEquipmentTag = [];
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
            console.log('startingDate', startingDate);
            //** Count based on Today Date */

            const todayEquipemtTags = await checklistTracker.find({
                day_of_month: { $eq: currentDate } // get equipment tag by today date
            });
            // match the equipment tag and get cobie tag from another table
            for (const iterator of todayEquipemtTags) {
                const data = await equipmentsModel.findOne({
                    equipment_tag: iterator.equipment_tag
                });
                if (data) cobieTagsForCurrentDate.push(data['_doc'].cobie_tag);
            }

            let getTodaySubmittedTagList = await submitchecklistModel.find(
                {
                    createdAt: {
                        $gte: new Date(startingDate),
                        $lte: new Date(endingDate)
                    }
                },
                { equipment_tag_name: 1 }
            );
            // -----------------------------------------------------------------------------------------------//
            const currentmonthEquipemtTags = await checklistTracker.find({
                day_of_month: {
                    $gte: startDayOfMonth,
                    $lte: endDayOfMonth
                }
            });

            for (const iterator of currentmonthEquipemtTags) {
                const data = await equipmentsModel.findOne({
                    equipment_tag: iterator.equipment_tag
                });
                if (data) {
                    currentMonthEquipmentTage.push(data['_doc'].cobie_tag);
                } else {
                    testequipmentag.push(iterator.equipment_tag);
                }
            }
            const getMonthlySubmittedTagList = await submitchecklistModel.find(
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
            // const currentMonthSubmittedCount = Number(SubmittedCurrentMonthData.length);

            const currentMonthSubmittedTagList = await submitchecklistModel.find(
                {
                    createdAt: {
                        $gte: new Date(startingDate),
                        $lte: new Date(endingDate)
                    },
                    // bial_sign: { $exists: true, $eq: '' }, // Find documents where bial_sign is an empty string
                    $expr: {
                        $gte: [{ $strLenCP: '$supervisor_sign' }, 1] // Ensure supervisor_sign is not empty
                    }
                },
                { equipment_tag_name: 1 }
            );

            for (const iterator of currentMonthSubmittedTagList) {
                previousSubmittedCobieTags.push(iterator['_doc'].equipment_tag_name);
            }

            const getcurrentMonthVerifiedTagList = await submitchecklistModel.find(
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
            const filteredTodayPendingTags = cobieTagsForCurrentDate.filter(
                (item) => !todaySubmittedCobieTags.includes(item)
            );

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

            const pendingRecordsEquipemtTags = await checklistTracker.find({
                day_of_month: { $lte: currentDate - 1 }
            });

            // get cobie tag until previous date

            for (const iterator of pendingRecordsEquipemtTags) {
                const data = await equipmentsModel.findOne({
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

            const recordList = await documentModel.aggregate([
                {
                    $match: {
                        checklist_date: {
                            $gte: new Date(startingDate),
                            $lte: new Date(endingDate)
                        }
                    }
                }
            ]);

            // today complection submitted checklist
            let queryObject = {};
            if (query?.mobile_no) queryObject['user_mobile_no'] = query?.mobile_no;
            // Static date range
            const startOfDay = moment().startOf('day').toDate();
            const endOfDay = moment().endOf('day').toDate();

            console.log('startOfDay', startOfDay);
            console.log('endOfDay', endOfDay);

            // Add the createdAt condition to queryObject
            queryObject['createdAt'] = {
                $gte: startOfDay,
                $lte: endOfDay
            };

            // Login record CompletedRecord
            let submitCheckList = await submitchecklistModel.find(queryObject, {
                user_mobile_no: 1,
                equipment_tag_name: 1,
                createdAt: 1
            });

            console.log('submitCheckList', submitCheckList);
            for (const iterator of submitCheckList) {
                todayCompleteEquipmentTag.push(iterator['_doc'].equipment_tag_name);
            }

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

                todayComplete: submitCheckList.length,
                todayCompleteEquipmentTag: todayCompleteEquipmentTag,
                TotalEquipmentTage: currentMonthEquipmentTage.length
            };
        } catch (error) {
            return {
                error: error,
                message: 'something wrong',
                data: undefined
            };
        }
    }

    //     cobieTagCount: async () => {
    //         try {
    //             // Fetch equipment list and check list
    //             const equipmentList = await equipmentsModel.find({}).lean();
    //             const checkList = await checkListModel.find({}).lean();

    //             // Extract cobie_tags from both lists
    //             const equipmentCobieTags = equipmentList.map((equipment) => equipment.cobie_tag);
    //             const checkListCobieTags = checkList.map((data) => data.cobie_tag);

    //             // Create Sets from both arrays for fast lookup
    //             const equipmentCobieTagsSet = new Set(equipmentCobieTags);
    //             const checkListCobieTagsSet = new Set(checkListCobieTags);

    //             // Find duplicates
    //             const duplicates = [];
    //             checkListCobieTagsSet.forEach((tag) => {
    //                 if (equipmentCobieTagsSet.has(tag)) {
    //                     duplicates.push(tag);
    //                 }
    //             });

    //             // Return the length of unique cobie_tags
    //             console.log('allUniqueCobieTags.length', duplicates.length);
    //             if (isEmpty(duplicates)) {
    //                 return {
    //                     error: true,
    //                     message: 'uniqueCobieTags does NOT have a created in the current month.',
    //                     data: {}
    //                 };
    //             }
    //         } catch (error) {
    //             return {
    //                 error: error,
    //                 message: 'something wrong',
    //                 data: undefined
    //             };
    //         }
    //     }
};

module.exports = SubmitchecklistController;
