import { Argv, Arguments } from 'yargs';
import * as newCommand from './nestjs/new';

export const command: string = 'nestjs <command>';
export const desc: string = 'Create or generate new nestjs resources';

export const builder = (yargs: Argv) =>
    yargs.usage('Usage: $0 nestjs <command> [Options]')
        .command(newCommand)
        .demandCommand()
        .version(false);