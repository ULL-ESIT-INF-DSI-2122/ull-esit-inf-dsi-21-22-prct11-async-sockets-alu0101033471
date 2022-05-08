"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
const yargs_1 = __importDefault(require("yargs"));
const client_1 = require("../client");
/**
 * Clase Remove que contiene un método para preparar el ResponseType
 */
class Remove {
    constructor() { }
    /**
    * Método removeNote que prepara el ResponseType
    */
    removeNote() {
        yargs_1.default.command({
            command: 'remove',
            describe: 'Remove the notes of the user',
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
                }
            },
            handler(argv) {
                let request = {
                    type: 'remove',
                    user: String(argv.user),
                    title: String(argv.title),
                };
                client_1.client.write(JSON.stringify(request, null, 2));
            },
        });
    }
}
exports.Remove = Remove;
