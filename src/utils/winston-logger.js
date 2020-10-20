const winston = require('winston');
const appRoot = require('app-root-path');
const appendIsoDate = require('./iso-date');

const options = {
    AllLog:{
        filename: `${appRoot}/app-logs/logs/app-log.log`,
        level: 'debug',
        format: winston.format.combine(
            winston.format.timestamp({ format: appendIsoDate.appendIsoDate }),
            winston.format.colorize(),
            winston.format.json(),
        ),
    },
    WarnLog:{
        filename: `${appRoot}/app-logs/logs/app-warn-log.log`,
        level: 'warn',
        format: winston.format.combine(
            winston.format.timestamp({ format: appendIsoDate.appendIsoDate }),
            winston.format.colorize(),
            winston.format.json(),
        ),
    },
    errorLog:{
        filename: `${appRoot}/app-logs/logs/app-error-log.log`,
        level: 'error',
        format: winston.format.combine(
            winston.format.timestamp({ format: appendIsoDate }),
            winston.format.colorize(),
            winston.format.json(),
        ),
    },
    httpLog:{
        level: 'verbose',
        format: winston.format.combine(
            winston.format.timestamp({ format: appendIsoDate }),
            winston.format.colorize(),
            winston.format.json(),
        ),
    },
    console:{
        level: 'debug',
        format: winston.format.combine(
            winston.format.timestamp({ format: appendIsoDate }),
            winston.format.colorize(),
            winston.format.json(),
        ),
    },
    rejection: {
        filename: `${appRoot}/app-logs/logs/app-rejection-log.log`,
    }
}

const loggerWinston = winston.createLogger({
    transports: [
        new winston.transports.File(options.AllLog),
        new winston.transports.File(options.errorLog),
        new winston.transports.File(options.WarnLog),
        new winston.transports.Http(options.httpLog),
        new winston.transports.Console(options.console),
    ],
    rejectionHandlers: [new winston.transports.File(options.rejection)],
    exitOnError: false,
})

loggerWinston.stream = {
    write(message) {
        loggerWinston.info(message);
    },
};

module.exports = loggerWinston;