const model = require('../../../models/index');

const createList = async (payload) => {
    try {
        console.log(payload);
        const recordList = await model.checkListModel.create({ ...payload });
        console.log('recordList', recordList);
        return recordList;
    } catch (error) {
        console.error('Error creating record list:', error);
        // Optionally, you can throw the error to be handled by the caller
        throw error;
    }
};

module.exports = {
    createList
};
