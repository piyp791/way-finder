module.exports = Object.freeze({
    ROOT_API_LABEL: '/',
    LOGIN_API_LABEL:'/login',
    SIGNUP_API_LABEL:'/signup',
    HOME_API_LABEL: '/home',
    RECORD_API_LABEL: '/record',
    PROFILE_API_LABEL: '/profile',
    UPLOAD_API_LABEL: '/upload',
    MEDIA_SELECT_API_LABEL: '/mediaSelection',
    GET_NEXT_WORD_API_LABEL: '/getNextWord',
    AWS_UPLOAD_LABEL: 'aws-upload',
    FINISH_API_LABEL: '/finish',
    ERROR_API_LABEL: '/error',
    GET_DISORDER_INFO_API_LABEL: '/getDisorderInfo',
    FORGOT_PASSWORD_API_LABEL:'/forgot',
    SEND_MAIL_API_LABEL: '/sendMail',
    RESET_API_LABEL:'/reset',
    RESET_PASSWORD_API_LABEL:'/resetPassword',

    //ERROR_MSGS
    ERROR_EMPTY_USERNAME: 'Username is empty',
    ERROR_USER_NOT_FOUND: 'Username not found',
    ERROR_INVALID_USERNAME: 'Invalid username',
    ERROR_INVALID_PASSWORD: 'Invalid password',

    INVALID_PARAM_ERROR_MSG: 'One or more paramater was invalid',
    SUCCESS_MSG: 'Success!',
    FAILURE_MSG: 'Fail!',


    //ERROR CODES
    USER_ALREADY_PRSENT_ERRORCODE: 'USERNAME_TAKEN_ERROR',
    USER_NOT_FOUND_ERRORCODE: 'USERNAME_NOT_FOUND',
    INVALID_PARAM_ERRORCODE: 'INVALID_PARAM',
    DB_ERRORCODE: 'DB_ERROR',
    CRYPTO_ERRORCODE: 'BCRYPT_ERROR',
    NO_RESULT_FROM_DB_ERRORCODE: 'NO_RESULT_FROM_DB',
    AUTHENTICATION_FAILURE_ERRORCODE: 'INVALID_PASSWORD',
    TOKEN_AUTHENTICATION_FAILURE_ERRORCODE: 'INVALID_TOKEN',
    INDEX_OUT_OF_BOUNDS_ERRORCODE: 'INDEX_OUT_OF_BOUNDS',
    INVALID_PATH_ERRORCODE: 'INVALID_PATH',
    PARAM_TO_BE_RETRIEVED_NOT_RECOGNIZED: "INVALID REQUEST PARAMETER",

    //COLLECTION NAMES
    COLLECTION_MAP :"map"
});