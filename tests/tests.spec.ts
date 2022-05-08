import 'mocha';
import {expect} from 'chai';
import {Add} from '../src/yargs/add_yargs';
import {List} from '../src/yargs/list_yargs';
import {Read} from '../src/yargs/read_yargs';
import {Remove} from '../src/yargs/remove_yargs';
import * as Adi from '../src/add';
import * as Listar from '../src/list';
import * as Leer from '../src/read';
import * as Borrar from '../src/remove';
import {addOpcion, readOpcion, removeOpcion, listOpcion, modifyOpcion} from '../src/client';
import { Modify } from '../src/yargs/modify_yargs';
import * as Modificar from '../src/modify';
import { RequestType, client } from '../src/client';
import {EventEmitter} from 'events';


let request1: RequestType = {
  type :  'add',
  user: `Marcos`,
  title : `titulo verde`,
  body : `mensaje`,
  color :  `green`,
  
} 
let request2: RequestType = {
  type :  'list',
  user: 'Alba', 
} 
let request3: RequestType = {
  type :  'read',
  user: `Marcos`,
  title : `hola`,
} 
let request4: RequestType = {
  type :  'update',
  user: `Marcos`,
  title : `titulo verde`,
  body : `mensaje`,
  color :  `green`,
  
} 
let request5: RequestType = {
  type :  'remove',
  user: `Marcos`,
  title : `titulo verde`,
  body : `mensaje`,
  color :  `green`,
  
} 
/*describe('Test de la Clase Add de yargs',() => {
  it ('addOpcion',() => { 
    expect(addOpcion instanceof Add).to.eql (true);
    expect(addOpcion.addNote()).not.to.equal (null);
  });
});
describe('Test de la Clase List de yargs',() => {
  it ('listOpcion',() => { 
    expect(listOpcion instanceof List).to.eql (true);
    expect(listOpcion.listNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Read de yargs',() => {
  it ('readOpcion',() => { 
    expect(readOpcion instanceof Read).to.eql (true);
    expect(readOpcion.readNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Remove de yargs',() => {
  it ('removeOpcion',() => { 
    expect(removeOpcion instanceof Remove).to.eql (true);
    expect(removeOpcion.removeNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Modify de yargs',() => {
  it ('modifyOpcion',() => { 
    expect(modifyOpcion instanceof Modify).to.eql (true);
    expect(modifyOpcion.modifyNote()).not.to.equal (null);
  });
});
*/
describe('Test de la Clase Add',() => {
  it ('addOpcion',() => { 
    const prueba = new Adi.Add();
    expect(prueba instanceof Adi.Add).to.eql (true);
    expect(prueba.addNote(request1)).not.to.equal (null);
  });
});
describe('Test de la Clase List',() => {
  it ('listOpcion',() => { 
    const prueba3 = new Listar.List;
    expect(prueba3 instanceof Listar.List).to.eql (true);
    expect(prueba3.listNote(request2)).not.to.equal (null);
  });
});
describe('Test de la Clase Read',() => {
  it ('readOpcion',() => { 
    const prueba2 = new Leer.Read;
    expect(prueba2 instanceof Leer.Read).to.eql (true);
    expect(prueba2.readNote(request3)).not.to.equal (null);
  });
});
describe('Test de la Clase Remove',() => {
  it ('removeOpcion',() => { 
    const prueba4 = new Borrar.Remove;
    expect(prueba4 instanceof Borrar.Remove).to.eql (true);
    expect(prueba4.removeNote(request5)).not.to.equal (null);
  });
});
describe('Test de la Clase Modify',() => {
  it ('modifyOpcion',() => { 
    const prueba_ = new Modificar.Modify;
    expect(prueba_ instanceof Modificar.Modify).to.eql (true);
    expect(prueba_.modifyNote(request4)).not.to.equal (null);
  });
});





describe('MessageEventEmitterClient', () => {
  it('Should emit a message event once it gets a complete message', (done) => {
    const socket = new EventEmitter();
    //const client = new MessageEventEmitterClient(socket);

    client.on('message', (message) => {
      expect(message).to.be.eql({'type': 'add', 'user': 'Marcos', 'body': 'hola', 'color': 'green'});
      done();
    });

    socket.emit('data', '{"type": "add", "user": "Marcos", "body": "hola"');
    socket.emit('data', ', "color": "green"}');
    socket.emit('data', '\n');
  });
});