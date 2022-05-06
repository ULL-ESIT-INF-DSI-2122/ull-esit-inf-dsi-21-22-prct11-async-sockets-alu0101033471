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
exports.client = void 0;
const net = __importStar(require("net"));
const add_yargs_1 = require("./yargs/add_yargs");
const list_yargs_1 = require("./yargs/list_yargs");
const read_yargs_1 = require("./yargs/read_yargs");
const remove_yargs_1 = require("./yargs/remove_yargs");
const modify_yargs_1 = require("./yargs/modify_yargs");
const yargs_1 = __importDefault(require("yargs"));
const removeOpcion = new remove_yargs_1.Remove();
const addOpcion = new add_yargs_1.Add();
const listOpcion = new list_yargs_1.List();
const readOpcion = new read_yargs_1.Read();
const modifyOpcion = new modify_yargs_1.Modify();
removeOpcion.removeNote();
addOpcion.addNote();
listOpcion.listNote();
readOpcion.readNote();
modifyOpcion.modifyNote();
exports.client = net.createConnection({ port: 60300 }, () => {
    yargs_1.default.parse();
    console.log('connected to server!');
    //client.write(JSON.stringify(pruebita));
});
exports.client.on('data', (data) => {
    console.log(data.toString());
    exports.client.end();
});
exports.client.on('end', () => {
    console.log('disconnected from server');
});
