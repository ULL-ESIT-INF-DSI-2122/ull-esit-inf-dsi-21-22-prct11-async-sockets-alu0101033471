import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';
import { ResponseType } from './server';
import { RequestType } from './client';

/**
 * Clase Remove que contiene un método para borrar notas
 */
export class Remove {
  constructor(){}

  /**
  * Método removeNote que elimina una nota de un usuario
  */
  removeNote(a: RequestType):ResponseType{
    let b: ResponseType = {
      type: a.type,
      success: true,
      notes: [],
    }
    if (!fs.existsSync(`./dist/${String(a.user)}/${String(a.title)}.json`)){
      b.success = false;
      b.notes?.push(`No note found`);
      return b
      //console.error(chalk.red(`No note found`));
    } else {
      fs.unlinkSync(`./dist/${String(a.user)}/${String(a.title)}.json`);
      b.notes?.push(`Note ${String(a.title)} removed!`);
      //console.log(chalk.green(`Note ${String(a.title)} removed!`));
    }  
    return b;   
  }
}