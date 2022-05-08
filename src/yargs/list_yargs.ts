import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';


/**
 * Clase List que contine un método para preparar el ResponseType 
 */
export class List {
  constructor(){}

  /**
  * Método listNote que prepara el ResponseType
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