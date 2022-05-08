"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = void 0;
const yargs_1 = __importDefault(require("yargs"));
const client_1 = require("../client");
/**
 * Clase Add que contiene un método para preparar el ResponseType
 */
class Add {
    constructor() { }
    /**
    * Método addNote que prepara el ResponseType
    */
    addNote() {
        yargs_1.default.command({
            command: 'add',
            describe: 'Add a new note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string',
                },
                user: {
                    describe: 'Name user',
                    demandOption: true,
                    type: 'string',
                },
                body: {
                    describe: 'Body of the note',
                    demandOption: true,
                    type: 'string',
                },
                color: {
                    describe: 'Color of the letters',
                    demandOption: true,
                    type: 'string',
                }
            },
            handler(argv) {
                let request = {
                    type: 'add',
                    user: String(argv.user),
                    title: String(argv.title),
                    body: String(argv.body),
                    color: String(argv.color),
                };
                client_1.client.write(JSON.stringify(request, null, 2));
            },
        });
    }
}
exports.Add = Add;
