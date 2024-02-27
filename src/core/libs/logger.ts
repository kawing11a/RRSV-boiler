import chalk from "chalk";
import log, { Logger as LogInstance } from "loglevel";
import prefix from 'loglevel-plugin-prefix';
import moment from 'moment';
import { getDateTimeFormat } from "../../windowVars";

const LOG_COLORS: { [key: string]: any } = {
    TRACE: chalk.magenta,
    DEBUG: chalk.cyan,
    INFO: chalk.blue,
    WARN: chalk.yellow,
    ERROR: chalk.red,
};

class Logger {
    logInstance: LogInstance = null;

    constructor() {
        // init logging
        const logger = log.noConflict();
        logger.setLevel(log.levels.DEBUG);

        prefix.reg(logger);

        prefix.apply(logger, {
            format(level: string, name: string, timestamp: Date) {
                return `${chalk.gray(`[${timestamp}]`)} ${LOG_COLORS[level.toUpperCase()](level)} ${chalk.green(`${window.location.pathname}:`)}`;
            },
            timestampFormatter(date: Date) {
                return moment(date).format(getDateTimeFormat());
            }
        });
        this.logInstance = logger;
    }

    info(...msg: any[]) {
        this.logInstance.info(...msg);
    }

    error(...msg: any[]) {
        this.logInstance.error(...msg);
    }

    warn(...msg: any[]) {
        this.logInstance.warn(...msg);
    }

    debug(...msg: any[]) {
        this.logInstance.debug(...msg);
    }
}

export default new Logger();
