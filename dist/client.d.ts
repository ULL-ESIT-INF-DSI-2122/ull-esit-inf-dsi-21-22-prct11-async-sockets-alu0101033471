/// <reference types="node" />
import * as net from 'net';
import { Add } from './yargs/add_yargs';
import { List } from './yargs/list_yargs';
import { Read } from './yargs/read_yargs';
import { Remove } from './yargs/remove_yargs';
import { Modify } from './yargs/modify_yargs';
/**
 * Tipo RequestType que se pasa al servidor
 */
export declare type RequestType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    user?: string;
    title?: string;
    body?: string;
    color?: string;
};
export declare const removeOpcion: Remove;
export declare const addOpcion: Add;
export declare const listOpcion: List;
export declare const readOpcion: Read;
export declare const modifyOpcion: Modify;
/**
 * Conexión del cliente
 */
export declare const client: net.Socket;
