const bcrypt = require('bcrypt');

const checkPassword = async (password, dbPassword) => {
    const decryptedPassword = await bcrypt.compare(password, dbPassword);
    return decryptedPassword;
};
const encryptPassword = async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return encryptedPassword;
};
let password = 'sanjai@123';
let dbPassword = '$2b$10$U4SWKhQeEcvayDD3pO6AFu6f6UN0hqz/0LGrQ6qcYFDed0/yXq07G';
encryptPassword(password);
checkPassword(password, dbPassword);
