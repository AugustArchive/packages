const Logger = require('./logger');

module.exports = {
    /**
     * Creates a new instance of the Logger instance
     * @param {import('./logger').Options} options The options
     */
    create: (options) => new Logger(options),

    /**
     * The console transport
     */
    ConsoleTransport: require('./transports/console'),

    /**
     * The file transport
     */
    FileTransport: require('./transports/file'),

    /**
     * The logger instance
     */
    Logger
};