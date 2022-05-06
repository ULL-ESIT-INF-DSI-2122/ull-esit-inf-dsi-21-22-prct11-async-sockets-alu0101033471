"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modify = void 0;
const yargs_1 = __importDefault(require("yargs"));
const client_1 = require("../client");
/**
 * Clase Modify que contine un método que modifica las notas de un usuario
 */
class Modify {
    constructor() { }
    /**
    * Método modifyNote que modifica las notas de un usuario
    */
    modifyNote() {
        yargs_1.default.command({
            command: 'modify',
            describe: 'modify a note',
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
                    type: 'update',
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
exports.Modify = Modify;
