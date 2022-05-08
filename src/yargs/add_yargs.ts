import yargs from 'yargs';
import { RequestType } from '../client';
import { client } from '../client';



/**
 * Clase Add que contiene un método para preparar el ResponseType 
 */
export class Add {
  constructor(){}

  /**
  * Método addNote que prepara el ResponseType
  */
  addNote(){
    yargs.command({
      command: 'add',
      describe: 'Add a new note',
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
          type :  'add',
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