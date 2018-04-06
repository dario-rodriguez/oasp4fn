import { Argv, Arguments } from 'yargs';
import * as handlerCommand from './generate/handler';

export const command: string = 'generate';
export const aliases: string[] = ['g', 'gen'];
export const desc: string = 'Generate a new serverless resource based on template';

export const builder = (yargs: Argv) =>
    yargs.usage('Usage: $0 serverless generate <command> [Options]')
        .command(handlerCommand)
        .demandCommand()
        .version(false);

export const handler = (argv: Arguments) => {};
