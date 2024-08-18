// const Express = require('express');
// const Router = Express.Router();
// const MainActivityControllers = require('./MainActivityControllers');


// Router.get('/list/:newEquipmentsId?', async (request, response) => {
//     try {
//             let { error, message, data } = await NewEquipmentsTagController.List(
//                 request?.query,
//                 request?.params?.newEquipmentsId
//             );
//             if (!isEmpty(data) && error === false) {
//                 return sendSuccessData(response, message, data);
//             }
        
//         return sendFailureMessage(response, message, 400);
//     } catch (error) {
//         return sendFailureMessage(response, error, 500);
//     }
// });

// const getActivitytypeList = async (req, res) => {
//     console.log("test connection")
//     try {
//         const record = await mainActivityServiceController.getActivityTypes(req);
//         console.log('record', record);
//         return res.json({
//             Status: 'Success',
//             Message: successMsg.GROUP_LIST_VIEWED_SUCCESSFULLY,
//             Data: record,
//             Code: 200
//         });
//     } catch (error) {
//         return res.json({
//             Status: 'false',
//             Message: error,
//             Code: 200
//         });
//     }
// };

// module.exports = {getActivitytypeList}

