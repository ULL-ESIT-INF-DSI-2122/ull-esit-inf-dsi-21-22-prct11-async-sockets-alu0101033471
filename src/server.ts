import * as net from 'net';
import { RequestType } from './client';
import {Add} from './add';
import {List} from './list';
import {Read} from './read';
import {Remove} from './remove';
import {Modify} from './modify';
import  chalk from 'chalk';


export type ResponseType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list';
  success: boolean;
  notes?: string[];
}
export let a: RequestType;
let b: ResponseType;
export const hola = net.createServer((connection) => {
  console.log(chalk.green('A client has connected.'));

  connection.on('data', (data) => {
    a = JSON.parse(data.toString());
    if(a.type === `remove`){
      const removeOpcion = new Remove();
      b = removeOpcion.removeNote(a);
    } else if (a.type === `list`){
      const listOpcion = new List();
      b = listOpcion.listNote(a);
    } else if (a.type === `add`){
      const addOpcion = new Add();
      b = addOpcion.addNote(a);
    } else if (a.type === `read`){
      const readOpcion = new Read();
      b = readOpcion.readNote(a);
    } else {
      const modifyOpcion = new Modify();
      b = modifyOpcion.modifyNote(a);
    }
   
   if(a.type === `list` && b.success === true){
     b.notes?.forEach(element => {
    let jsonData = require(`./${String(a.user)}/${String(element)}.json`);
    connection.write(chalk[`${jsonData.color}`](JSON.stringify(element,null,2) +
    '\n'));
     });
   } else if (b.success === true) {
    connection.write(chalk.green(JSON.stringify(b,null,2) +
    '\n'));
   } else {
    connection.write(chalk.red(JSON.stringify(b,null,2) +
    '\n'));
   }
   
  });

  connection.on('close', () => {
    console.log(chalk.red('A client has disconnected.'));
  });

}).listen(60300, () => {
  console.log('Waiting for clients to connect.');
});