import * as net from 'net';
import {Add} from './yargs/add_yargs';
import {List} from './yargs/list_yargs';
import {Read} from './yargs/read_yargs';
import {Remove} from './yargs/remove_yargs';
import {Modify} from './yargs/modify_yargs';
import yargs from 'yargs';

/**
 * Tipo RequestType que se pasa al servidor
 */
export type RequestType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list';
  user?: string;
  title?: string; 
  body?: string;
  color?: string;
}

export const removeOpcion = new Remove();
export const addOpcion = new Add();
export const listOpcion = new List();
export const readOpcion = new Read();
export const modifyOpcion = new Modify();
  

removeOpcion.removeNote();
addOpcion.addNote();
listOpcion.listNote();
readOpcion.readNote();
modifyOpcion.modifyNote();
  
/**
 * Conexión del cliente
 */
export const client = net.createConnection({ port: 60300 }, () => {
  yargs.parse();
  console.log('connected to server!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});