import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';


/**
 * Clase List que contine un método que lista las notas de un usuario
 */
export class List {
  constructor(){}

  /**
  * Método listNote que lista las notas de un usuario
  */
  listNote(){
    yargs.command({
      command: 'list',
      describe: 'List the notes of the user',
      builder: {
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let request: RequestType = {
          type :  'list',
          user: String(argv.user),
        } 
        client.write(JSON.stringify(request, null, 2));
      },
    });
  }
}