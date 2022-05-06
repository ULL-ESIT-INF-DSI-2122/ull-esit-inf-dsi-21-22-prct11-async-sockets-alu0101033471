import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';
import { ResponseType, hola } from './server';
import { RequestType } from './client';
/**
 * Clase List que contine un método que lista las notas de un usuario
 */
export class List {
  constructor(){}

  /**
  * Método listNote que lista las notas de un usuario
  */
  listNote(a: RequestType):ResponseType{
    let b: ResponseType = {
      type: a.type,
      success: true,
      notes: [],
    }
    if (!fs.existsSync(`./dist/${String(a.user)}`)){
      b.success = false;
        b.notes?.push(`${a.user} does not exists`);
        return b;
    } else {
      let filenames = fs.readdirSync(`./dist/${String(a.user)}`);
      let i:number = 0;
      filenames.forEach(file => {
        let jsonData = require(`./${String(a.user)}/${String(file)}`);
        b.notes?.push(String(jsonData.title));
        i++;
      });
      if(i === 0){
        b.success = false;
        b.notes?.push(`${a.user} hasn't got notes`);
        return b;
      }
    }
    return b;
  }
}