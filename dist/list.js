"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Clase List que contine un método que lista las notas de un usuario
 */
class List {
    constructor() { }
    /**
    * Método listNote que lista las notas de un usuario
    */
    listNote(a) {
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
        else {
            let filenames = fs_1.default.readdirSync(`./dist/${String(a.user)}`);
            let i = 0;
            filenames.forEach(file => {
                let jsonData = require(`./${String(a.user)}/${String(file)}`);
                b.notes?.push(String(jsonData.title));
                i++;
            });
            if (i === 0) {
                b.success = false;
                b.notes?.push(`${a.user} hasn't got notes`);
                return b;
            }
        }
        return b;
    }
}
exports.List = List;
