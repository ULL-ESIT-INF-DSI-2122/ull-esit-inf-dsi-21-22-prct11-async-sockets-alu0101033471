import express from 'express';
import {join} from 'path';
import {spawn} from 'child_process';

const app = express();

app.use(express.static(join(__dirname, '../execmd')));

app.get('', (_, res) => {
  res.send('<h1>My application</h1>');
});
app.get('/prueba', (req, res) => {
  if (!req.query.cmd) {
    return res.send({
      error: 'cmd no pasado por parametro',
    });
  }
  if (!req.query.args) {
    return res.send({
      error: 'argvs no pasado por parametro',
    });
  }
  //const ls = spawn(`${req.query.cmd}`, [`${req.query.cmd}`]);
  //ls.stdout.pipe(process.stdout);
  console.log(req.query);
  const com = spawn(`${req.query.cmd}`, [`${req.query.args}`]);
  com.stdout.pipe(process.stdout);

  //console.log(req.query.cmd);
  //console.log(req.query.exe);
  return res.send({
    comando: [
      {
        cmd: `${req.query.cmd}`,
        exe: `${req.query.args}`,
        
      }
    ],
  });


});
app.get('/notes', (req, res) => {
  if (!req.query.title) {
    return res.send({
      error: 'A title has to be provided',
    });
  }

  console.log(req.query.title);
  return res.send({
    notes: [
      {
        title: 'Blue note',
        body: 'This is a blue note',
        color: 'blue',
      },
      {
        title: 'Yellow note',
        body: 'This is a yellow note',
        color: 'yellow',
      },
    ],
  });
});


app.get('*', (_, res) => {
    res.send('<h1>Error ruta no deseada<h1>');
});
app.listen(3100, () => {
  console.log('Server is up on port 3000');
});
console.log(join(__dirname, `./execmd`));