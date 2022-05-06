import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';

/**
 * Clase Remove que contiene un método para borrar notas
 */
export class Remove {
  constructor(){}

  /**
  * Método removeNote que elimina una nota de un usuario
  */
  removeNote(){
    yargs.command({
      command: 'remove',
      describe: 'Remove the notes of the user',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let request: RequestType = {
          type :  'remove',
          user: String(argv.user),
          title : String(argv.title),
        } 
        client.write(JSON.stringify(request, null, 2));
      },
    });
  }
}