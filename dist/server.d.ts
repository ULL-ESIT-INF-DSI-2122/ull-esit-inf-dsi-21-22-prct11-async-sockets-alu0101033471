/// <reference types="node" />
import * as net from 'net';
import { RequestType } from './client';
/**
 * Tipo ResponseType que se pasa al cliente
 */
export declare type ResponseType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    success: boolean;
    notes?: string[];
};
export declare let a: RequestType;
/**
 * Conexion del servidor
 */
export declare const server: net.Server;
