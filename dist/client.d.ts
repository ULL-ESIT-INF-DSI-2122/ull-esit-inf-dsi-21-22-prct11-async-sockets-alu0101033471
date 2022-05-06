/// <reference types="node" />
import * as net from 'net';
export declare type RequestType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    user?: string;
    title?: string;
    body?: string;
    color?: string;
};
export declare const client: net.Socket;
