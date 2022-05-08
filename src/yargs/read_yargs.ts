import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';

/**
 * Clase Read que contiene un método para preparar el ResponseType 
 */
export class Read {
  constructor(){}

  /**
  * Método readNote que prepara el ResponseType
  */
  readNote(){
    yargs.command({
      command: 'read',
      describe: 'Read the notes of the user',
      builder: {
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        },title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let request: RequestType = {
          type :  'read',
          user: String(argv.user),
          title : String(argv.title),
        } 
        client.write(JSON.stringify(request, null, 2));
      },
    });
  }
}