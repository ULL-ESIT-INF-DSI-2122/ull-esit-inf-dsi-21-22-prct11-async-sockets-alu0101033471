import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';

/**
 * Clase Modify que contine un método para preparar el ResponseType 
 */
export class Modify {
  constructor(){}

  /**
  * Método modifyNote que prepara el ResponseType
  */
  modifyNote(){
    yargs.command({
      command: 'modify',
      describe: 'modify a note',
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
        },
        body: {
          describe: 'Body of the note',
          demandOption: true,
          type: 'string',
        },
        color: {
          describe: 'Color of the letters',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let request: RequestType = {
          type :  'update',
          user: String(argv.user),
          title : String(argv.title),
          body : String(argv.body),
          color :  String(argv.color), 
        } 
        client.write(JSON.stringify(request, null, 2));
      },
    });
  }
}