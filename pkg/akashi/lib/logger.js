module.exports = class Logger
{
    /**
     * Creates a new instance of the Logger instance
     * @param {LoggerInfo} info The info
     */
    constructor(info)
    {
        /**
         * The transports
         * @type {Map<string, import('./entities/transport')>}
         */
        this.transports = new Map();

        /**
         * The prefix format
         */
        this.format = info.format;
    }
};

/**
 * @typedef {Object} LoggerInfo
 * @prop {import('./entities/transport')[]} [transports] The transports
 * @prop {string} format The format for the prefix of the logger
 */