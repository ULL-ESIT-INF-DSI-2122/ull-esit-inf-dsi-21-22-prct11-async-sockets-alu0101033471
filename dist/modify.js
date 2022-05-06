"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modify = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Clase Modify que contine un método que modifica las notas de un usuario
 */
class Modify {
    constructor() { }
    /**
    * Método modifyNote que modifica las notas de un usuario
    */
    modifyNote(a) {
        let b = {
            type: a.type,
            success: true,
            notes: [],
        };
        if (!fs_1.default.existsSync(`./dist/${String(a.user)}/${String(a.title)}.json`)) {
            b.success = false;
            b.notes?.push(`No note found`);
            return b;
            //console.error(chalk.red(`No note found`));
        }
        else {
            let info = {
                title: String(a.title),
                body: String(a.body),
                color: a.color
            };
            let data = JSON.stringify(info, null, 2);
            fs_1.default.writeFile(`./dist/${a.user}/${a.title}.json`, data, (err) => {
                if (err) {
                    b.success = false;
                    b.notes?.push(String(err));
                    return b;
                    //return console.error(chalk.red(err));
                }
            });
        }
        b.notes?.push(`Modified note!`);
        return b;
    }
}
exports.Modify = Modify;
