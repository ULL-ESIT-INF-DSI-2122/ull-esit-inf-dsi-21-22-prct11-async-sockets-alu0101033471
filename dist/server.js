"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hola = exports.a = void 0;
const net = __importStar(require("net"));
const add_1 = require("./add");
const list_1 = require("./list");
const read_1 = require("./read");
const remove_1 = require("./remove");
const modify_1 = require("./modify");
const chalk_1 = __importDefault(require("chalk"));
let b;
exports.hola = net.createServer((connection) => {
    console.log(chalk_1.default.green('A client has connected.'));
    connection.on('data', (data) => {
        exports.a = JSON.parse(data.toString());
        if (exports.a.type === `remove`) {
            const removeOpcion = new remove_1.Remove();
            b = removeOpcion.removeNote(exports.a);
        }
        else if (exports.a.type === `list`) {
            const listOpcion = new list_1.List();
            b = listOpcion.listNote(exports.a);
        }
        else if (exports.a.type === `add`) {
            const addOpcion = new add_1.Add();
            b = addOpcion.addNote(exports.a);
        }
        else if (exports.a.type === `read`) {
            const readOpcion = new read_1.Read();
            b = readOpcion.readNote(exports.a);
        }
        else {
            const modifyOpcion = new modify_1.Modify();
            b = modifyOpcion.modifyNote(exports.a);
        }
        if (exports.a.type === `list` && b.success === true) {
            b.notes?.forEach(element => {
                let jsonData = require(`./${String(exports.a.user)}/${String(element)}.json`);
                connection.write(chalk_1.default[`${jsonData.color}`](JSON.stringify(element, null, 2) +
                    '\n'));
            });
        }
        else if (b.success === true) {
            connection.write(chalk_1.default.green(JSON.stringify(b, null, 2) +
                '\n'));
        }
        else {
            connection.write(chalk_1.default.red(JSON.stringify(b, null, 2) +
                '\n'));
        }
    });
    connection.on('close', () => {
        console.log(chalk_1.default.red('A client has disconnected.'));
    });
}).listen(60300, () => {
    console.log('Waiting for clients to connect.');
});
