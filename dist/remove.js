"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Clase Remove que contiene un método para borrar notas
 */
class Remove {
    constructor() { }
    /**
    * Método removeNote que elimina una nota de un usuario
    */
    removeNote(a) {
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
            fs_1.default.unlinkSync(`./dist/${String(a.user)}/${String(a.title)}.json`);
            b.notes?.push(`Note ${String(a.title)} removed!`);
            //console.log(chalk.green(`Note ${String(a.title)} removed!`));
        }
        return b;
    }
}
exports.Remove = Remove;
