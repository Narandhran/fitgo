
const dotenv = require('dotenv').config();
module.exports = {
    name: 'API',
    version: '1',
    local: {
        S3_BASE_PATH: '',
        SERVER_PORT: '8000',
        DB_NAME: 'fit-go',
        DB_PORT: '27017',
        DB_USER: '',
        DB_PASS: '',
        DB_HOST: 'mongodb://localhost',
        GET_RESOURCE_BASE_PATH: '',
        POST_RESOURCE_BASE_PATH: ''
    }
};

