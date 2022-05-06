import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';
import { ResponseType } from './server';
import { RequestType } from './client';
/**
 * Clase Modify que contine un método que modifica las notas de un usuario
 */
export class Modify {
  constructor(){}

  /**
  * Método modifyNote que modifica las notas de un usuario
  */
  modifyNote(a: RequestType):ResponseType{
    let b: ResponseType = {
      type: a.type,
      success: true,
      notes: [],
    }
    if (!fs.existsSync(`./dist/${String(a.user)}/${String(a.title)}.json`)){
      b.success = false;
      b.notes?.push(`No note found`);
      return b;

      //console.error(chalk.red(`No note found`));
    }
    else{
      let info = {
        title: String(a.title),
        body: String(a.body),
        color: a.color
      };
      let data = JSON.stringify(info, null, 2);
        fs.writeFile(`./dist/${a.user}/${a.title}.json`, data, (err) => {
          if (err) {
            b.success = false;
            b.notes?.push(String(err));
            return b;
            //return console.error(chalk.red(err));
          }
        });
    }
    b.notes?.push(`Modified note!`);
    return b;
  }
}