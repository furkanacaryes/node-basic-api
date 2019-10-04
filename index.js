
import { Server } from 'http';
import express from 'express';
import debug from 'debug';
import IO from 'socket.io';
import mongoose from 'mongoose';
import { green, blue, bold } from 'chalk';
import config from './config';
import middleware from './middleware';
import routes from './routes';

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      return debug('app')(bold(`Mongo Error: ${err.message}`));
    }

    return debug('app')(blue('Mongo Connected!'));
  }
);

const app = express();
const server = Server(app);
const io = IO(server);

middleware(app);
routes(app);

io.on('connection', (socket) => {
  debug('app')(green('New Connection!'));
  socket.emit('log', 'Connection Established!');
});

app.listen(config.port, () => {
  debug('app')(blue(`Listening on ${bold(config.port)}`));
});
