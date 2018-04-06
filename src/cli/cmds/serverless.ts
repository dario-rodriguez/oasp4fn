import { Argv, Arguments } from 'yargs';

import * as newCommand from './serverless/new';
import * as ejectCommand from './serverless/eject';
import * as generateCommand from './serverless/generate';

export const command: string = 'serverless <command>';
export const aliases: string[] = ['sls'];
export const desc: string = 'Create or generate new serverless resources';

export const builder = (yargs: Argv) =>
    yargs.usage('Usage: $0 serverless <command> [Options]')
        .command(newCommand)
        .command(ejectCommand)
        .command(generateCommand)
        .demandCommand()
        .version(false);
