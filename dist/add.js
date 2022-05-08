"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Clase Add que contiene un método para añadir notas
 */
class Add {
    constructor() { }
    /**
    * Método addNote que añade una nota
    */
    addNote(a) {
        let b = {
            type: a.type,
            success: true,
            notes: [],
        };
        if (!fs_1.default.existsSync(`./dist/${String(a.user)}`)) {
            fs_1.default.mkdir(path_1.default.join(__dirname, String(a.user)), (err) => {
                if (err) {
                    b.success = false;
                    b.notes?.push(String(err));
                    return b;
                }
            });
        }
        if (fs_1.default.existsSync(`./dist/${a.user}/${a.title}.json`)) {
            b.success = false;
            b.notes?.push('Note title taken!');
            return b;
        }
        else {
            let info = {
                title: String(a.title),
                body: String(a.body),
                color: String(a.color),
            };
            let data = JSON.stringify(info, null, 2);
            fs_1.default.writeFile(`./dist/${a.user}/${a.title}.json`, data, (err) => {
                if (err) {
                    b.success = false;
                    b.notes?.push(String(err));
                    return b;
                }
            });
            b.notes?.push(`New note added!`);
            return b;
        }
    }
}
exports.Add = Add;
