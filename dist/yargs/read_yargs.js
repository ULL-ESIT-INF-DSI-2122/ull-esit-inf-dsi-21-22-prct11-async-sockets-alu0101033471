"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Read = void 0;
const yargs_1 = __importDefault(require("yargs"));
const client_1 = require("../client");
/**
 * Clase Read que contiene un método para leer notas
 */
class Read {
    constructor() { }
    /**
    * Método readNote que lee una nota de un usuario
    */
    readNote() {
        yargs_1.default.command({
            command: 'read',
            describe: 'Read the notes of the user',
            builder: {
                user: {
                    describe: 'Name user',
                    demandOption: true,
                    type: 'string',
                }, title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string',
                }
            },
            handler(argv) {
                let request = {
                    type: 'read',
                    user: String(argv.user),
                    title: String(argv.title),
                };
                client_1.client.write(JSON.stringify(request, null, 2));
            },
        });
    }
}
exports.Read = Read;
