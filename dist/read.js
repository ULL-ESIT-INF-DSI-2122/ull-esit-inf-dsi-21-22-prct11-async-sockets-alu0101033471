"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Read = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Clase Read que contiene un método para leer notas
 */
class Read {
    constructor() { }
    /**
    * Método readNote que lee una nota de un usuario
    */
    readNote(a) {
        let b = {
            type: a.type,
            success: true,
            notes: [],
        };
        if (!fs_1.default.existsSync(`./dist/${String(a.user)}`)) {
            b.success = false;
            b.notes?.push(`${a.user} does not exists`);
            return b;
        }
        if (!fs_1.default.existsSync(`./dist/${String(a.user)}/${String(a.title)}.json`)) {
            b.success = false;
            b.notes?.push(`The note ${String(a.title)} does not exists`);
            return b;
        }
        else {
            let jsonData = require(`./${String(a.user)}/${String(a.title)}.json`);
            b.notes?.push(String(jsonData.title));
            b.notes?.push(String(jsonData.body));
        }
        return b;
    }
}
exports.Read = Read;
