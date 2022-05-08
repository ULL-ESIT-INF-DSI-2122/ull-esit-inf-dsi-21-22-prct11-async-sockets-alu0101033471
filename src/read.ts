import fs from 'fs';
import { ResponseType } from './server';
import { RequestType } from './client';
/**
 * Clase Read que contiene un método para leer notas
 */
export class Read {
  constructor(){}

  /**
  * Método readNote que lee una nota de un usuario
  */
  readNote(a: RequestType):ResponseType{
    let b: ResponseType = {
      type: a.type,
      success: true,
      notes: [],
    }
    if (!fs.existsSync(`./dist/${String(a.user)}`)){
      b.success = false;
      b.notes?.push(`${a.user} does not exists`);
      return b;
    }
    if (!fs.existsSync(`./dist/${String(a.user)}/${String(a.title)}.json`)){
      b.success = false;
      b.notes?.push(`The note ${String(a.title)} does not exists`);
      return b;
    } else {
      let jsonData = require(`./${String(a.user)}/${String(a.title)}.json`);
      b.notes?.push(String(jsonData.title));
      b.notes?.push(String(jsonData.body));
    }
     return b; 
  }
}