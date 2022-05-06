/// <reference types="node" />
import * as net from 'net';
import { RequestType } from './client';
export declare type ResponseType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    success: boolean;
    notes?: string[];
};
export declare let a: RequestType;
export declare const hola: net.Server;
