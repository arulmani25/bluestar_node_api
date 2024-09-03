const Express = require('express');
const Router = Express.Router();
const SubmittedChecklitControllers = require('./SubmittedChecklitControllers');
const { isEmpty } = require('../../helpers/Utils');
const { sendFailureMessage, sendSuccessData } = require('../../config/Responder');

Router.get('/list/:equipment_tag_name?', async (request, response) => {
    try {
        let { error, message, data } = await SubmittedChecklitControllers.List(request?.params?.equipment_tag_name);
        console.log(error, message, data);
        if (!isEmpty(data) && error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.get('/count', async (request, response) => {
    try {
        let Data = await SubmittedChecklitControllers.logindashboardcount(request?.query);
        if (!isEmpty(Data)) {
            return response.json({
                Status: true,
                Message: 'Submitted Checklist count',
                Data: Data
            });
            // return sendSuccessData(response, Message :"Submitted Checklist count", Data);
        }
        return sendFailureMessage(response, 'Check insert value', 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

//testing to cobie tag
// Router.get('/find_cobie_tag', async (request, response) => {
//     try {
//         let Data = await SubmittedChecklitControllers.cobieTagCount(request?.query);
//         console.log('data', Data);
//         if (!isEmpty(Data)) {
//             return response.json({
//                 Status: true,
//                 Message: 'Submitted Checklist count',
//                 Data: Data
//             });
//             // return sendSuccessData(response, Message :"Submitted Checklist count", Data);
//         }
//         return sendFailureMessage(response, 'Check insert value', 400);
//     } catch (error) {
//         return sendFailureMessage(response, error, 500);
//     }
// });
module.exports = Router;
