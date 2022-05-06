import fs from 'fs';
import path from 'path';
import { ResponseType } from './server';
import { RequestType } from './client';




/**
 * Clase Add que contiene un método para añadir notas 
 */
export class Add {
  constructor(){}

  /**
  * Método addNote que añade una nota
  */
  addNote(a: RequestType):ResponseType{
    
    let b: ResponseType = {
      type: a.type,
      success: true,
      notes: [],
    }
    if (!fs.existsSync(`./dist/${String(a.user)}`)){
      fs.mkdir(path.join(__dirname, String(a.user)), (err) => {
        if (err) {
          b.success = false;
          b.notes?.push(String(err));
          return b;
          //return console.error(chalk.red(err));
        }
      });
    }
    if (fs.existsSync(`./dist/${a.user}/${a.title}.json`)){
      b.success = false;
      b.notes?.push('Note title taken!');
      return b;

      //return console.error(chalk.red('Note title taken!'));
    }
    else{
      let info = {
        title: String(a.title),
        body: String(a.body),
        color: String(a.color),
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
        b.notes?.push(`New note added!`);
        return b;
    }
  } 
   
}