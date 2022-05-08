"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const yargs_1 = __importDefault(require("yargs"));
const client_1 = require("../client");
/**
 * Clase List que contine un método para preparar el ResponseType
 */
class List {
    constructor() { }
    /**
    * Método listNote que prepara el ResponseType
    */
    listNote() {
        yargs_1.default.command({
            command: 'list',
            describe: 'List the notes of the user',
            builder: {
                user: {
                    describe: 'Name user',
                    demandOption: true,
                    type: 'string',
                }
            },
            handler(argv) {
                let request = {
                    type: 'list',
                    user: String(argv.user),
                };
                client_1.client.write(JSON.stringify(request, null, 2));
            },
        });
    }
}
exports.List = List;
